import { useState, createContext, useContext } from "react"

import { api } from "../services/api"

interface MovieContextData {
  fetchGenres: () => void
  fetchGenresById: (selectedGenreId: number) => void
  fetchSelectedGenreById: (selectedGenreId: number) => void
  movies: MovieProps[]
  genres: GenreResponseProps[]
  selectedGenre: GenreResponseProps
  selectedGenreId: number
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>
  handleClickButton(id: number): void
}

interface MovieContextProps {
  children: React.ReactNode
}

export interface GenreResponseProps {
  id: number
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
  title: string
}

interface MovieProps {
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}

export const MovieContext = createContext<MovieContextData>(
  {} as MovieContextData
)

export const MovieContextProvider = ({ children }: MovieContextProps) => {
  const [genres, setGenres] = useState<GenreResponseProps[]>([])
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [selectedGenreId, setSelectedGenreId] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  )

  function fetchGenres() {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data)
    })
  }

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

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <MovieContext.Provider
      value={{
        fetchGenres,
        fetchGenresById,
        fetchSelectedGenreById,
        movies,
        genres,
        selectedGenre,
        selectedGenreId,
        setSelectedGenreId,
        handleClickButton,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export function useMovie() {
  const context = useContext(MovieContext)

  if (!context) {
    throw new Error("useMovie must be used within a MovieContextProvider")
  }

  return context
}
