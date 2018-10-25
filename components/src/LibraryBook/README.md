```js
const selected = false;
<LibraryBook.Thumbnail
  viewType={LibraryBook.VIEW_TYPE.Portrait}
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  adultBadge
  updateBadge
  ridiSelect
  unitBook
  bookCount={50}
  bookCountUnit={LibraryBook.BOOK_COUNT_UNIT.Serial}
  editMode
  selected={selected}
  onSelected={() => {console.log('selected!')}}
/>
```
```js
<LibraryBook.LandscapeBook
  thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  title="위대한 소설가"
/>
```
```js
<div className="CustomBook">
  <LibraryBook.ThumbnailImage
    thumbnailUrl="//misc.ridibooks.com/cover/425063864/xlarge"
  />
</div>
```