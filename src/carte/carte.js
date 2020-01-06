import React from 'react'
import './carte.css'

export default function Carte(props) {
  return (
    
      <div className="carte-crédit">
            <div className="carte">
                
            <div className="titre">
                <h1>Company Name</h1>
           </div>
            <div className="nombre">
            <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fs4i6r5r7.stackpathcdn.com%2Fwp%2Fwp-content%2Fthemes%2Fsimoptions%2Fassets%2Fimg%2Fsim-card-bg-min.png"/> 

            {props.userNumber}
            </div>
            <div className="date">
            {props.userDate}
            <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F28%2F99%2F08%2F289908a6bb2d5f2ab846f0606e72e0fe.png"/>

            </div>
            <div className="nom">
            {props.userName}  
            </div>
            </div>

            
    </div>
  )
}
