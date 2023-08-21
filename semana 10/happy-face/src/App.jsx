import { useState } from "react"
import data from './emojis.json'

function App() {

  const [inputValue, setInputValue] = useState('')
  const [emojis, setEmojis] = useState(data)

  const handleChange = (event) => {
    const input  = event.target
    const value = input.value
    // const value = event.target.value
    console.log(value);

    setInputValue(value)

    const emojisFiltered = data.filter(emoji => {
      const filterByName = emoji.unicodeName.includes(value)
      const filterByGroup = emoji.group.includes(value)
      return filterByName || filterByGroup
    })

    setEmojis(emojisFiltered)
  }

  return (
    <>
      <input 
        className="border" 
        type="text" 
        onChange={handleChange}
      />

      {emojis.map(emoji => {
        return(
          <article key={emoji.slug}>
              {emoji.group} {emoji.character} {emoji.unicodeName}
          </article>
        )
      })}
    </>
  )
}

export default App
