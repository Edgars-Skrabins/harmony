module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'error',
    'no-undef': 'off',
    'class-property/class-property-semicolon': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // Add your ESLint rules here
  },
  overrides: [
    {
      files: ['tests/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
