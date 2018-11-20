```js
const selected = true;
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
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
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
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
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
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
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  adultBadge
  updateBadge
  notAvailable
  expired
/>
```
```js
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  adultBadge
  updateBadge
  ridiselect
  expired
/>
```
```js
<LibraryBook.PortraitBook
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  title="위대한 소설가"
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
  downloadProgress={80}
/>
```
```js
<LibraryBook.LandscapeBook
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  title="위대한 소설가"
  downloadStatus={LibraryBook.DOWNLOAD_STATUS.Downloading}
  downloadProgress={80}
/>
```
```js
<div className="CustomBook">
  <LibraryBook.ThumbnailImage
    thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
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
