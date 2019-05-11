import React, {Component} from "react";
import MonacoEditor from 'react-monaco-editor';
import "./Result.scss";

class Result extends Component{
    render(){
        return(
            <div>
                <MonacoEditor
                    width="800"
                    height="600"
                    language="jajvascript"
                    theme="vs-dark"
                />
            </div>
        )
    }
}

export default Result;