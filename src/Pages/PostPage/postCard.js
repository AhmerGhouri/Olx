import React from 'react';
import './ad.css';
import logo from '../../image/logo.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import firebase from '../../Firebase configuration/fbConfig'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


class PostToAdd extends React.Component {


    constructor() {
        super()
        this.state = {


            title: '',
            category: '',
            make: '',
            model: '',
            year: '',
            price: '',
            description: '',
            condition: '',
            Photo: '',


        }

    }




    Post = () => {
        const obj = [{ title: this.state.title, make: this.state.make, category: this.state.category, year: this.state.year, description: this.state.description, condition: this.state.condition, price: this.state.price, photo: this.state.photo }]
        firebase.database().ref('/').child('Postad').push(obj);

    }


    render() {
        const obj = [{ title: this.state.title, make: this.state.make, category: this.state.category, year: this.state.year, description: this.state.description, condition: this.state.condition, price: this.state.price, photo: this.state.photo }]
        console.log("object", obj)
     

        const user = this.props.current_user
        console.log(user)
        return (

            <div>

                <div className="key">

                    <div className="post fixed-top">

                        <Link to='/'>

                            <ArrowBackIcon style={{ fontSize: 25, color: "#002f34", cursor: "pointer" }} />

                        </Link>


                        <img className="OLXlogo" src={logo} alt="profile" />

                    </div>
                </div>


                <div>
                    <div className="ads">
                        <div>

                            <p>Welcome {user.name}</p>

                        </div>
                        <div>

                            <p>POST YOUR ADS</p>

                        </div>

                    </div>

                    <div className="poster">

                        <div className="your">

                            <div className="tables">

                                <div className="DEA">

                                    <div>
                                        <p className="DES">
                                            DETAILS
                                            <hr />
                                        </p>
                                    </div>

                                    <div className="item">

                                        <p>ITEM NAME</p>

                                        <TextField onChange={(e) => this.setState({ title: e.target.value })} className="field" id="outlined-basic" variant="outlined" />

                                    </div>

                                    <div className="item">
                                        <p>CATEGORY</p>
                                        <FormControl className="FromCon" >
                                            <Select>
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Cars</MenuItem>
                                                <MenuItem value={20}>Mobile Phones</MenuItem>
                                                <MenuItem value={30}>Bikes</MenuItem>
                                                <MenuItem value={40}>Houses</MenuItem>
                                                <MenuItem value={50}>Watches</MenuItem>
                                                <MenuItem value={60}></MenuItem>
                                                <MenuItem value={70}></MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div className="item">

                                        <p>PRICE</p>

                                        <TextField onChange={(e) => this.setState({ price: e.target.value })} className="Price" id="outlined-basic" variant="outlined" />

                                    </div>
                                    <div className="item">

                                        <p>PHOTO</p>

                                        <TextField onChange={(e) => this.setState({ photo: e.target.value })} className="Price" id="outlined-basic" variant="outlined" />

                                    </div>
                                    <div className="item">

                                        <p>MODEL</p>

                                        <TextField onChange={(e) => this.setState({ model: e.target.value })} className="model" id="outlined-basic" variant="outlined" />

                                    </div>
                                    <div className="item">

                                        <p>YEAR</p>

                                        <TextField onChange={(e) => this.setState({ year: e.target.value })} className="year" id="outlined-basic" variant="outlined" />

                                        <p className="Con23">CONDITION</p>

                                        <TextField onChange={(e) => this.setState({ condition: e.target.value })} className="condition" id="outlined-basic" variant="outlined" />
                                    </div>

                                    <div className="item">

                                        <p>DESCRIPTION</p>

                                        <TextField onChange={(e) => this.setState({ description: e.target.value })} className="Crip" id="outlined-basic" variant="outlined" />

                                    </div>

                                    <Link to='/'>

                                        <button className="Adspost" onClick={() => this.Post()}>POST</button>

                                    </Link>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>

        )
    }
}


const mapStateToProps = (state) => ({

    current_user: state.current_user,

})


export default connect(mapStateToProps, null)(PostToAdd);