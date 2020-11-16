import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../Navbar/navbar.css'






class Home extends React.Component {
    render() {
        return (

            <div className="Drop">

                <div className="categories">

                 

                    <p className="all">


                        ALL CATEGORIES

                    </p>
                    <ExpandMoreIcon style={{ fontSizeAdjust: 30 }, { fontSize: 35 }}  />

                   

                    <div className="links">
                        <p className="nav" >Mobile Phone</p>
                        <p className="nav">Cars</p>
                        <p className="nav">Motorcyle</p>
                        <p className="nav"> Houses</p>
                        <p className="nav">TV- Video -Audio</p>
                        <p className="nav">Lands & Plots</p>
                    </div>

                </div>



            </div>



        )
    }
}


export default Home;