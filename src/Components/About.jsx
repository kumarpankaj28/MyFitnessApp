import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="col-2">About:</h1>
                <p className="col-lg-4">I made this app so I could practice working in React.
                 The BMR calculator uses calculations similar to the Harris-Benedict Formula.
                This project also uses some bootstrap </p>
            </div>
         );
    }
}
 
export default About;