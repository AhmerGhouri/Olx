import React from 'react';
import '../FooterAd/footerAd.css';
import phone from '../../image/phone.webp';
import appstore from '../../image/appstore.webp'
import playstore from '../../image/playstore.webp'


export default class FooterAd extends React.Component {
    render() {
        return (



            <div>


                <div className="FooterAd">
                    <div>
                        <img src={phone} alt="pic" className="Adimage" />
                    </div>
                    <div className="ad">
                        <h1>TRY THE OLX APP</h1>

                        <h4>Buy, sell and find just about anything using the app on your mobile.</h4>
                    </div>
                    <div className="playstore">

                        <p><b>GET YOUR APP TODAY</b></p>

                        <a className="appstore" href="https://apps.apple.com/app/olx-pakistan/id1119081665" target="_blank"><img src={appstore} /></a>
                        <a className="storeicon" href="https://play.google.com/store/apps/details?id=com.olx.pk" target="_blank"><img src={playstore} /></a>

                    </div>

                    <div>
                        <p></p>

                    </div>
                </div>
            </div>
        )
    }
}