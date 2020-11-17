import React, { Component } from 'react';
import '../lower/footer.css';
import appstore from '../../image/appstore.webp';
import playstore from '../../image/playstore.webp';


export default class Top extends Component {
    render() {
        return (

            <div className="b123r">

                <div className="tainer">


                    <div className="popular">

                        <div className="flower">

                            <section className="pop">

                                <p className="para">POUPLAR CATEGORIES</p>

                                <ul>
                                    <li><a>Cars</a></li>
                                    <li><a>Falt for Rent</a></li>
                                    <li><a>Jobs</a></li>
                                    <li><a>Mobile Phone</a></li>
                                </ul>

                            </section>


                            <section className="pop">

                                <p className="para">TRENDING SEARCHES</p>

                                <ul>
                                    <li><a>Bikes</a></li>
                                    <li><a>Watches</a></li>
                                    <li><a>Books</a></li>
                                    <li><a>Dogs</a></li>
                                </ul>

                            </section>


                            <section className="pop">

                                <p className="para">ABOUT OLX</p>

                                <ul>
                                    <li><a>About OLX Group</a></li>
                                    <li><a>OLX Blogs</a></li>
                                    <li><a>Contact Us</a></li>
                                    <li><a>OLX for Businesses</a></li>
                                </ul>

                            </section>


                            <section className="pop">

                                <p className="para">OLX</p>

                                <ul>
                                    <li><a>Help</a></li>
                                    <li><a>Sitemap</a></li>
                                    <li><a>Legal & Privacy information</a></li>
                                </ul>

                            </section>

                            <div className="HR123">

                                <span className="follow">Follow Us</span>

                                <div className="font">

                                    <a href="https://www.facebook.com/olxpakistan" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="https://twitter.com/OLX_Pakistan" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1" target="_blank"><i class="fa fa-play" aria-hidden="true"></i></a>
                                    <a href="https://www.instagram.com/olx.pakistan/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>

                                </div>


                                <div className="play">

                                    <a href="https://apps.apple.com/app/olx-pakistan/id1119081665" target="_blank"><img src={appstore} /></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.olx.pk" target="_blank"><img src={playstore} className="store" /></a>

                                </div>


                            </div>

                        </div>

                    </div>


                    <div className="other">

                        <div className="count">

                            <div className="f">
                                <p>Other Countries</p>
                            </div>
                            <div className="countries">

                                <a>India</a> - <a>South Africa</a> - <a>Indonesia</a>
                            </div>
                        </div>


                        <div className="free">
                            <a>Free Classified in Pakistan .</a>

                            <i class="fa fa-copyright" aria-hidden="true"></i>

                            <a> 2006-2020 OLX</a>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}
