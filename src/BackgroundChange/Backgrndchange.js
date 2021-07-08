import React, { Component } from 'react'


export default class Bgndchange extends Component {
    
    
    bgchange = () => {
    document.body.style.backgroundColor = document.getElementById("background").value;
                    }
        
    render() {        
        return (
            <div>
                <div id="bg">
                    <select id="background" onChange={this.bgchange}>
                        <option value="">Select Colors</option>
                        <option value="palevioletred">Palevioletred</option>
                        <option value="teal">Teal</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="blue">Blue</option>
                        <option value="tomato">Tomato</option>
                    </select>
                </div>
            </div>
        )
    }
}
