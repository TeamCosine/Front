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

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;