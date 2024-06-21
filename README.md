> Live Demo https://zemogas-ui-test.web.app/

# How to run the front-end

* Preparation:
  - Create a .env file, the following are keys from firebase
  ```
  VITE_API_KEY=
  VITE_DATABASE_URL=
  ```

* Install:
```bash
npm i
```

* Run:
```bash
npm run dev
```

# How to seed firebase

* Preparation:
  - `cd api` and `npm i`
  - Create a .env file in the same folder, same firebase keys plus Leonardo ai key
  ```
  API_KEY=
  DATABASE_URL=
  LEONARDO_KEY=
  ```

* Run:
```bash
node index.js
```
- Then wait at least 30 seconds and you should start to see the creation logs