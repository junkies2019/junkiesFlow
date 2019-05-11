import React, {Component} from "react";
import { ChooseButton, Header, Copyright, ConverButton, CodeDropDown } from '../../components';
import "./Upload.scss";

class Upload extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false,
            file: "/images/noImage.png",
            isPreview: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            file: URL.createObjectURL(e.target.files[0]),
            isPreview: true
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="uploadContainer">
                    <div className="previewImageContainer">
                        <img className="previewImage" alt="previewIamge" src={this.state.file}/>
                    </div>
                    <div className="buttonGroupContainer">
                        <ChooseButton onChange={this.handleChange}/>
                        <CodeDropDown icon="/images/code-small.svg" onClick={() => {this.setState(state => {return {isOpen: !state.isOpen}})}} isOpen={this.state.isOpen}/>
                    </div>
                    <ConverButton icon="/images/upload.svg" text="Convert"/>
                    <Copyright/>
                </div>
            </div>
        )
    }
}

export default Upload;