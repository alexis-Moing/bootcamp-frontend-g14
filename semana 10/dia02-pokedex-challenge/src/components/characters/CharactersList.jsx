
const CharactersList = ({characters}) => {
  return (
    <>
        {
            characters?.map(character => {
                return (

                    <article className="border" key={character.id}>
                        <h3>{character.name}</h3>
                        <img 
                        src={character.image} 
                        alt={character.name} 
                        className="w-40"/>
                    </article> 
                )
            })
        }
    </>
  )
}

export default CharactersList