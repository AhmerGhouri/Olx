import React from 'react';
import Header from '../../Components/Header/Header'
import Home from '../../Components/Navbar/Navbar'
import './page.css'
import CallIcon from '@material-ui/icons/Call';
import Top from '../../Components/lower/footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux'



const photos = [
    {
        name: "Photo 1",
        url: "data:image/jpeg;base64,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",

    },
    {
        name: "Photo 2",
        url: "data:image/jpeg;base64,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",

    },
    {
        name: "Photo 3",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvYKObbW-SlnjtPBXGJwjl2y1en5xqaNZiZQ&usqp=CAU",


    }
]



const settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slidies",
}


class PageRout extends  React.Component {
    
    render() {
        
        console.log("Props ==>" ,this.props)

        return (
            

            <div className="page">
                <div>
                    <Header />
                </div>
                <div>

                    <Home />

                </div>
                <div className="pageAll">
                    <div class="vehicles">
                        <p className="Cantt">Home</p> /
                        <p className="Cantt">Vehicles</p>/
                        <p className="Cantt">Cars</p>/
                        <p className="Cantt">Cars in punjab</p>/
                        <p className="Cantt">Cars in Lahore</p> /
                        <p className="Cantt">Cars in Cantt</p>/
                        <p className="Cantt">Toyota in Cantt</p>/
                        <p className="Cantt">Camry in Cantt</p>
                    </div>


                    <div className="carsoulOpen">

                        <div className="car123">

                            <div className="box">


                                <div className="pictures" >
                                    <Slider {...settings}>

                                        {photos.map((photo) => {
                                            return (

                                                <div className="">

                                                    <div className="">
                                                        <img className="ImgAddress" src={photo.url} />
                                                    </div>

                                                </div>
                                            )
                                        })}

                                    </Slider>

                                </div>

                            </div>

                        </div>

                        <div className="br123">

                            <div className="chat">

                                <h1>Rs 5,200,000</h1>

                                <p className="kms">2011 - 75,000 km</p>

                                <p className="camry">TOYOTA CAMRY 2011</p>

                                <div className="locda">

                                    <p className="location">Cantt,Lahore,Punjab</p>
                                    <p className="date">Oct 22</p>

                                </div>

                            </div>
                            <div className="description">

                                <h3>Seller description</h3>

                                <div className="sellers">
                                    <img src={"https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp"} width="80px" alt="pix" />

                                    <p className="carNax">
                                        {this.props.Post_Ad.username}
                                        <p className="member">Member Since 2015</p>
                                    </p>

                                </div>

                                <div className="SellerBtn">
                                    <button className="CHS">Chat with seller</button>
                                </div>

                                <div >
                                    <div className="caller">

                                        <CallIcon className="callicon" />

                                        <p className="star">** *** ****</p>

                                        <p className="Num"><u>Show number</u></p>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="detail">

                        <div className="AllDetails">
                            <div>

                                <h5>Details</h5>

                            </div>

                            <div>
                                <table>

                                    <tr>
                                        <td className="make">Item Name</td>
                                        <td className="model"></td>
                                        <td className="make">Make</td>
                                        <td className="model"></td>
                                    </tr>
                                    <tr>
                                        <td className="make">Model</td>
                                        <td className="model"></td>
                                        <td className="make">Condition</td>
                                        <td className="model"></td>
                                    </tr>
                                    <tr>
                                        <td className="make">Year</td>
                                        <td className="model"></td>
                                        <td className="make"></td>
                                        <td className="model"></td>
                                    </tr>

                                </table>
                            </div>
                            <hr />
                            <div>
                                <h5>Description</h5>
                            </div>

                        </div>


                    </div>

                </div>

                <div>
                    <Top />
                </div>

            </div>

        )
    }

}

const mapStateToProps = (state) => ({
    Post_Ad: state.Post_Ad
})

// const mapDispatchToProp = (dispatch) => ({

//     postAd: () => dispatch(postAd())

// })


export default connect(mapStateToProps, null)(PageRout);