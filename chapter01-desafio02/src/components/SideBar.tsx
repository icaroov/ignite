import { useEffect } from "react"

import { Button } from "../components/Button"
import { useMovie } from "../hooks/useMovie"

import "../styles/sidebar.scss"

export default function SideBar() {
  const { fetchGenres, genres, selectedGenreId, handleClickButton } = useMovie()

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
