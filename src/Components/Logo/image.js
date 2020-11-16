import React from 'react';
import hero from '../../image/hero.jpg'
import '../Logo/image.css'




class Image extends React.Component {
    render() {
        return (

            <div className="img">

                <img className="hero" src={hero} alt="hero" />

            </div>
        )
    }
}


export default Image ;