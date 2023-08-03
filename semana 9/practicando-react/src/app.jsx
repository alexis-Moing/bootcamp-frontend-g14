import './app.css'
import { TwitterFollowCard } from './twitterfollowcard.jsx'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="lexs_95" name="Lexis Moing"/>
            <TwitterFollowCard isFollowing userName="alexisming05" name="Alexis morales"/>
            <TwitterFollowCard isFollowing userName="Elon Musk" name="Elon Musk"/>
            <TwitterFollowCard isFollowing userName="Charlie Puth" name="Charlie Puth"/>
        </section>
    )
}