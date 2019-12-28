import '../style/menu.scss'
import React,{Component} from 'react';
import menuInfo from './provider/menu-info';
import { withRouter } from 'react-router-dom';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
class Menu extends Component{
  constructor(props){
    super(props);
    this.state={
      menuTitles:[],
      closeHeight:"40px",
      openHeight:"40px",
      subHeight:"0px"
    }
    this.expandMenu = this.expandMenu.bind(this)
    this.expandSubMenu = this.expandSubMenu.bind(this)
  }
  //爲menuinfo設置一個值判斷是否點擊
  //展開菜單
  expandMenu(item){
    let path = item.path;
    if(item.path){this.props.history.push(path)}
    else{
      item.openFlag = !item.openFlag;
      menuInfo.forEach(menu=>{
        if(menu.openFlag===true && menu.id !== item.id){
          menu.openFlag = false;
        }
      })
     //1.收縮其他的窗口
      let openHeight = (item.children.length+1)*60-15+"px";
      let closeHeight = "40px";
      if(item.openFlag){
        this.setState({openHeight:openHeight});
      }else{
        this.setState({openHeight:closeHeight});
      }
    }
  }
  //展開一個新的div  子菜單
  expandSubMenu(menu1){
    console.log("in",menu1);
    menu1.smallExpandFlag=true;
    if(menu1.children){
      let subHeight = (menu1.children.length+1)*60+"px";
      this.setState({subHeight:subHeight})
    }
      
  }
  //隱藏
  outMenu(menu1){
    console.log("out",menu1);
    menu1.smallExpandFlag=false;
    let subHeight = "0px";
    this.setState({subHeight:subHeight})
  }
  componentDidMount(){
    menuInfo.forEach(menu1=>{
      menu1.openFlag = false;
    })
  }
  //更新前要將所有的openFlag關閉再做其他操作
  componentWillReceiveProps(){
    menuInfo.forEach(menu1=>{
      menu1.openFlag = false;
    })
  }
  //鼠標划過圖標事件
  render(){
    var openObj={height:this.state.openHeight}
    var closeObj={height:this.state.closeHeight}
    return(
      <div>
        <div className={"aside"} style={{width:this.props.width}}>
        {/* 菜單 */}
          {menuInfo.map(menu1=>{
            return(
                <div key={menu1.id+"div"}  >
                  {/* 如果有children則有下拉icon，點擊openFlag爲true時則顯示ExpandLess */}
                  <ul style={menu1.openFlag?openObj:closeObj} >
                    {this.props.width==="200px"?
                    <li key={menu1.id} onClick={()=>this.expandMenu(menu1)}  >
                      {menu1.name} 
                      {menu1.children?menu1.openFlag?<span style={{float:"right"}}> <ExpandLess/></span>:<span style={{float:"right"}}> <ExpandMore/></span>:null}
                    </li>:<li onMouseOver={()=>this.expandSubMenu(menu1)} onMouseOut={()=>this.outMenu(menu1)}>{menu1.id}</li>}
                    {menu1.children?(menu1.children.map(menu2=>{
                      return <li key={menu2.id} className={menu1.openFlag?'li2 menu-list':'hidden'} onClick={()=>this.expandMenu(menu2)}>{menu2.name}</li>
                    })):null}
                  </ul>
              </div>
            )
          })}
        {/* 菜單  end*/}
      </div>
      
      </div>
      
    )
  }
}
export default withRouter(Menu)