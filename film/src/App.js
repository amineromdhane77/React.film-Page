
import { useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Nav from './components/Navbar/Nav';
import Hero from './components/Hero/Hero';
function App() {
  const [photo,setPhoto]=useState(0)
  const [play,setPlay]=useState(false)
  return (
    <div >
    <Background photo={photo} play={play}  />
    <Nav />
    <Hero photo={photo} play={play} setPhoto={setPhoto} setPlay={setPlay}  />
    </div>
  );
}

export default App;
