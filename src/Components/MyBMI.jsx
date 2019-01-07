import React, { Component } from 'react';
import './fitnessApp.css';

class MyBMI extends Component {
    state = { 
        bmi:0,
        bodytype: ""
    }

    calculateBmi = () =>{
        let weight = parseInt(document.getElementById("weightBmi").value)
        let ft = parseInt(document.getElementById("heightFtBmi").value)
        let inch = parseInt(document.getElementById("heightInBmi").value)
        let height = (ft*12)+inch
        let myBmi = ((weight*703)/(height*height)).toFixed(2)
        this.setState({bmi: myBmi})
        if(myBmi<18.5){
            this.setState({bodytype:"Underweight"})
        }
        if(myBmi>=18.5 && myBmi<24.9){
            this.setState({bodytype:"Normal Weight"})
        }
        if(myBmi>=24.9 && myBmi<29.9){
            this.setState({bodytype:"Overweight"})
        }
        if(myBmi>=29.9){
            this.setState({bodytype:"Obese"})
        }
        if(!(myBmi>0)){
            this.setState({bmi:0})
        }
    }
    render() { 
        return ( 
            <div className="myBox">
                <h3>My BMI</h3>
                <p>Enter info to find your BMI</p>
                <p>Weight: <input id="weightBmi" value={this.state.title}  size="10"></input></p>
                <p>ft: <input className="space"  id="heightFtBmi"  value={this.state.title} size="2"/>
                &nbsp;in: <input className="space"  id="heightInBmi" value={this.state.title} size="2"/></p>
                <button onClick = {this.calculateBmi} className ="btn btn-primary">Calculate</button>
                <h6> Your BMI is {this.state.bmi}  and body your body type is {this.state.bodytype}</h6>
                
            </div>
         );
    }
}
 
export default MyBMI;