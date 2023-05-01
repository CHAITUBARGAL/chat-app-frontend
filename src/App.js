import './App.css';
import ChatRoom from './component/ChatRoom';
import MainForm from './component/MainForm';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
    <Routes>
      <Route path='/' element={<MainForm/>}/>
      <Route path='/chat/:roomName' element={<ChatRoom/>}/>
      <Route path='*' element={<h1>404 Page not found</h1>}/>
     
    </Routes>
    </div>
  );
}

export default App;
