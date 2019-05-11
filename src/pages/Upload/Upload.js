import React, {Component} from "react";
import { ChooseButton, Header, Copyright, ConverButton, CodeDropDown, Loader } from '../../components';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';
import axios from 'axios';
import "./Upload.scss";

class Upload extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false,
            file: "/images/noImage.png",
            isPreview: false,
            isLoading: false,
            code: 'upload test'
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            isLoading: true
        })
        const data = e.target.files[0];
        axios.post('https://imgur-apiv3.p.rapidapi.com/3/image', data, {
            headers: {'X-RapidAPI-Host': 'imgur-apiv3.p.rapidapi.com', 
            'X-RapidAPI-Key': 'f772ae3975msh0f2a9be97e8428ap1b1bf8jsnd7a337a72e89',
            'Authorization': 'Client-ID cb210255b3697d2'}
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

    submitConvert(){
        this.setState({
            isLoading: true
        })
        const data = {
            img_url: this.state.file
        }
        axios.post('', data)
        .then((req) => {
            console.log(req)
            this.setState({
                isLoading: false
            })
            this.props.history.push('/result');
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
                    <ConverButton onClick={this.submitConvert} text="Convert"/>
                    <Copyright/>
                </div>
            </div>
        )
    }
}

decorate(Upload, {
    code: observable
})

export default observer(Upload);