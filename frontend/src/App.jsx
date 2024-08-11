
import {BrowserRouter as Router,Routes,Route,Navigate, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Chats from './pages/Chats';
import ChatProvider from './Context/ChatProvider';
import "./App.css";

function App() {
  

  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh' }}>
    <BrowserRouter>
    <ChatProvider>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/chats' element={<Chats></Chats>}></Route>
      </Routes>
      </ChatProvider>
    </BrowserRouter>
     </div>
  )
}

export default App
