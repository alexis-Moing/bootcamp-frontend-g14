export function TwitterFollowCard ({ formatUserName,userName, name, isFollowing}) {
    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src={`https://unavatar.io/lexs95${userName}`} alt="foto de avatar de perfil" />
            <div>
                <strong className="tw-followCard-info">{name}</strong >
                <span className="tw-followCard-info2">{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName}>
                {text} 
            </button>
        </aside>
    </article>
    )
}