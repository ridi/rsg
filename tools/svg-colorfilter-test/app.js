angular.module('findTheColor', [])
  .controller('AppController', function($scope){
    $scope.color = {
      baseHEX: 'bbbbbb',
      baseRGB: '',
      baseHSL: '',
      targetHEX: 'bbbbbb',
      targetRGB: '',
      targetHSL: '',
      appliedRGB: ''
    };

    $scope.filter = {
      hueRotation: 0,
      saturation: 100,
      brightness: 100
    };

    $scope.cssToCopy = '';

    $scope.init = function(){
      applyFilterCSS(0, 100, 100);
      applyFilterCanvas(0, 100, 100);
      $scope.convertColor($scope.color.baseHEX, 'base');
      $scope.convertColor($scope.color.targetHEX, 'target');
    }

    function HEXtoRGB(hex){
      var rgb = [];
      if (hex.length == 3) {
        hex = hex + hex;
      }
      for (var i = 0; i < 6; i+=2) {
        rgb.push(parseInt(hex.substr(i,2),16));
        // fail = fail || rgb[rgb.length - 1].toString() === 'NaN';
      }
      return rgb.toString();
    }

    function RGBtoHSL(rgb){
      rgb = rgb.split(',');

      var r, g, b, d, h, l, max, min, s;

      r = rgb[0]/255;
      g = rgb[1]/255;
      b = rgb[2]/255;

      max = Math.max(r, g, b);
      min = Math.min(r, g, b);

      h = 0;
      s = 0;
      l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
        }
        h /= 6;
      }
      h = Math.ceil(h * 360);
      s = (Math.ceil(s * 100));
      l = (Math.ceil(l * 100));

      return [h, s, l].toString();
    }

    $scope.convertColor = function(hex, type) {
      if(hex.length === 3 || hex.length === 6){
        $scope[ type + 'Style' ] = { background: '#'+hex };
        $scope.color[ type + 'RGB' ] = HEXtoRGB($scope.color[ type + 'HEX' ]);
        $scope.color[ type + 'HSL' ]= RGBtoHSL(HEXtoRGB($scope.color[ type + 'HEX' ]));
      } else {
        $scope[ type + 'Style' ] = { background: 'white' };
        $scope.color[ type + 'RGB' ] = '';
        $scope.color[ type + 'HSL' ] = '';
      }
    };

    function applyFilterCSS (h, s, b) {
      $scope.cssToCopy = 'hue-rotate('+ h + 'deg) saturate(' + s + '%) brightness(' + b + '%)';
      $scope.filteredStyle = {
        'background': '#' + $scope.color.baseHEX,
        '-webkit-filter' : $scope.cssToCopy
      };
    }

    function applyFilterCanvas(h, s, b) {
      var c = document.getElementById("filtered_canvas");
      var ctx = c.getContext("2d");
      ctx.filter = "hue-rotate(" + h + "deg) saturate(" + s + "%) brightness(" + b + "%)";
      ctx.fillStyle = "#" +  $scope.color.baseHEX;
      ctx.fillRect(0, 0, 220, 220);
      $scope.color.appliedRGB = ctx.getImageData(10, 10, 20, 20).data.slice(0,3);
    }

    $scope.applyFilter = function(){
      var h = $scope.filter.hueRotation;
      var s = $scope.filter.saturation;
      var b = $scope.filter.brightness;
      applyFilterCSS(h, s, b);
      applyFilterCanvas(h, s, b);
    }

    $scope.calculate = function(){
      var baseHSL = $scope.color.baseHSL.split(',');
      var targetHSL = $scope.color.targetHSL.split(',');
      $scope.filter.hueRotation = targetHSL[0] - baseHSL[0];
      $scope.filter.saturation = targetHSL[1] / baseHSL[1] * 100;
      $scope.filter.brightness = targetHSL[2] / baseHSL[2] * 100;
      $scope.applyFilter();
    };

    $scope.copyFilterCSS = function(){
      document.querySelector('#css_to_copy').select();
      document.execCommand('copy');
    };

  });