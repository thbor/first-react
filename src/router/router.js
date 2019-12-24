import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import route from './route'
export default class router extends Component{
  render(){
    return(
        <Router>
          <Switch>
            {route.map((ele,i)=>{
              return <Route path={ele.path} component={ele.component} key={i}/>
            })}
          </Switch>
        </Router>
    )
  }
}