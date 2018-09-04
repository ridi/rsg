# RSG

Ridi Style Guide. Includes common style assets used in Ridibooks store.
https://rsg.ridicorp.com/

## Development

1. Install dependencies
    ```sh
    $ yarn install
    ```

2. Run component explorer
    ```sh
    $ yarn build:watch
    $ yarn storybook
    ```
    or
    ```sh
    $ yarn styleguide
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

