import { useState } from "react"
import { useEffect } from "react"
import CharactersList from "./components/characters/charactersList"
import Header from "./components/characters/Header"


function App() {
  const [characters, setCharacters] = useState([])
  const charactersToShow = 20;

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://hp-api.onrender.com/api/characters')

      const data = await response.json()

      const limitedCharacters = data.slice(0, charactersToShow)

      setCharacters(limitedCharacters)
    }

    fetchCharacters()
  }, [charactersToShow])

  return (
    <>
      <Header title="Wizarding World Catalog"/>
      {/* <pre>
       {JSON.stringify(personajes, null, 2)}
      </pre> */}
      <main className="p-3 flex flex-col gap-3">
        <CharactersList characters={characters}/>
      </main>
    </>
  )
}

export default App
