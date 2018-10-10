# RSG

[![npm (scoped)](https://img.shields.io/npm/v/@ridi/rsg.svg)](https://www.npmjs.com/package/@ridi/rsg)
[![Build Status](https://travis-ci.com/ridi/rsg.svg?branch=master)](https://travis-ci.com/ridi/rsg)

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

## Publish
If any tag is pushed to `master` branch,
the package is published to [NPM](https://www.npmjs.com/package/@ridi/rsg) automatically by [Travis CI](https://travis-ci.com/ridi/rsg).

> There is an [issue](https://github.com/travis-ci/dpl/issues/143) that Travis CI does not report deploy failure.
So we should manually check the failure in [Travis CI's console](https://travis-ci.com/ridi/rsg)
if the package is not updated on NPM after the deploy process is finished.
