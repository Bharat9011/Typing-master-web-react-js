import React from "react";
import { render } from "@testing-library/react";
import Buttontype from "./Buttontype";
import './style.css';

export default function Layout() {
    return (
        <>
            <div id="keylayout">
                <div>
                    <Buttontype CharSend={{ 'keyName': '_`', 'width': '60px', 'height': '60px', 'word': 'Backtick', 'id': 'backtick' }} />
                    <Buttontype CharSend={{ 'keyName': '_1', 'width': '60px', 'height': '60px', 'word': '1', 'id': 'one' }} />
                    <Buttontype CharSend={{ 'keyName': '_2', 'width': '60px', 'height': '60px', 'word': '2', 'id': 'two' }} />
                    <Buttontype CharSend={{ 'keyName': '_3', 'width': '60px', 'height': '60px', 'word': '3', 'id': 'three' }} />
                    <Buttontype CharSend={{ 'keyName': '_4', 'width': '60px', 'height': '60px', 'word': '4', 'id': 'four' }} />
                    <Buttontype CharSend={{ 'keyName': '_5', 'width': '60px', 'height': '60px', 'word': '5', 'id': 'five' }} />
                    <Buttontype CharSend={{ 'keyName': '_6', 'width': '60px', 'height': '60px', 'word': '6', 'id': 'six' }} />
                    <Buttontype CharSend={{ 'keyName': '_7', 'width': '60px', 'height': '60px', 'word': '7', 'id': 'seven' }} />
                    <Buttontype CharSend={{ 'keyName': '_8', 'width': '60px', 'height': '60px', 'word': '8', 'id': 'eight' }} />
                    <Buttontype CharSend={{ 'keyName': '_9', 'width': '60px', 'height': '60px', 'word': '9', 'id': 'nine' }} />
                    <Buttontype CharSend={{ 'keyName': '_0', 'width': '60px', 'height': '60px', 'word': '0', 'id': 'zero' }} />
                    <Buttontype CharSend={{ 'keyName': '__', 'width': '60px', 'height': '60px', 'word': 'underscore', 'id': 'underscore' }} />
                    <Buttontype CharSend={{ 'keyName': '_+', 'width': '60px', 'height': '60px', 'word': 'plus', 'id': 'plus' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '90px', 'height': '60px', 'word': 'Backspace', 'id': 'Backspace' }} />


                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': 'num lock', 'id': 'numlock' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '/', 'id': 'slash' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '*', 'id': 'asterish' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '-', 'id': 'miuns' }} />
                </div>
                <div>
                    <Buttontype CharSend={{ 'keyName': '', 'width': '90px', 'height': '60px', 'word': 'tab', 'id': 'tab' }} />
                    <Buttontype CharSend={{ 'keyName': 'q', 'width': '60px', 'height': '60px', 'word': 'q', 'id': 'q' }} />
                    <Buttontype CharSend={{ 'keyName': 'w', 'width': '60px', 'height': '60px', 'word': 'w', 'id': 'w' }} />
                    <Buttontype CharSend={{ 'keyName': 'e', 'width': '60px', 'height': '60px', 'word': 'e', 'id': 'e' }} />
                    <Buttontype CharSend={{ 'keyName': 'r', 'width': '60px', 'height': '60px', 'word': 'r', 'id': 'r' }} />
                    <Buttontype CharSend={{ 'keyName': 't', 'width': '60px', 'height': '60px', 'word': 't', 'id': 't' }} />
                    <Buttontype CharSend={{ 'keyName': 'y', 'width': '60px', 'height': '60px', 'word': 'y', 'id': 'y' }} />
                    <Buttontype CharSend={{ 'keyName': 'u', 'width': '60px', 'height': '60px', 'word': 'u', 'id': 'u' }} />
                    <Buttontype CharSend={{ 'keyName': 'i', 'width': '60px', 'height': '60px', 'word': 'i', 'id': 'i' }} />
                    <Buttontype CharSend={{ 'keyName': 'o', 'width': '60px', 'height': '60px', 'word': 'o', 'id': 'o' }} />
                    <Buttontype CharSend={{ 'keyName': 'p', 'width': '60px', 'height': '60px', 'word': 'p', 'id': 'p' }} />
                    <Buttontype CharSend={{ 'keyName': '_[', 'width': '60px', 'height': '60px', 'word': '[', 'id': 'cubeopen' }} />
                    <Buttontype CharSend={{ 'keyName': '_]', 'width': '60px', 'height': '60px', 'word': ']', 'id': 'cubeclose' }} />
                    <Buttontype CharSend={{ 'keyName': 'aaa', 'width': '60px', 'height': '60px', 'word': 'backslash', 'id': 'backslash' }} />


                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '7', 'id': 'numseven' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '8', 'id': 'numeight' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '9', 'id': 'numeight' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '+', 'id': 'plus' }} />
                </div>

                <div>
                    <Buttontype CharSend={{ 'keyName': '', 'width': '100px', 'height': '60px', 'word': 'caps lock', 'id': 'capslock' }} />
                    <Buttontype CharSend={{ 'keyName': 'a', 'width': '60px', 'height': '60px', 'word': 'a', 'id': 'a' }} />
                    <Buttontype CharSend={{ 'keyName': 's', 'width': '60px', 'height': '60px', 'word': 's', 'id': 's' }} />
                    <Buttontype CharSend={{ 'keyName': 'd', 'width': '60px', 'height': '60px', 'word': 'd', 'id': 'd' }} />
                    <Buttontype CharSend={{ 'keyName': 'f', 'width': '60px', 'height': '60px', 'word': 'f', 'id': 'f' }} />
                    <Buttontype CharSend={{ 'keyName': 'g', 'width': '60px', 'height': '60px', 'word': 'g', 'id': 'g' }} />
                    <Buttontype CharSend={{ 'keyName': 'h', 'width': '60px', 'height': '60px', 'word': 'h', 'id': 'h' }} />
                    <Buttontype CharSend={{ 'keyName': 'j', 'width': '60px', 'height': '60px', 'word': 'j', 'id': 'j' }} />
                    <Buttontype CharSend={{ 'keyName': 'k', 'width': '60px', 'height': '60px', 'word': 'k', 'id': 'k' }} />
                    <Buttontype CharSend={{ 'keyName': 'l', 'width': '60px', 'height': '60px', 'word': 'l', 'id': 'l' }} />
                    <Buttontype CharSend={{ 'keyName': '_;', 'width': '60px', 'height': '60px', 'word': ';', 'id': 'semicolon' }} />
                    <Buttontype CharSend={{ 'keyName': 'kkk', 'width': '60px', 'height': '60px', 'word': '"', 'id': 'Quotation' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'width': '115px', 'height': '60px', 'word': 'enter', 'id': 'enter' }} />


                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '4', 'id': 'numfour' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '5', 'id': 'numfive' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '6', 'id': 'numsix' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '+', 'id': 'plus' }} />
                </div>

                <div>
                    <Buttontype CharSend={{ 'keyName': '',  'width': '120px', 'height': '60px', 'word': 'shift', 'id': 'shift' }} />
                    <Buttontype CharSend={{ 'keyName': 'z', 'width': '60px', 'height': '60px', 'word': 'z', 'id': 'z' }} />
                    <Buttontype CharSend={{ 'keyName': 'x', 'width': '60px', 'height': '60px', 'word': 'x', 'id': 'x' }} />
                    <Buttontype CharSend={{ 'keyName': 'c', 'width': '60px', 'height': '60px', 'word': 'c', 'id': 'c' }} />
                    <Buttontype CharSend={{ 'keyName': 'v', 'width': '60px', 'height': '60px', 'word': 'v', 'id': 'v' }} />
                    <Buttontype CharSend={{ 'keyName': 'b', 'width': '60px', 'height': '60px', 'word': 'b', 'id': 'b' }} />
                    <Buttontype CharSend={{ 'keyName': 'n', 'width': '60px', 'height': '60px', 'word': 'n', 'id': 'n' }} />
                    <Buttontype CharSend={{ 'keyName': 'm', 'width': '60px', 'height': '60px', 'word': 'm', 'id': 'm' }} />
                    <Buttontype CharSend={{ 'keyName': '_,', 'width': '60px', 'height': '60px', 'word': ',', 'id': 'commas' }} />
                    <Buttontype CharSend={{ 'keyName': '_.', 'width': '60px', 'height': '60px', 'word': '.', 'id': 'dot' }} />
                    <Buttontype CharSend={{ 'keyName': 'bbb', 'width': '60px', 'height': '60px', 'word': 'forward slash', 'id': 'forwardslash' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'width': '158px', 'height': '60px', 'word': 'shift', 'id': 'shift' }} />

                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '1', 'id': 'numone' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '2', 'id': 'numtwo' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '3', 'id': 'numthree' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': 'enter', 'id': 'numenter' }} />
                </div>
                <div></div>

                <div style={{ display: "inline-block" }}>
                    <Buttontype CharSend={{ 'keyName': '', 'width': '57px', 'height': '60px', 'word': 'ctrl', 'id': 'ctrl' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'width': '60px', 'height': '60px', 'word': 'fn', 'id': 'fn' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'width': '60px', 'height': '60px', 'word': 'win', 'id': 'win' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'width': '60px', 'height': '60px', 'word': 'alt', 'id': 'alt' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'width': '348px', 'height': '60px', 'word': 'space bar', 'id': 'space' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'width': '60px', 'height': '60px', 'word': 'alt', 'id': 'alt' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'width': '60px', 'height': '60px', 'word': 'ctrl', 'id': 'ctrl' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'width': '60px', 'height': '60px', 'word': 'left', 'id': 'left' }} />
                    <div style={{ display: "inline-grid", float:"left" }}>
                        <Buttontype CharSend={{ 'keyName': '', 'width': '60px', 'height': '29px', 'word': 'up', 'id': 'up' }} />
                        <Buttontype CharSend={{ 'keyName': '', 'width': '60px', 'height': '28px', 'word': 'down', 'id': 'down' }} />
                    </div>
                    <Buttontype CharSend={{ 'keyName': '', 'width': '60px', 'height': '60px', 'word': 'right', 'id': 'right' }} />


                    <Buttontype CharSend={{ 'keyName': '',   'width': '125px', 'height': '60px', 'word': '0', 'id': 'numzero' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': '.', 'id': 'numdot' }} />
                    <Buttontype CharSend={{ 'keyName': '',   'width': '60px', 'height': '60px', 'word': 'enter', 'id': 'numenter' }} />
                </div>
            </div>
        </>
    )
}