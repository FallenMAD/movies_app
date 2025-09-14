export interface MovieItem {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: object | null
  budget: number
  genres: { id: number; name: string }[]
  homepage: string
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: any[]
  production_countries: { iso_3166_1: string; name: string }[]
  release_date: string
  revenue: number
  runtime: number | null
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
