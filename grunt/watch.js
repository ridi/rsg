module.exports = {
  iconfont: {
    files: ['iconfont/svg/*.svg'],
    tasks: ['webfont:iconfont', 'newer:less'],
    options: {
      spawn: false
    }
  },
  svgicon: {
    files: ['svg-icon/svg/design/*.svg'],
    tasks: ['svgbg:svgicon', 'newer:less'],
    options: {
      spawn: false
    }
  },
  styles: {
    files: ['rui/less/*.less', 'iconfont/less/*.less', 'svg-icon/less/*.less'],
    tasks: ['newer:less'],
    options: {
      spawn: false
    }
  },
  js: {
    files: ['rui/js/*.js'],
    tasks: ['newer:uglify'],
    options: {
      spawn: false
    }
  }
};
