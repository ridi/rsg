module.exports = {
  options: {
    plugins: [
      new (require('less-plugin-clean-css'))
    ]
  },
  iconfont: {
    files: [
      {
        expand: true,
        flatten: true,
        cwd: 'iconfont/less',
        src: '*.less',
        dest: 'iconfont/css/',
        ext: '.css',
        extDot: 'last'
      }
    ]
  },
  rui: {
    files: [
      {
        expand: true,
        flatten: true,
        cwd: 'rui/less',
        src: ['rui.less', 'rui.e.less', 'page_rui.less', 'navigation.less'],
        dest: 'rui/css/',
        ext: '.css',
        extDot: 'last'
      }
    ]
  }
};
