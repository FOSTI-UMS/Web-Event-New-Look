module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': [0],
    'import/no-extraneous-dependencies': [0],
    'react/react-in-jsx-scope': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js'],
    }],
  },
};
