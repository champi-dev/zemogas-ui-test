import Fastify from 'fastify';
import puppeteer from 'puppeteer';

import dotenv from 'dotenv';

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.get('/api/celebrity/:name', async (request, reply) => {
    const { name } = request.params;

    try {
        const { bio, category } = await scrapeGoogle(name);
        reply.send({ name, bio, category });
    } catch (error) {
        console.error('Error fetching data:', error);
        reply.code(500).send({ error: 'Error fetching data' });
    }
});

const levenshtein = (a, b) => {
    const matrix = Array.from({ length: b.length + 1 }, () => []);

    for (let i = 0; i <= b.length; i++) {
        matrix[i][0] = i;
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
    }

    return matrix[b.length][a.length];
};

const scrapeGoogle = async (name) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(`https://www.google.com/search?q=${encodeURIComponent(name)}+biography`, { waitUntil: 'networkidle2' });

    const result = await page.evaluate(() => {
        return document.body.innerText;
    });

    await browser.close();

    const bioKeywords = ['is a', 'was born', 'is known for', 'is an', 'was a'];
    const categoryKeywords = ['actor', 'musician', 'politician', 'businessman', 'entrepreneur', 'athlete', 'entertainer'];

    const findBestMatch = (text, keywords) => {
        let bestMatch = { keyword: null, distance: Infinity, matchedText: '' };

        for (const keyword of keywords) {
            const regex = new RegExp(`.{0,100}${keyword}.{0,300}`, 'gi');
            const matches = text.match(regex);

            if (matches) {
                for (const match of matches) {
                    const distance = levenshtein(keyword, match);
                    if (distance < bestMatch.distance) {
                        bestMatch = { keyword, distance, matchedText: match };
                    }
                }
            }
        }

        return bestMatch.matchedText || `No ${keywords[0]} found`;
    };

    const bio = findBestMatch(result, bioKeywords);
    const categoryMatch = findBestMatch(result, categoryKeywords);

    // Ensure category is a single word
    const category = categoryKeywords.find(keyword => categoryMatch.includes(keyword)) || 'No category found';

    return { bio, category };
};

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
