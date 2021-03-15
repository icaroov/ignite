import { useEffect, useState } from "react"

import { Button } from "../components/Button"
import { api } from "../services/api"

import "../styles/sidebar.scss"

export interface GenreResponseProps {
  id: number
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
  title: string
}

interface SideBarProps {
  handleClickButton: (id: number) => void
  selectedGenreId: number
}

export default function SideBar({
  handleClickButton,
  selectedGenreId,
}: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  function fetchGenres() {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data)
    })
  }

  useEffect(() => {
    fetchGenres()
  }, [])

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
