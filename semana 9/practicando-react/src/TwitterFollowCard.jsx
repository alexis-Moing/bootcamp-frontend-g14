import { useState } from "react"

export function TwitterFollowCard ({userName, name, initialisFollowing}){
    
    const [isFollowing, setIsFollowing] = useState(initialisFollowing)
    
    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src={`https://unavatar.io/lexs95${userName}`} alt="foto de avatar de perfil" />
            <div>
                <strong className="tw-followCard-info">{name}</strong >
                <span className="tw-followCard-info2">@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick} >
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}