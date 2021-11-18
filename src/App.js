import React,{Component} from "react";

import './App.css'
import Button from "./Button";
import {Route, Routes} from "react-router-dom";
import {Home,About,NotFound,Post} from './pages'
import Menu from "./Menu";

class App extends Component{
  homeMenu = [{url:'/',name:'HOME'},{url:'/about',name:'ABOUT'},{url:'/post',name:'POST'}]
 render(){
   const {homeMenu} = this
   return(
     <div className="App">
       <Menu menus={homeMenu}></Menu>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/about" element={<About/>}/>
         <Route path="/post" element={<Post/>}>
           <Route path=":postId" element={<Post/>}/>
           </Route>
         <Route exact path="*" element={<NotFound/>}/>
       </Routes>
      
     </div>
   )
 }
}
export default App;