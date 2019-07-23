module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  plugins: ['vue'],
  rules: {
    'arrow-parens': 0,
    'no-useless-escape': 0,
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': [2, { vars: 'local', args: 'none' }],
    semi: [0],
    eqeqeq: [0],
    'no-multiple-empty-lines': [0, { max: 100 }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
