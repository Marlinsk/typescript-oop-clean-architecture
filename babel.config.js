module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@core': './src/core',
        '@data': './src/data',
        '@frameworks': './src/frameworks',
        '@presents': './src/presents',
        '@view-models': './src/view-models'
      }
    }]
  ],
}