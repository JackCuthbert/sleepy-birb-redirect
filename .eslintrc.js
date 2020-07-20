module.exports = {
  env: { webextensions: true },
  extends: ['standard', 'prettier', 'prettier/standard'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
