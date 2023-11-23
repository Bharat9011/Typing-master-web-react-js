import React from "react";
import { render } from "@testing-library/react";
import Buttontype from "./Buttontype";
import './style.css';

export default function Layout() {
    return (
        <>
            <div id="keylayout">
                <div id="containerid">
                    <Buttontype CharSend={{ 'keyName': '_`', 'word': 'Backtick', 'id': 'backtick' }} />
                    <Buttontype CharSend={{ 'keyName': '_1', 'word': '1', 'id': 'one' }} />
                    <Buttontype CharSend={{ 'keyName': '_2', 'word': '2', 'id': 'two' }} />
                    <Buttontype CharSend={{ 'keyName': '_3', 'word': '3', 'id': 'three' }} />
                    <Buttontype CharSend={{ 'keyName': '_4', 'word': '4', 'id': 'four' }} />
                    <Buttontype CharSend={{ 'keyName': '_5', 'word': '5', 'id': 'five' }} />
                    <Buttontype CharSend={{ 'keyName': '_6', 'word': '6', 'id': 'six' }} />
                    <Buttontype CharSend={{ 'keyName': '_7', 'word': '7', 'id': 'seven' }} />
                    <Buttontype CharSend={{ 'keyName': '_8', 'word': '8', 'id': 'eight' }} />
                    <Buttontype CharSend={{ 'keyName': '_9', 'word': '9', 'id': 'nine' }} />
                    <Buttontype CharSend={{ 'keyName': '_0', 'word': '0', 'id': 'zero' }} />
                    <Buttontype CharSend={{ 'keyName': '__', 'word': 'underscore', 'id': 'underscore' }} />
                    <Buttontype CharSend={{ 'keyName': '_+', 'word': 'plus', 'id': 'plus' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'Backspace', 'id': 'Backspace' }} />
                </div>

                <div id="containerid">
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'tab', 'id': 'tab' }} />
                    <Buttontype CharSend={{ 'keyName': 'q', 'word': 'q', 'id': 'q' }} />
                    <Buttontype CharSend={{ 'keyName': 'w', 'word': 'w', 'id': 'w' }} />
                    <Buttontype CharSend={{ 'keyName': 'e', 'word': 'e', 'id': 'e' }} />
                    <Buttontype CharSend={{ 'keyName': 'r', 'word': 'r', 'id': 'r' }} />
                    <Buttontype CharSend={{ 'keyName': 't', 'word': 't', 'id': 't' }} />
                    <Buttontype CharSend={{ 'keyName': 'y', 'word': 'y', 'id': 'y' }} />
                    <Buttontype CharSend={{ 'keyName': 'u', 'word': 'u', 'id': 'u' }} />
                    <Buttontype CharSend={{ 'keyName': 'i', 'word': 'i', 'id': 'i' }} />
                    <Buttontype CharSend={{ 'keyName': 'o', 'word': 'o', 'id': 'o' }} />
                    <Buttontype CharSend={{ 'keyName': 'p', 'word': 'p', 'id': 'p' }} />
                    <Buttontype CharSend={{ 'keyName': '_[', 'word': '[', 'id': 'cubeopen' }} />
                    <Buttontype CharSend={{ 'keyName': '_]', 'word': ']', 'id': 'cubeclose' }} />
                    <Buttontype CharSend={{ 'keyName': 'aaa', 'word': 'backslash', 'id': 'backslash' }} />
                </div>

                <div id="containerid">
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'caps lock', 'id': 'capslock' }} />
                    <Buttontype CharSend={{ 'keyName': 'a', 'word': 'a', 'id': 'a' }} />
                    <Buttontype CharSend={{ 'keyName': 's', 'word': 's', 'id': 's' }} />
                    <Buttontype CharSend={{ 'keyName': 'd', 'word': 'd', 'id': 'd' }} />
                    <Buttontype CharSend={{ 'keyName': 'f', 'word': 'f', 'id': 'f' }} />
                    <Buttontype CharSend={{ 'keyName': 'g', 'word': 'g', 'id': 'g' }} />
                    <Buttontype CharSend={{ 'keyName': 'h', 'word': 'h', 'id': 'h' }} />
                    <Buttontype CharSend={{ 'keyName': 'j', 'word': 'j', 'id': 'j' }} />
                    <Buttontype CharSend={{ 'keyName': 'k', 'word': 'k', 'id': 'k' }} />
                    <Buttontype CharSend={{ 'keyName': 'l', 'word': 'l', 'id': 'l' }} />
                    <Buttontype CharSend={{ 'keyName': '_;', 'word': ';', 'id': 'semicolon' }} />
                    <Buttontype CharSend={{ 'keyName': 'kkk', 'word': '"', 'id': 'Quotation' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'enter', 'id': 'enter' }} />
                </div>

                <div id="containerid">
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'shift', 'id': 'shift' }} />
                    <Buttontype CharSend={{ 'keyName': 'z', 'word': 'z', 'id': 'z' }} />
                    <Buttontype CharSend={{ 'keyName': 'x', 'word': 'x', 'id': 'x' }} />
                    <Buttontype CharSend={{ 'keyName': 'c', 'word': 'c', 'id': 'c' }} />
                    <Buttontype CharSend={{ 'keyName': 'v', 'word': 'v', 'id': 'v' }} />
                    <Buttontype CharSend={{ 'keyName': 'b', 'word': 'b', 'id': 'b' }} />
                    <Buttontype CharSend={{ 'keyName': 'n', 'word': 'n', 'id': 'n' }} />
                    <Buttontype CharSend={{ 'keyName': 'm', 'word': 'm', 'id': 'm' }} />
                    <Buttontype CharSend={{ 'keyName': '_,', 'word': ',', 'id': 'commas' }} />
                    <Buttontype CharSend={{ 'keyName': '_.', 'word': '.', 'id': 'dot' }} />
                    <Buttontype CharSend={{ 'keyName': 'bbb', 'word': 'forward slash', 'id': 'forwardslash' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'shift', 'id': 'shift' }} />
                </div>
                <div></div>

                <div id="containerid">
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'ctrl', 'id': 'ctrl' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'fn', 'id': 'fn' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'win', 'id': 'win' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'alt', 'id': 'alt' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'space bar', 'id': 'space' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'alt', 'id': 'alt' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'ctrl', 'id': 'ctrl' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'left', 'id': 'left' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'top', 'id': 'top' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'bottom', 'id': 'bottom' }} />
                    <Buttontype CharSend={{ 'keyName': '', 'word': 'right', 'id': 'right' }} />
                </div>
            </div>
        </>
    )
}