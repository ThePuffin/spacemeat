import React, { Component } from "react";
import wait from "./GIF/BB8.gif"
// import "./loader.css";

class Wait extends Component {
 constructor(props) {
   super(props);
   this.state = {
     loading: 0
   };
 }
 componentDidMount() {
   setTimeout(() => this.setState({ loading: this.state.loading++ }), 10000);
 }

 render() {
   const { loading } = this.state;

   if (loading === 0) {
     // if your component doesn't have to wait for an async action, remove this block
     return <center>
         <div className="waitgif" />
         <br />
        
         <h1>Nous selectionnons tous les utilisateurs disponibles</h1>
         <img src={wait} className="imgg" alt="logo" />
         <h3>Veuillez patienter</h3>
       </center>; // render null when app is not ready
   }

   return (
     <center>
       <div
         className="waitgif"
         styles={{ "background-image": "url(./GIF/BB8.gif)" }}
       />
     </center>
   );
 }
}

export default Wait;


