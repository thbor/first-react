import React,{ Component } from "react";
import Dehaze from '@material-ui/icons/Dehaze';
import '../style/Top.scss'

export default class Top extends Component{
  constructor(props){
    super(props);
    this.state={
      height:"60px",
      changeWidth:"60px",
      
    }
  }
  render(){
    return(
      <div className={'top-div'}> 
        <div style={ {display: 'inline-block',width:this.props.width}} className={'top-first'}>{this.props.topTitle}</div>
        <div style={ {display: 'inline-block'}} className={'top-sencond'} onClick={()=>this.props.hideMenu(this.props.width,this.props.topTitle)}><Dehaze style={{color:'white'}}/></div>
      </div>
    )
  }
}