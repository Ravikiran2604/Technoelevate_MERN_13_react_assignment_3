import React, { Component } from 'react'
import './Vote.css'

export default class Vote extends Component {
        state ={
            count : 0,
            cnt1 : 0,
            cnt2 : 0,
            cnt3 : 0
        }
    btnclick1 = () =>{
                    let i = this.state.count
                    i++
                    this.setState({ count: i  });
    };

    btnclick2 = () =>{
                    let j = this.state.cnt1
                    j++
                    this.setState({ cnt1: j  });
    };

    btnclick3 = () =>{
                let x = this.state.cnt2
                    x++
                    this.setState({ cnt2: x  });
    };

    btnclick4 = () =>{
                let y = this.state.cnt3
                    y++
                    this.setState({ cnt3: y  });
    };

    render() {
        return (
            <div>
                <div className="head">
                    <h1 style={{textAlign:"center"}}>VOTE YOUR LANGUAGE!</h1>
                </div>
                <div className="bdy">
                    <div className="lan1">
                        <p>{this.state.count}</p>
                        <h5>REACT JS</h5>
                        <button id={"btn"} onClick={this.btnclick1}>Click Here</button>
                    </div>
                    <div className="lan2">
                        <p>{this.state.cnt1}</p>
                        <h5>PHP</h5>
                        <button id={"btn"} onClick={this.btnclick2}>Click Here</button>
                    </div>
                    <div className="lan3">
                        <p>{this.state.cnt2}</p>
                        <h5>PYTHON</h5>
                        <button id={"btn"} onClick={this.btnclick3}>Click Here</button>
                    </div>
                    <div className="lan4">
                        <p>{this.state.cnt3}</p>
                        <h5>JAVA</h5>
                        <button id={"btn"} onClick={this.btnclick4}>Click Here</button>
                    </div>
                </div>
            </div>
        )
    }
}
