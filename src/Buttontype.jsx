import React , {Component} from "react";
import "./style.css"

export default class Buttontype extends Component {
    constructor(props){
        super(props)
    }
    render(){
        function check(){
            
        }
        return(
        <div id="container">
        {this.props.CharSend.keyName!=""?<img id={this.props.CharSend.id} src={require("./imges/"+this.props.CharSend.keyName+".png")}/>:<span id={this.props.CharSend.id}>{this.props.CharSend.word}</span>}
        </div>
        )
    }
}