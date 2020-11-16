import React from 'react';
import './card.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { postAd } from '../../Redux store/Post/action';




class Card extends React.Component {


    render() {
        let user = this.props.current_user;



        console.log(this.props)

        return (

            <div className="sub">

                <div>

                    <ul>

                        <div className="rout">


                            <div className="card">

                                <div className="pic">

                                    <p className="fea">FEATURED</p>

                                    <img src={user.photo} alt="pix" />

                                </div>
                                <div className="price">


                                    <h5>RS 20,000</h5>


                                    {user.name}

                                </div>

                            </div>

                        </div>

                    </ul>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({

    current_user: state.current_user,
    Post_Ad: state.Post_Ad,

})

const mapDispatchToProp = (dispatch) => ({

    postAd: () => dispatch(postAd())
})

export default connect(mapStateToProps, mapDispatchToProp)(Card);