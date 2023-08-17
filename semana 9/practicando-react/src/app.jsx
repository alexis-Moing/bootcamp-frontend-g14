import './app.css'
import { TwitterFollowCard } from './twitterfollowcard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="lexs_95" 
            name="Lexis Moing"/>

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="alexisming05" 
            name="Alexis morales"/>
        </section>
    )
}