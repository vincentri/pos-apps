export type BookParams = {
  title: string
  slug: string
  cover: string
}

export type RootParamsList = {
  BookApp: undefined
  About: undefined
  ContactUs: undefined
  SearchResult: {
    genre?: string
    keyword?: string
    status?: string
    sortBy?: string
  }
  BookDetails: {
    book: BookParams
  }
  ListBooks: {
    book: BookParams
  }
  ListChapters: {
    book: BookParams
  }
  ReadBook: {
    book: BookParams
    page: number
  }
}

export type HistoryData = { [slug: string]: { page: number; lastReadTime: number; pageTitle: string } }

export type BookmarkData = (BookParams & { bookmarkedDate: number })[]
