// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    ...(isProduction
      ? [
          purgecss({
            content: [
              './src/**/*.html',
              './src/**/*.ts'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: [/^cdk-/, /^mat-/, /^ng-/, /^fa-/] // adjust based on your libs
            }
          })
        ]
      : [])
  ]
};
