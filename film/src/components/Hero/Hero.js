import React from 'react'
import './Hero.css'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'
const Hero = ({photo,setPhoto,play,setPlay}) => {
  return (
    <div className='hero'>
      <div className='hero-title'>
      <h1>Synopsis</h1>
      </div>
      <div className='hero-text'>
      <p>Quelque part dans le royaume de France en 1186,<br></br> Balian, jeune forgeron accablé par l'existence, apprend qu'il est le fils de Godefroy d'Ibelin.<br></br> Mais cette noble lignée le contraint de se rendre en Terre sainte pour défendre Jérusalem reconquise.<br></br> Une fois en Palestine, il s'initie à l'art de la guerre et aux intrigues politiques,<br></br> grâce à l'aide de Tiberias, le puissant conseiller militaire du roi.</p>
      </div>
      <div className='hero-dot-play'>
      <ul className='hero-dots'>
      <li onClick={()=>setPhoto(0)} className={photo===0?'hero-dot orange' : 'hero-dot'}></li>  
      <li onClick={()=>setPhoto(1)} className={photo===1?'hero-dot orange' : 'hero-dot'}></li>
      <li onClick={()=>setPhoto(2)} className={photo===2?'hero-dot orange' : 'hero-dot'}></li>
      </ul>
      <div className='hero-play'>
      <img onClick={()=>setPlay(!play)}  src={play?pause_icon:play_icon} alt='' />
      <h2>Trailer video</h2>
      </div>
      </div>
    </div>
    
  )
}

export default Hero
