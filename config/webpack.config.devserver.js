var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var path = require('path')

var outputFile = 'vue-ical-calendar'
var globalName = 'VueIcalCalendar'

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.browser.js',
    publicPath: "/assets/",    
    library: globalName,
    libraryTarget: 'umd',
  },
  devtool: 'eval-source-map',
})
