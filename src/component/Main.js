import React,{ Component } from "react";
import RouterWithSubRoutes from "../router/RouterWithSubRoutes"
import { Switch,Route } from "react-router-dom";
export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
     
    }
  }
  render(){
    console.log(1,this.props)
    return(
      <div>
        {/* <Switch>
          {this.props.routes.map((route,i)=>(
            <Route path={route.path} exact={route.exact}  render={props=><route.component {...props} routes={route.routes}/>} key={i}/>
          ))}
        </Switch> */}
        <Switch>
          
        </Switch>
      </div>
    )
  }
}
