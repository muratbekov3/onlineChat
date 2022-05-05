import { ChatEngine } from "react-chat-engine";
import './App.css'
import ChatFeed from './components/ChatFeed'
import Login from './components/Login'

const App = () => {
    if(!localStorage.getItem('username')){
        return <Login/>
    }
    return (
        <ChatEngine
           height="100vh"
           projectID="cfe67e91-064d-4df9-8f2c-71bd500a4cb7"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
    )
}

export default App  