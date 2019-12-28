import React,{Component} from 'react';
export default class Test2 extends Component{
  render(){
    return(
      <div>
        <Test21/>
      </div>
    )
  }
}
//樣式
class Test21 extends Component{
  
  render(){
    var hStyle={
      backgroundColor:"green",
      color:"red"
    }
    return(
      //1.{}語法 2.裏{}對象
        <div style={{backgroundColor:"yellow",borderWidth:5,borderColor:"black",borderStyle:"solid"}}>內聯樣式：設置背景顏色，邊框大小，邊框顏色
          <h1 style={hStyle}>對象樣式：設置背景顏色，字體顏色</h1>
          <p></p>選擇器樣式：設置字體大小
        </div>
    )
  }
}
