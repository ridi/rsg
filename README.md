# RSG 

[![Greenkeeper badge](https://badges.greenkeeper.io/ridi/rsg.svg)](https://greenkeeper.io/)

Ridi Style Guide. Includes common style assets used in Ridibooks store.
https://rsg.ridicorp.com/

## Usage

### Iconfont

You can import lessfile and override font path variable.
 
```
@import "less/ridi-icon.less";
@ridi-iconfont-path: "customPath/";
```

### RUI

You can import lessfiles and override path variables for iconfont and image sources.
```
@import "less/rui.less";
@ridi-iconfont-path: "customPathToIconfontFolder/";
@rui-images-path: "customPathToImagesFolder/";
```

