import React from 'react';
import './App.css';
import AppRouter from './Router/router';
import { BrowserRouter, Route } from 'react-router-dom';
import PageRout from './Components/PostCard/cardPg'


export default class FooClass extends React.Component {
  render() {

    return (

      <div className="foo">

        <BrowserRouter>

          <Route path='/Card' component={PageRout}/>

          <AppRouter />

        </BrowserRouter>

      </div>



    );
  }
}



