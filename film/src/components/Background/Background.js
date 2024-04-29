import React from 'react'
import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image6 from '../../assets/image6.jpg'
import image8 from '../../assets/image8.jpg'
const Background = ({play,photo}) => {
  
    if(play){
        return(
            <video className='background fade-in' autoPlay muted loop>
            <source src={video1} type='video/mp4' ></source>
            </video>
        )
    }
    else if(photo===0){
return <img src={image1} className='background fade-in' alt='' />
    }
    else if(photo===1){
        return <img src={image6} className='background fade-in' alt='' />
            }
            else if(photo===2){
                return <img src={image8} className='background fade-in' alt='' />
                    }
 }

export default Background
