import { useEffect } from "react"

import { MovieCard } from "./MovieCard"
import { useMovie } from "../hooks/useMovie"

import "../styles/content.scss"

export default function Content() {
  const {
    fetchGenresById,
    fetchSelectedGenreById,
    movies,
    selectedGenre,
    selectedGenreId,
  } = useMovie()

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
