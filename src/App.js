import { ChatEngine } from "react-chat-engine";
import './App.css'
import ChatFeed from './components/ChatFeed'

const App = () => {
    return (
        <ChatEngine
           height="100vh"
           projectID="cfe67e91-064d-4df9-8f2c-71bd500a4cb7"
           userName="muratbekov3"
           userSecret="12345"
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
    )
}

export default App  