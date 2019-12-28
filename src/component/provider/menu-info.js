import basicChildren from '../provider/basicChildren'
import basicChildren2 from '../provider/basicChildren2'

const menu = [
  
  {
    id: "a",
    name: "基本資料",
    children:basicChildren
  },
  {
    id: "b",
    name: "倉庫管理",
    children:basicChildren2
  },
  {
    id: "c",
    name: "刀具室管理",
    children:basicChildren
  },
  {
    id: "d",
    name: "刀具室統計分析",
    children:basicChildren
  },
  {
    id: "e",
    name: "點檢保養",
    path:"/test2"
  },
]
export default menu