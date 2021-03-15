import { render } from "react-dom"
import { MovieContextProvider } from "./hooks/useMovie"
import { App } from "./App"

render(
  <>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </>,
  document.getElementById("root")
)
