module.exports = {
  iconfont: {
    src: 'iconfont/svg/*.svg',
    dest: 'iconfont/fonts',
    destLess: 'iconfont/less',
    options: {
      normalize: true,
      font: 'ridi-icon',
      relativeFontPath: '../fonts',
      fontPathVariables: true,
      stylesheet: 'less',
      template: 'iconfont/templates/ridi_tmpl.less',
      types: 'woff2, woff, ttf',
      fontHeight: 1024,
      descent: 64,
      htmlDemo: true,
      htmlDemoTemplate: 'iconfont/templates/ridi_tmpl.html',
      destHtml: 'iconfont/html',
      customOutputs: [{
        template: 'iconfont/templates/ridi_tmpl.json.js',
        dest: 'iconfont/ridi-icon.json'
      }],
    },
  },
};
