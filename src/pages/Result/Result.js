import React, {Component} from "react";
import { Header, Copyright, Button } from '../../components';
import MonacoEditor from 'react-monaco-editor';
import { observer, inject } from 'mobx-react';
import API from '../../api/api';
import "./Result.scss";
import axios from "axios";

@inject('code')
@observer
class Result extends Component{
    constructor(props) {
        super(props);
        this.state = {
            code: this.props.code.prototype.text,
            kind: this.props.code.prototype.kind,
            token: '',
            output: '',
        }
    }

    editorDidMout(editor, monaco) {
        editor.focus();
    }

    onChange(value ,e) {
        console.log(value)
    }

    editorDidMount = (editor) => {
        // eslint-disable-next-line no-console
        console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
        this.editor = editor;
      }

    changeEditorValue = () => {
        if (this.editor) {
          this.editor.setValue(this.state.code);
        }
      }

    runDebug(){
        const data = {
            code: this.props.code.prototype.text,
            language: this.state.kind
        };
        axios.post(`${API}/v1/run`, data)
        .then((req) => {
            this.setState({
                token: req.data.data.token
            })
            axios.get(`${API}/v1/verify/${this.state.token}`)
            .then((req) => {
                this.setState({
                    output: req.data.data.result.stdout
                })
                console.log(req)
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        const code = this.props.code.prototype.text;
        const options = {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: false,
        };

        return(
            <div>
                <Header/>
                <div className="resultContainer">
                    <MonacoEditor
                        width="100%"
                        height="600"
                        language="javascript"
                        theme="vs-dark"
                        value={code}
                        options={options}
                        onChange={this.onChange}
                        editorDidMount={this.editorDidMount}
                    />
                    <div className="outputContainer">
                        <span className="outputText">{this.state.output}</span>
                    </div>
                    <div className="buttonGroupContainer">
                        <Button icon="/images/filter.svg" text="Run" onClick={this.runDebug.bind(this)} isConfirm={true}/>
                        <Button icon="/images/close.svg" text="Abort" onClick={this.changeEditorValue} isConfirm={false}/>
                    </div>
                    <Copyright/>
                </div>
            </div>
        )
    }
}

export default Result;