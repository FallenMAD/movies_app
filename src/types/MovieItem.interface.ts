import type { BaseMovie } from './BaseMovie.interface'

export interface MovieItem extends BaseMovie {
  belongs_to_collection: object | null
  budget: number
  genres: { id: number; name: string }[]
  homepage: string
  imdb_id: string | null
  production_companies: any[]
  production_countries: { iso_3166_1: string; name: string }[]
  revenue: number
  runtime: number | null
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[]
  status: string
  tagline: string
}
