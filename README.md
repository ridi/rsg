# RSG

Ridi Style Guide. Includes common style assets used in Ridibooks store.
https://rsg.ridicorp.com/

## Development

```sh
$ yarn install # install dependencies
$ yarn dev:watch
$ yarn storybook
```

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

