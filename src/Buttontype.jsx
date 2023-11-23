import React, { Component } from "react";
import "./style.css"

export default class Buttontype extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="container" style={{ width: this.props.CharSend.width, height: this.props.CharSend.height, display:"flex" ,justifyContent:"center",alignItems:"center", fontWeight:"bolder"}}>
                {this.props.CharSend.keyName != ""
                    ? <img id={this.props.CharSend.id}  src={require("./imges/" + this.props.CharSend.keyName + ".png")} />
                    : <span id={this.props.CharSend.id}>{this.props.CharSend.word}</span>}
            </div>
        )
    }
}