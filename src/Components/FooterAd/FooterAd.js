import React from 'react';
import '../FooterAd/footerAd.css'
import phone from '../../image/phone.webp'


export default class FooterAd extends React.Component {
    render() {
        return (

            <div className="FooterAd">
                <div>
                    <img src={phone} alt="pic" className="Adimage" />
                </div>
                <div>
                    <h3><b>TRY THE OLX APP</b></h3>

                    <p>Buy, sell and find just about anything using the app on your mobile.</p>
                </div>
                <div>
                    <p></p>

                </div>
            </div>
        )
    }
}