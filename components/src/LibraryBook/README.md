### Thumbnail
```js
const selected = true;
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  selectMode
  selected={selected}
  onSelected={() => {console.log('selected!')}}
  readingStatus={LibraryBook.READING_STATUS.New}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063833/xlarge"
  adultBadge
  updateBadge
  ridiselect
  notAvailable={true}
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  onSelected={() => {console.log('selected!')}}
  readingStatus={LibraryBook.READING_STATUS.New}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  readingStatus={LibraryBook.READING_STATUS.Opened}
  readingProgress={20}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  notAvailable
  expired
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  expired
/>
```
### PortraitBook
```js
<LibraryBook.PortraitBook
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  title="위대한 소설가"
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
  downloadProgress={80}
/>
```
```js
<LibraryBook.PortraitBook
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  title="위대한 소설가"
  author="임한백"
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
  downloadProgress={80}
/>
```
### LandscapeBook
```js
<div style={{ border: '1px dotted magenta' }}>
  <LibraryBook.LandscapeBook
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
    thumbnailWidth={50}
    title="위대한 소설가"
    downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
    downloadProgress={80}
    downloadSize={13.4}
    expiredAt="21일 4시간 남음"
  />
</div>
```
```js
<div style={{ border: '1px dotted magenta' }}>
  <LibraryBook.LandscapeBook
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
    thumbnailWidth={60}
    title="위대한 소설가"
    author="임한백"
    adultBadge
    readingStatus={LibraryBook.READING_STATUS.Opened}
    readingProgress={30}
    annotations={{
      bookMarkCount: 4,
      highlightCount: 10,
      memoCount: 4,
    }}
    ridiselect
  />
</div>
```
```js
<div style={{ border: '1px dotted magenta' }}>
  <LibraryBook.LandscapeBook
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
    thumbnailWidth={60}
    title="위대한 소설가"
    author="임한백"
    unitBook
    updateBadge
    readingStatus={LibraryBook.READING_STATUS.New}
    bookCount={50}
    bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
    bookCountWrapper={{
      wrapper: 'a',
      getProps() {
        return {
          href: '#',
        };
      },
    }}
  />
</div>
```
### Custom
```js
<div className="CustomBook">
  <LibraryBook.ThumbnailImage
    thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  />
</div>
```
```js
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloadable}
/>
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Wating}
/>
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
  downloadProgress={80}
/>
```
