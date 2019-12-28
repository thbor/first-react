import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import route from './route'
export default class RouterWithSubRoutes extends React.Component{
  render(){
    return(
        <Router>
          <Switch>
            {route.map((ele,i)=>{
              console.log(1,ele)
              return <Route path={ele.path} exact render={props=> <ele.component {...props} routes={ele.routes} />} routes={route.routes} component={ele.component} key={i}/>
            })}
          </Switch>
        </Router>
    )
  }
}