### Thumbnail
```js
const selected = true;
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BookCountUnit.Serial}
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
  onSelectedChange={() => {console.log('selected!')}}
  readingStatus={LibraryBook.ReadingStatus.New}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063833/xlarge"
  adultBadge
  updateBadge
  ridiselect
  notAvailable
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BookCountUnit.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  onSelectedChange={() => {console.log('selected!')}}
  readingStatus={LibraryBook.ReadingStatus.New}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BookCountUnit.Serial}
  bookCountWrapper={{
    wrapper: 'a',
    getProps() {
      return {
        href: '#',
      };
    },
  }}
  readingStatus={LibraryBook.ReadingStatus.Opened}
  readingProgress={0.3}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  ridiselect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BookCountUnit.Serial}
  downloadStatus={LibraryBook.DownloadStatus.Downloading}
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  adultBadge
  updateBadge
  notAvailable
  expired
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.ViewType.Portrait}
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
  downloadStatus={LibraryBook.DownloadStatus.Downloading}
  downloadProgress={80}
/>
```
```js
<LibraryBook.PortraitBook
  thumbnailUrl="https://misc.ridibooks.com/cover/3421000159/xxlarge?dpi=xxhdpi"
  title="위대한 소설가"
  author="임한백"
  downloadStatus={LibraryBook.DownloadStatus.Downloading}
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
    downloadStatus={LibraryBook.DownloadStatus.Downloading}
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
    readingStatus={LibraryBook.ReadingStatus.Opened}
    readingProgress={0.72}
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
    readingStatus={LibraryBook.ReadingStatus.New}
    bookCount={50}
    bookCountUnit={LibraryBook.BookCountUnit.Serial}
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
  downloadStatus={LibraryBook.DownloadStatus.Downloadable}
/>
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DownloadStatus.Wating}
/>
<LibraryBook.DownloadButton
  downloadStatus={LibraryBook.DownloadStatus.Downloading}
  downloadProgress={80}
/>
```
