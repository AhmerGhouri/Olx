import React, { StrictMode } from 'react';
import '../Header/header.css';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Google_Signin } from '../../Redux store/Sell_action/index';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';




const photos = [
    {
        name: "Photo 1",
        url: "https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp",

    },
    {
        name: "Photo 2",
        url: "https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp",

    },
    {
        name: "Photo 3",
        url: "https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp",


    }
]



class PopUp extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false
        }


        this.state = {

            show: false

        }

    }

    componentDidMount() {
        // user : this.props.current_user
    }

    handleUser() {
        this.setState({ show: !this.state.show })
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }


    render() {

        const settings = {
            dots: true,
            infinte: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides",
        }

        let user = this.props.current_user;


        return (



            <div>

                {(this.props.current_user == '') ?



                    <div>
                        <Button className="log" onClick={() => { this.handleModal() }}>Login</Button>
                    </div> :
                    <div className="SearchBtn">

                        <NotificationsNoneOutlinedIcon className="notification" style={{ fontSize: 25 }} />

                        <ChatBubbleOutlineTwoToneIcon className="notification" style={{ fontSize: 25 }} />

                        <img src={user.photo} className="picture" alt="profile picture" />

                    </div>
                }



                <Modal className="body" show={this.state.show} onHide={() => { this.handleModal() }} >
                    <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
                    <Modal.Body className="modals">
                        <div className="slides" style={{ padding: 24 }}>
                            <Slider {...settings}>

                                {photos.map((photo) => {
                                    return (

                                        <div className="Pop">

                                            <div className="slider">
                                                <img width="100px" className="web" src={photo.url} />
                                            </div>

                                        </div>
                                    )
                                })}

                            </Slider>

                        </div>

                        <div className="with">



                            <div>
                                <button className="Continue">Continue with phone</button>
                                <button className="Continue" ><i class="fa fa-facebook fa2" aria-hidden="true"></i> Continue with facebook</button>
                                <button className="Continue" onClick={() => { this.props.Google_Signin() }}><i class="fa fa-google" aria-hidden="true"></i> Continue with google</button>
                                <button className="Continue">Continue with email</button>

                            </div>

                            <div className="popEnd">
                                <p>We won't share your personal details with anyone</p>

                            </div>
                            <p className="if">
                                If you continue,you are accepting

                    <a className="blue">OLX Terms and Conditions and Privacy Policy</a>
                            </p>


                        </div>
                    </Modal.Body>

                </Modal>
            </div>

        )
    }

}

const mapStateToProps = (state) => ({

    current_user: state.current_user,

})

const mapDispatchToProp = (dispatch) => ({

    Google_Signin: () => dispatch(Google_Signin())


})

export default connect(mapStateToProps, mapDispatchToProp)(PopUp);