import React, { Component } from "react";
import leia from "./lovetunnel/leia.gif";
import wink from "./lovetunnel/wink.gif";
import oups from "./lovetunnel/oups.gif";
import trap from "./lovetunnel/trap.gif";
import loveU from "./lovetunnel/loveU.gif";
import tunnel from "./lovetunnel/love.gif";
import tunnel2 from "./lovetunnel/lovelove.gif";
import tunnel3 from "./lovetunnel/lovelovelove.gif";
import feeling from "./lovetunnel/feeling.gif"
import "./Tunnel.css";

// import "./loader.css";

class Tunnel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 0
    };
  }

  changed() {
    setTimeout(
      () =>
        this.setState({
          loading: ++this.state.loading
        }),
      2000
    );
  }

  render() {
    const { loading } = this.state;

    if (loading === 0) {
      this.changed();
      // if your component doesn't have to wait for an async action, remove this block
      return <center>
          <div className="waitgif" />
          <br />

          <h1>Love is in the air</h1>
          <img src={wink} className="imgg" alt="logo" />
        </center>; // render null when app is not ready
    } else if (loading === 1) {
      this.changed();
      // if your component doesn't have to wait for an async action, remove this block
      return <center>
          <div className="waitgif" />
          <br />
  
          <img src={tunnel} className="imgg" alt="logo" />
        </center>; // render null when app is not ready
    } else if (loading === 2) {
      this.changed();
      // if your component doesn't have to wait for an async action, remove this block
      return <center>
          <div className="waitgif" />
          <br />

          <h1>Ca va matcher</h1>
          <img src={leia} className="imgg" alt="logo" />
        </center>; // render null when app is not ready
    } else if (loading === 3) {
      this.changed();
      // if your component doesn't have to wait for an async action, remove this block
      return <center>
          <div className="waitgif" />
          <br />

          
          <img src={tunnel2} className="imgg" alt="logo" />
        </center>; // render null when app is not ready
    } else if (loading === 4) {
      this.changed();
      // if your component doesn't have to wait for an async action, remove this block
      return <center>
          <div className="waitgif" />
          <br />

          <h1>LOVE LOVE LOVE</h1>
          <img src={loveU} className="imgg" alt="logo" />
        </center>; // render null when app is not ready
    } else if (loading === 5) {
      this.changed();
      // if your component doesn't have to wait for an async action, remove this block
      return <center>
          <div className="waitgif" />
          <br />

         
          <img src={tunnel3} className="imgg" alt="logo" />
        </center>; // render null when app is not ready
    } else if (loading === 6) {
      this.changed();
      // if your component doesn't have to wait for an async action, remove this block
      return <center>
          <div className="waitgif" />
          <br />

       
          <img src={feeling} className="imgg" alt="logo" />
        </center>; // render null when app is not ready
    } else if (loading === 7) {
      this.changed();
      // if your component doesn't have to wait for an async action, remove this block
      return <center>
          <div className="waitgif" />
          <br />

          
          <img src={oups} className="imgg" alt="logo" />
        </center>; // render null when app is not ready
    }

    return <center>
        <div className="waitgif" />
        <br />

        <h1>SPACE MEAT</h1>
        <img src={trap} className="imgg" alt="logo" />
        <h1>IS FOREVER</h1>
      </center>; // render null when app is not ready
  }
}

export default Tunnel;
