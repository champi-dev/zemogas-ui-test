module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // Disable React in scope for new JSX transform
    '@typescript-eslint/no-non-null-assertion': 'off', // Allow non-null assertion
    '@typescript-eslint/explicit-function-return-type': 'off', // Disable explicit return type rule
    '@typescript-eslint/no-confusing-void-expression': 'off', // Allow void expressions in arrow functions
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
}
