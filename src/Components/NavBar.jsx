import React, { Component, } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar bg-dark">
                <h1 className="col-4"><a className ="text-white" href = "/">My Fitness App</a></h1>
                <h6 className="col-1"><a className ="text-white" href="/about">About</a></h6>
                
            </nav>
        );
    }
}
 
export default NavBar;