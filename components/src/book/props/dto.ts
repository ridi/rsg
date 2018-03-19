// draft 2018/2/8

export interface BookDto {
  id: string;
  title?: {
    main: string
    sub?: string | null
    prefix?: string | null,
  };
  description?: string;
  thumbnail?: {
    small: string | null
    large: string | null
    xxlarge: string | null,
  };
  categories?: [
    {
      id: number
      name: string
      genre: string
      subGenre: string
      isSeriesCategory: boolean,
    }
  ];
  series?: {
    id: string
    volume: number
    property: {
      lastVolumeId: string
      title: string
      unit: string
      freeBookCount: number
      totalBookCount: number
      isSerial: boolean
      isCompleted: boolean,
    }
    priceInfo?: {
      buy: {
        price: number
        regularPrice: number
        discountPercentage: number,
      }
      rent: {
        price: number
        regularPrice: number
        discountPercentage: number
        rentalDays: number,
      },
    },
  };
  setbook?: {
    memberBooksCount: number
    calculationPolicy: number,
  };
  priceInfo?: {
    buy: {
      price: number
      regularPrice: number
      discountPercentage: number,
    }
    rent: {
      price: number
      regularPrice: number
      discountPercentage: number
      rentalDays: number,
    }
    cashback: {
      amount: number,
    }
    flatrate: {
      id: number,
    }
    pointback: {
      pointbackAmount: number
      pointDuration: number,
    }
    paper: {
      price: number,
    },
  };
  authors?: {
    [role: string]: [
      {
        id?: number
        name: string,
      }
    ],
  };
  file?: {
    characterCount: number
    pageCount: number
    size: number
    format: string
    isDrmFree: boolean
    isComicHd: boolean,
  };
  property?: {
    isNovel: boolean
    isComic: boolean
    isWebtoon: boolean
    isManga: boolean
    isMagazine: boolean
    isAdultOnly: boolean
    isNewBook: boolean
    isOpen: boolean
    isSomedeal: boolean
    isTrial: boolean
    isRental: boolean
    previewRate: number
    reviewDisplayId: string | null
    kpcId: string,
  };
  supports?: {
    android: boolean
    ios: boolean
    mac: boolean
    paper: boolean
    windows: boolean
    webViewer: boolean,
  };
  starRate?: {
    rate: number
    participantCount: number,
  };
  publishedDate?: {
    ridibooksRegister: string
    ridibooksPublish: string
    paperBookPublish: string,
  };
  publisher?: {
    id: number
    name: string,
  };
  version?: string;
}
