```js
<Book
  dto={{
    id: '3',
    thumbnail: {
      large: 'https://misc.ridibooks.com/cover/593000658/large',
      small: '',
      xxlarge: '',
    },
  }}
  className="RSGBook-preset-landscape"
>
  {({ Thumbnail, Metadata }) => (
    <>
      <Thumbnail.wrapper thumbnailSize={80} link="unused">
        <Thumbnail.coverImage size="large" required />
        <Thumbnail.circleBadge />
        <Thumbnail.hdBadge />
        <Thumbnail.setBooklet />
      </Thumbnail.wrapper>
      <Metadata.wrapper>
        <Metadata.title required link="unused" />
        <Metadata.subTitle required />
        <div className="RSGBookMetadata_Info">
          <Metadata.authors required simple={true} />
          <Metadata.seriesCount required />
          <Metadata.publisher required />
        </div>
        <Metadata.description required />
        <Metadata.price required />
        <Metadata.bookTypeBadge required />
        <Metadata.someDealBadge required />
      </Metadata.wrapper>
    </>
  )}
</Book>
```

```js
const book = {
  'id': '593000658',
  'title': {
    'main': '그대 눈동자에 건배',
    'sub': '일본의 소설가 히가시노 게이고 소설집',
    'prefix': '[연재]',
  },
  'description': '『나미야 잡화점의 기적』은 2012년 3월 일본에서 출간되어 큰 화제를 불러일으킨, 우리 시대를 대표하는 작가 히가시노 게이고의 최신작이다. 작가가 그동안 일관되게 추구해온 인간 내면에 잠재한 선의에 대한 믿음이 작품 전반에 깔려 있는 이번 이야기에는 그동안 히가시노 게이고 하면 떠올랐던 살인 사건이나 명탐정 캐릭터는 전혀 등장하지 않는다. 그럼에도 불구하고 마치 퍼즐을 맞추어가는 듯한 치밀한 짜임새는 과연 히가시노 게이고의 작품답게 명불허전의 짜릿한 쾌감을 선사하며 감동을 자아내 작가의 고정 독자를 충분히 매료시킨다.',
  'thumbnail': {
    'small': 'https://misc.ridibooks.com/cover/593000658/small',
    'large': 'https://misc.ridibooks.com/cover/593000658/large',
    'xxlarge': 'https://misc.ridibooks.com/cover/593000658/xxlarge',
  },
  'categories': [
    {
      'id': 107,
      'name': '추리\/미스터리\/스릴러',
      'genre': 'general',
      'sub_genre': 'general',
      'is_series_category': false,
    },
    {
      'id': 103,
      'name': '일본소설',
      'genre': 'comic',
      'sub_genre': 'lightnovel',
      'is_series_category': true,
    },
  ],
  'series': {
    'id': '593000658',
    'volume': 0,
    'property': {
      'last_volume_id': '593000676',
      'title': '그대 눈동자에 건배',
      'unit': '권',
      'free_book_count': 3,
      'total_book_count': 38,
      'is_serial': false,
      'is_completed': true,
    },
    'price_info': {
      'buy': {
        'price': 17600,
        'regular_price': 17600,
        'discount_percentage': 0,
      },
      'rent': {
        'regular_price': 10000,
        'rental_days': 30,
        'discount_percentage': 10,
        'price': 9000,
      },
    },
  },
  'setbook': {
    'member_books_count': 5,
    'calculation_policy': 2,
  },
  'price_info': {
    'paper': {
      'price': 13000,
    },
    'buy': {
      'regular_price': 10000,
      'price': 9000,
      'discount_percentage': 10,
    },
    'rent': {
      'regular_price': 10000,
      'discount_percentage': 50,
      'rental_days': 180,
      'price': 5000,
    },
    'cashback': {
      'cashback_amount': 2000,
    },
    'flatrate': {
      'id': 12,
    },
    'pointback': {
      'pointback_amount': 1000,
      'point_duration': 30,
    },
  },
  'authors': {
    'author': [
      {
        'id': 9095,
        'name': '히가시노 게이고',
      },
    ],
    'translator': [
      {
        'id': 3435,
        'name': '양윤옥',
      },
      {
        'id': 2785,
        'name': '김세중',
      },
    ],
    'illustrator': [
      {
        'id': 907,
        'name': '허영만',
      },
    ],
  },
  'file': {
    'character_count': 135731,
    'page_count': 582,
    'size': 12849,
    'format': 'epub',
    'is_drm_free': false,
    'is_comic': false,
    'is_webtoon': false,
    'is_manga': false,
    'is_comic_hd': true,
  },
  'property': {
    'is_novel': true,
    'is_magazine': false,
    'is_adult_only': true,
    'is_new_book': true,
    'is_open': true,
    'is_somedeal': true,
    'is_trial': false,
    'preview_rate': 8.0,
    'review_display_id': '593000611',
    'kpc_id': 'KPC1000028619',
  },
  'support': {
    'android': true,
    'ios': true,
    'mac': true,
    'paper': true,
    'windows': true,
    'web_viewer': false,
  },
  'publish': {
    'ridibooks_register': '2017-12-23',
    'ridibooks_publish': '2017-12-25',
    'paper_book_publish': '2017-11-27',
  },
  'publisher': {
    'id': 593,
    'name': '현대문학',
  },
  'last_modified': '2017-01-01 00:00:00',
};

<>
  <Book dto={book} className="RSGBook-preset-landscape">
    {({ Thumbnail, Metadata }) => (
      <>
        <Thumbnail.wrapper thumbnailSize={80} link="unused">
          <Thumbnail.coverImage size="large" required />
          <Thumbnail.circleBadge />
          <Thumbnail.hdBadge />
          <Thumbnail.setBooklet />
        </Thumbnail.wrapper>
        <Metadata.wrapper>
          <Metadata.title required link="unused" />
          <Metadata.subTitle required />
          <div className="RSGBookMetadata_Info">
            <Metadata.authors required simple={true} />
            <Metadata.seriesCount required />
            <Metadata.publisher required />
          </div>
          <Metadata.description required />
          <Metadata.price required />
          <Metadata.bookTypeBadge required />
          <Metadata.someDealBadge required />
        </Metadata.wrapper>
      </>
    )}
  </Book>

  <Book dto={book}>
    {({ Thumbnail, Metadata }) => (
      <>
        <Thumbnail.wrapper thumbnailSize={120}>
          <Thumbnail.coverImage />
          <Thumbnail.circleBadge />
          <Thumbnail.hdBadge />
          <Thumbnail.setBooklet />
        </Thumbnail.wrapper>
        <Metadata.wrapper>
          <Metadata.title />
          <Metadata.authors />
        </Metadata.wrapper>
      </>
    )}
  </Book>

  <Book dto={book}>
    {({ Thumbnail, Metadata }) => (
      <>
        <Thumbnail.wrapper>
          <Thumbnail.coverImage />
          <Thumbnail.circleBadge />
          <Thumbnail.hdBadge />
          <Thumbnail.setBooklet />
        </Thumbnail.wrapper>
        <Metadata.wrapper>
          <Metadata.title />
          <Metadata.authors />
        </Metadata.wrapper>
      </>
    )}
  </Book>
</>
```
