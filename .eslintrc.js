module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'prettier',
    'plugin:vue/recommended',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    indent: ['error', 2],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
