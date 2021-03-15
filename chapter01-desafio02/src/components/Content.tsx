import { useEffect, useState } from "react"

import { api } from "../services/api"
import { MovieCard } from "./MovieCard"
import { GenreResponseProps } from './SideBar'

import "../styles/content.scss"

interface MovieProps {
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}

interface ContentProps {
  selectedGenreId: number
}

export default function Content({ selectedGenreId }: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  )

  function fetchGenresById(selectedGenreId: number) {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data)
      })
  }

  function fetchSelectedGenreById(selectedGenreId: number) {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data)
      })
  }

  useEffect(() => {
    fetchGenresById(selectedGenreId)
    fetchSelectedGenreById(selectedGenreId)
  }, [selectedGenreId])

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
