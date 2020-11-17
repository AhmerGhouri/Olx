import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import FrontPage from '../Pages/HomePage/Home';
import PostToAdd from '../Pages/PostPage/postCard';
import PageRout from '../Pages/DetailCardPage/cardPg'

class AppRouter extends React.Component {
    render() {
        return (
            <Router >
                <Route exact path='/' component={FrontPage} />
                <Route path='/postCard' component={PostToAdd} />
                <Route path='/cardPg/:id' component={PageRout}/>

            </Router>
        )
    }
}


export default AppRouter;