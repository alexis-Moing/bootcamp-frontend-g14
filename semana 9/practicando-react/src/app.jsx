import './app.css'
import { TwitterFollowCard } from './twitterfollowcard.jsx'

const users = [
    {
        isFollowing: true,
        userName: "lexs_95", 
        name: "Lexis Moing", 
    },
    {
        isFollowing: true,
        userName: "alexisming05", 
        name: "alexis morales",  
    },
    {
        isFollowing: false,
        userName: "usuario1", 
        name: "usuario01", 
    },
    {
        isFollowing: false,
        userName: "usuario2", 
        name: "usuario02", 
    },
]

export function App () {

    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialisFollowing={isFollowing}
                            name={name}
                        >
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}