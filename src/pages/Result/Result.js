import React, {Component} from "react";
import MonacoEditor from 'react-monaco-editor';
import { Header, Copyright, Button } from '../../components';
import "./Result.scss";
import axios from "axios";

class Result extends Component{
    constructor(props) {
        super(props);
        this.state = {
            code: 'Hello, World!'
        }
    }

    editorDidMout(editor, monaco) {
        editor.focus();
    }

    onChange(value, e) {
        console.log(value)
    }

    runDebug(){
        const data = this.state.code;
        axios.post('', data)
        .then((req) => {
            console.log(req)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        }

        return(
            <div>
                <Header/>
                <div className="resultContainer">
                    <MonacoEditor
                        id="Editor"
                        width="1000"
                        height="540"
                        language="jajvascript"
                        theme="vs-dark"
                        value={code}
                        options={options}
                        onChange={this.onChange}
                        editorDidMount={this.editorDidMout}
                    />
                    <div className="outputContainer">
                    </div>
                    <div className="buttonGroupContainer">
                        <Button icon="/images/filter.svg" text="Run" isConfirm={true}/>
                        <Button icon="/images/close.svg" text="Abort" isConfirm={false}/>
                    </div>
                    <Copyright/>
                </div>
            </div>
        )
    }
}

export default Result;