export function TwitterFollowCard ({userName, name, isFollowing}) {
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src={`https://unavatar.io/lexs95${userName}`} alt="foto de avatar de perfil" />
            <div>
                <strong className="tw-followCard-info">{name}</strong >
                <span className="tw-followCard-info2">{userName}</span>
            </div>
        </header>

        <aside>
            <button className="tw-followCard-button">
                Seguir 
            </button>
        </aside>
    </article>
    )
}