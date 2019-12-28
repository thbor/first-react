import React, { Component } from 'react';
import Router from "./router/RouterWithSubRoutes";
// import Layout from "./component/layout/Layout"
import './App.css';

class App extends Component{
  render(){
    return(
      // <Layout/>
      <Router/>
    )
  }
}
// function App (){
//     return(
//       <div><Router/></div>
      
//       )
// }

export default App;
