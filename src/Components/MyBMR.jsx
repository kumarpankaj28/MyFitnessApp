import React, { Component } from 'react';
import './fitnessApp.css';

class MyBMR extends Component {
    

    
    state = { 
        bmr: 0
     }

    calculateBmr = () => {
        let weight = parseInt(document.getElementById("weight").value)
        let ft = parseInt(document.getElementById("heightFt").value)
        let inch = parseInt(document.getElementById("heightIn").value)
        let height = (ft*12)+inch
        let age = parseInt(document.getElementById("age").value)
        let gender = document.getElementById("gender").value
        let activeLevel = document.getElementById("active").value
        switch (activeLevel) {
            case "active1":
                var active_mult = 1.2;
                break;
            case "active2":
                var active_mult = 1.375;
                break;
            case "active3":
                var active_mult = 1.55;
                break;
            case "active4":
                var active_mult = 1.725;
                break;
            default:
                var active_mult = 1;
          }
        

        if(gender === "Male"){
            let final_bmr = Math.round((66 + (6.23*weight) + (12.7 * height) - (6.8 * age))*active_mult)
            if(final_bmr>0){
                this.setState({bmr: final_bmr})}
            else{
                this.setState({bmr: 0})
            }
        }
        else{
            let final_bmr = Math.round((665 + (4.35*weight) + (4.7 * height) - (4.7 * age))*active_mult)
            if(final_bmr>0){
                this.setState({bmr: final_bmr})}
            else{
                this.setState({bmr: 0})
            }
        }
      
   
    }

    render() { 
        return ( 

            <div className="myBox">
                <h3 className="center">My BMR </h3>
                <p>Fill in your info</p>
                <select id = "gender">
                    <option selected value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br/><br/> 
                <p>Weight: <input id="weight" value={this.state.title}  size="10"></input></p>
                <p>ft: <input className="space"  id="heightFt"  value={this.state.title} size="2"/>
                &nbsp;in: <input className="space"  id="heightIn" value={this.state.title} size="2"/></p>
                <p>Age: <input className="space"  id="age" value={this.state.title} size="5"/><br></br></p>
                <p>How active are you?</p>
                <select  id="active">
                    <option  value="active1">little or no exercise</option>
                    <option value="active2">light exercise/sports 1-3 days/week</option>
                    <option value="active3">moderate exercise/sports 3-5 days/week</option>
                    <option value="active4">hard exercise/sports 6-7 days a week</option>
                </select><br/><br/>
                <button onClick = {this.calculateBmr} className ="btn btn-primary">Calculate</button>
                <h6> Your daily calorie intake should be {this.state.bmr}</h6>
            </div>
         );
    }
}
 
export default MyBMR;