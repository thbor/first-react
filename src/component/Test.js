import React,{Component} from "react";
import PropTypes from 'prop-types';
import $ from 'jquery'
import axios from 'axios'
export default class Test extends Component{
  render(){
    var names=['a','b','c'];
    var data = 123;
    return(
      <div>
       <h1>Test</h1>
       <div>
         {names.map((name,index)=>{
         return <div key={index}>Hello,{name}</div>
         })}
       </div>
       <Test2/>
       <Test3 message="test3的信息"/>
       <Test4>
         <span>child1</span>
         <span>child2</span>
       </Test4>
       <Test5 title={data}/>
       <Test6/>
       <Test7/>
       <Test8/>
       <Test9 name="Bobo"/>
       <Test10/>
       <Test11/>
       <Test12/>
       <Test13/>
      </div>
    )
  }
}
//將子組件所有元素寫好了，放在父組件中
class Test2 extends Component{
  render(){
    var arr=[
      <div key="0"> 
        <h3 key="1">Test2</h3>
        <h3 key="2">Test2</h3>
      </div>
    ];
    console.log("test",arr)
    return(
      <div>
        {arr}
      </div>
    )
  }
}
//在父組件中將值傳遞給子組件
class Test3 extends Component{
  render(){
    return <h1>{this.props.message}</h1>
  }
}

//React.Children遍歷子節點
class Test4 extends Component{
  render(){
    return(
      <div>
        {React.Children.map(this.props.children,function(child,index){
        return <li key={index}>{child}</li>
        })}
      </div>
    )
  }
}

//propTypes,注意：PropType.string這裡的P是大寫，static propTypes這裡的p是小寫   檢查類型
class Test5 extends Component{
  static propTypes={
    title:PropTypes.string.isRequired,
  }
  render(){
  return <h1>{this.props.title}</h1>
  }
}
//點擊聚焦，點擊事件
class Test6 extends Component{
  constructor(props){
    super(props);   //構造函數繼承
    this.myTextInput = React.createRef();   //新建一個ref
    this.handelClick = this.handelClick.bind(this);   //綁定點擊事件
  }
  handelClick(){
    this.myTextInput.current.focus();
  }
  render(){
    return(
      <div>
      <input type="text" ref={this.myTextInput}></input>
      <input onClick={this.handelClick} value="點擊聚焦" type="button"></input>
    </div>
    )
  }
}
//點擊改變state的狀態，更具改變的狀態渲染頁面
class Test7 extends Component{
  constructor(props){
    super(props);
    this.state = {
      liked:false
    }
    this.changeInfo = this.changeInfo.bind(this); //記得要綁定事件，否則會報錯
  }
  changeInfo(){
    this.setState({liked:!this.state.liked});   //取反
  }
  render(){
    var ifLike = this.state.liked?'like':'don\'t like'
    return(
      <div>
        <p onClick={this.changeInfo}>
          You {ifLike} this,click to toggle
        </p>
      </div>
    )
  }
}
//input的onchange時間改變，綁定的數據隨之改變
class Test8 extends Component{
  constructor(props){
    super(props);
    this.state={
      value:"Hello"
    }
    this.changeInput = this.changeInput.bind(this)
  }
  /*(this必須要點到該元素，event.target只需要點到該元素在的那一塊區域)
  简单来说，this就是指向当前事件所绑定的元素，
  而e.target指向事件执行时鼠标所点击区域的那个元素。
  容易搞不懂的地方是，
  认为当前事件所绑定的元素不就是鼠标所点击的那个元素嘛，
  这时候就要看看事件绑定的元素内部有没有子元素了，
  如果有子元素的话e.target指向这个子元素，
  如果没有，e.target和this都指向事件所绑定的元素。
  */
 changeInput(event){
  this.setState({value:event.target.value})
 }
  render(){
    var value1 = this.state.value;
    return(
      <div>
        <input type="text" value={value1} onChange={this.changeInput}></input>
        {value1}
      </div>
    )
  }
}

//定時任務 注意這裡實在function的}後面寫上了bind(this)來控制定時,100控制定時時間
class Test9 extends Component{
  constructor(props){
    super(props);
    this.state={
     opacity: 1.0
    }
  }
 
  //組件已掛載刀頁面中，可以進行dom操作，可以發送請求獲取數據，可以通過setState修改狀態的值
  componentDidMount(){
    this.timer = setInterval(function(){
      var opacity1 = this.state.opacity;
      opacity1-=0.05;
      if(opacity1<0.1){
        opacity1 = 1;
      }
      this.setState({opacity:opacity1})
    }.bind(this),100);
  }
  render(){
    return(
      <div style={{opacity:this.state.opacity}}>
        Hello {this.props.name}
      </div>
    )
  }
}
//每s刷新時間
class Test10 extends Component{
  constructor(props){
    super(props);
    this.state={
      time:new Date().toLocaleTimeString()
    }
  }
  componentDidMount(){
    this.timer = setInterval(function(){
      var currentTime = this.state.time;
      this.setState({time:currentTime})
      }.bind(this),1000)
  }
  render(){
    return(
      <div>
        現在是：<span>{new Date().toLocaleTimeString()}</span>
      </div>
    )
  }
}

//獲取數據 jquery ajax  //TODO  跨域crossAcess配置及axios獲取數據
class Test11 extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      flag:false,
    }
  }
  render(){
    var flagString = this.state.flag?'獲取數據成功':'獲取數據失敗'
    return(
      <div>
        {flagString}
        {/* 控制顯示和隱藏要用三元表達式判斷，而非用v-if,這裡v-if不起作用 */}
        {this.state.flag?<span>數據長度爲{this.state.data.length}</span>:null}
        {/* <span style={{visible:"hidden"}}>數據長度爲{this.state.data.length}</span> */}
      </div>
    )
  }
  componentDidMount(){
    var url = "https://api.github.com/users/octocat/gists"
    $.get(url).then(data=>{
      this.setState({data:data})
      if(data.length>0){this.setState({flag:true})}
      console.log("data2",this.state.data)
    }).catch(err=>{
      console.log(err)
    })
  }
}

//axios 獲取數據
class Test12 extends Component{
  constructor(props){
    super(props);
    this.state={
      axiosData:[]
    }
  }
  componentDidMount(){
    var url2 = "https://api.github.com/users/octocat/gists";
    axios(url2).then(data=>{
      this.setState({axiosData:data})
      console.log("kkk",data);
      console.log("axios數據",this.state.axiosData)
    })
  }
  render(){
    return(
      <div>
        
      </div>
    )
  }
}
//加載大量數據時顯示loading
class Test13 extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[],
      error:null,
      loading:true
    }
  }
  render(){
    var dataList = this.state.data;
    if(this.state.loading){
      return <span>loading...</span>
    }else{
      return(
        <div style={{border:'1px solid black'}}>{dataList.map((item,index)=>{
        return <div><a key={index} href={item.html_url}>{item.name}</a></div>
        })}</div>
        )
    }

  }
  componentDidMount(){
    let url = "https://api.github.com/search/repositories?q=javascript&sort=stars";
    axios(url).then(data=>{
      this.setState({data:data.data.items})
      console.log("Test13",this.state.data)
      this.setState({loading:false})
    }).catch(err=>{
      // this.state.error = err
      this.setState({error:err})
    })
  }
}