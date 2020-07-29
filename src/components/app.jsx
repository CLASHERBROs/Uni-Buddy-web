import React from 'react'
import Header from './header'
import Display from './Display'
import Footer from "./footer"
import Note from "./Note"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
var App = ()=>{
  var subjects = ["DSA","EDP","EM","OS","PC","NA","DMS"];
  let a = Math.floor(Math.random()*6)
    return(
   
<div className="box">
<Router>
<Header/>
<Switch>
             <Route path="/" component={Display } exact/>
             <Route path="/note"render={(props) => <Note {...props} title={subjects[a]} />} />
           </Switch>

<Footer/>
</Router>
     
      </div> 
    )
}




export default App