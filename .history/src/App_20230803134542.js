import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import MyInfo from './pages/MyInfo';
import Write from './pages/Write';
import Qna from './pages/Qna';
import Invite from './pages/Invite';
import Sidebar from './components/common/Sidebar';
import BoardFree from './pages/BoardFree';
import BoardInfo from './pages/BoardInfo';
import BoardNotice from './pages/BoardNotice';
import BoardTeam from './pages/BoardTeam';
import Loading from './pages/Loading';


function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/profile" element={<Profile/>}/>
        <Route path = "/myinfo" element = {<MyInfo/>} />
        <Route path = "/Write" element = {<Write/>} />
        <Route path = "/Qna" element={<Qna/>}/>
        <Route path = "/home" element = {< Home/>}/>
        <Route path = "/invite" element={<Invite/>}/>
        <Route path = "/sidebar" element={<Sidebar/>} />
        <Route path = '/BoardFree' element={<BoardFree/>} />
        <Route path = '/BoardInfo' element={<BoardInfo/>} />
        <Route path = '/BoardNotice' element={<BoardNotice/>} />
        <Route path = '/BoardTeam' element={<BoardTeam/>} />
        <Route path = '/Loading' element={<Loading/>} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;