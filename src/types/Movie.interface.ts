import type { BaseMovie } from './BaseMovie.interface'

export interface Movie extends BaseMovie {
  genre_ids: number[]
}
