import React, {Component} from "react";
import { ChooseButton, Header, Copyright, ConverButton, CodeDropDown, Loader } from '../../components';
import axios from 'axios';
import "./Upload.scss";

class Upload extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false,
            file: "/images/noImage.png",
            isPreview: false,
            isLoading: false
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            isLoading: true
        })
        const data = e.target.files[0];
        axios.post('https://api.imgur.com/3/image', data, {
            headers: {'Authorization': 'Client-ID cb210255b3697d2'}
        })
        .then((req) => {
            this.setState({
                file: req.data.data.link,
                isPreview: true,
                isLoading: false
            })
        })
        .catch((err) => {
            console.log(err)
            this.setState({
                isLoading: false
            })
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
                    <Loader isLoading={this.state.isLoading}/>
                    <div className="buttonGroupContainer">
                        <ChooseButton onChange={this.handleChange}/>
                        <CodeDropDown icon="/images/code-small.svg" onClick={() => {this.setState(state => {return {isOpen: !state.isOpen}})}} isOpen={this.state.isOpen}/>
                    </div>
                    <ConverButton text="Convert"/>
                    <Copyright/>
                </div>
            </div>
        )
    }
}

export default Upload;