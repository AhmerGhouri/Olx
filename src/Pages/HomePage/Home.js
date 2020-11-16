import React from 'react';
import Header from '../../Components/Header/Header'
import Home from '../../Components/Navbar/Navbar'
import Image from '../../Components/Logo/image'
import Card from '../DetailCardPage/card'
import Top from '../../Components/lower/footer'
import ScrollToTop from '../../Components/lower/Scroll'
import FooterAd from '../../Components/FooterAd/FooterAd';
import LoadBtn from '../../Components/load/button';
import { connect } from 'react-redux';



class FrontPage extends React.Component {

        render() {

            const { Post_Ads } = this.props

            return (


                <div className="foo">

                    <div>

                        <Header />

                    </div >

                    <div>

                        <Home />

                    </div>

                    <div>

                        <Image />

                    </div>

                    <div>

                        <Card  Post_Ads={Post_Ads}/>

                    </div>

                    <div>

                        <LoadBtn />

                    </div>


                    <div>

                        <FooterAd />

                    </div>


                    <div>

                        <Top />

                    </div>

                    <div>

                        <ScrollToTop />

                    </div>





                </div>



            )
        }
    }



const mapStateToProps = (state) => ({

    current_user: state.current_user,
    Post_Ad: state.Post_Ad,

})


export default connect(mapStateToProps, null)(FrontPage);