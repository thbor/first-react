import React,{Component} from 'react';
import Menu from '../Menu'
import Top from '../Top'
import Main from '../Main'
export default class Layout extends Component{
  constructor(props){
    super(props)
    this.state={
      width:"200px",
      topTitle:"Smart Tools"
    }
    this.hideMenu = this.hideMenu.bind(this)
  }
  hideMenu(width,topTitle){
    let changeWidth = width==="200px"?"60px":"200px";
    let changeTitle = topTitle==="Smart Tools"?"S":"Smart Tools";
    console.log(2,changeWidth)
    this.setState({width:changeWidth})
    this.setState({topTitle:changeTitle})
  }
  render(){
    return(
      <div>
        <Top width={this.state.width} topTitle={this.state.topTitle} hideMenu={this.hideMenu}/>
        <Menu width={this.state.width}/>
        <Main />
      </div>
    )
  }
}