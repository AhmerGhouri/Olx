import React, { StrictMode } from 'react';
import logo from '../../image/logo.png';
import '../Header/header.css'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Google_Login, Facebook_Login } from '../../Redux store/Login_action/action';
import PopUp from '../Popup/popup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';



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






class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      show: false
    }

  }

  handleModal() {
    this.setState({ show: !this.state.show })
  }


  get_user() {
    let user = this.state.current_user
    console.log(user)
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


      <div className="first fixed-top" >

        <div className="One_head">


          <div>
            <img src={logo} className="logo" alt="logo" />

          </div>


          <div className="seacrhBar">
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
            <input type="text" className="input" placeholder="Search" value="Pakistan" />
            <ExpandMoreIcon style={{ fontSize: 50 }} />

          </div>


          <div className="longSearch">

            <input type="text" placeholder="Find Cars, Mobile Phone and more..." className="long" />


            <IconButton className="btn">
              <SearchIcon className="searchBTn" style={{ fontSize: 35 }} />
            </IconButton>


          </div>



          <div className="SearchBtn">
            <div>

              <PopUp />

            </div>

            {this.props.current_user == '' ?

              <div>
                <button className="sell" onClick={() => { this.handleModal() }}><AddIcon style={{ fontSize: 20 }} />  SELL</button>



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
                        <button className="Continue" onClick={() => { this.props.Google_Login() }}><i class="fa fa-google" aria-hidden="true"></i> Continue with google</button>
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

              </div> :


              <div>

                <Link to='/postCard'>

                  <button className="sell" ><AddIcon style={{ fontSize: 20 }} />  SELL</button>
                </Link>

              </div>







            }





          </div>

        </div>

      </div >




    );
  }
}




const mapStateToProps = (state) => ({

  current_user: state.current_user,

})

const mapDispatchToProp = (dispatch) => ({

  Google_Login: (history) => dispatch(Google_Login(history)),

  Facebook_Login: (history) => dispatch(Facebook_Login(history)),

})

export default connect(mapStateToProps, mapDispatchToProp)(Header);



