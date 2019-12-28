import Test from "../component/Test"
import Test2 from "../component/Test2"
import Menu from "../component/Menu"
import Layout from "../component/layout/Layout"
const route=[
 { 
    component:Layout,
    path:"",
    routes:[
      {
        path:"/",
        component:Test
      },
      {
        path:"/test",
        component:Test
      },
      {
        path:"/test2",
        component:Test2
      },
      {
        path:"/menu",
        component:Menu
      },
    ]}
  

]
export default route