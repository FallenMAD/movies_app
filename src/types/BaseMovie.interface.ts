export interface BaseMovie {
  id: number
  title: string
  original_title: string
  original_language: string
  overview: string
  release_date: string
  popularity: number
  vote_average: number
  vote_count: number
  adult: boolean
  video: boolean
  backdrop_path: string | null
  poster_path: string | null
}
