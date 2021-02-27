import React, { Component } from 'react'
import Input from "../input/input"


export class loginform extends Component {
    state = {
        formData: {
            name: {
                value: "",
                validator: {
                    minLength: 3,
                    maxLength: 6,
                    required: true
                },
                error: {status: true,message: "",isTouched : false}
            },
            phoneNumber: {
                value: "",
                validator: {
                    minLength: 10,
                    maxLength: 10,
                    required: false
                },
                error: {status: true,message: "",isTouched : false}
            },
            email:  {
                value: "",
                validator: {
                    required: true
                },
                error: {status: true,message: "",isTouched : false}
            },
            password:  {
                value: "",
                validator: {
                    minLength: 6,
                    maxLength: 24,
                    required: true
                },
                error: {status: true,message: "",isTouched : false}
            },
        },
        isFormValid: false,

    }

    checkValue = (value,rules) => {
        let isValid = true;
        let trimmedValue = value.trim();
        let message = "";

        if (rules.maxLength && trimmedValue.length > rules.maxLength){
            isValid = false;
            message = `ช่องนี้ต้องความยาวไม่เกิน ${rules.maxLength} ตัว`
        }

        if (rules.minLength && trimmedValue.length < rules.minLength){
            isValid = false;
            message = `ช่องนี้ต้องความยาวไม่น้อยกว่า ${rules.minLength} ตัว`
        }

        if (rules.required) {
            if (trimmedValue.length === 0){
                isValid = false;
                message = "คุณต้องกรอกช่องนี้"
            }
        }

        return {isValid,message};
    }

    onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const updatedFormData = {...this.state.formData};
        updatedFormData[fieldName].value = fieldValue

        let {isValid, message} = this.checkValue(e.target.value, updatedFormData[fieldName].validator);

        updatedFormData[fieldName].error.status = !isValid;
        updatedFormData[fieldName].error.message = message;
        updatedFormData[fieldName].error.isTouched = true;

        let newIsFormValid = true;
        for(let fn in updatedFormData){
            if (updatedFormData[fn].validator.required === true) {
                newIsFormValid = !updatedFormData[fn].error.status && newIsFormValid;
            }
        }

        this.setState({
            [fieldName]: fieldValue,
            isFormValid: newIsFormValid
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const {name,phoneNumber,email,password} = this.state.formData
        const {isFormValid} = this.state

        return (
            <div className="RegisterForm">
                <form onSubmit={this.onSubmitForm}> 
                    <Input 
                        onChangeInput={this.onChangeInput} 
                        value={name.value} name="name" 
                        placeholder="ชื้่อ" 
                        error={name.error}/>
                    <Input 
                        onChangeInput={this.onChangeInput} 
                        value={phoneNumber.value} name="name" 
                        placeholder="เบอร์โทรศัพท์" 
                        error={phoneNumber.error}/>
                    <Input 
                        onChangeInput={this.onChangeInput} 
                        value={email.value} 
                        name="name"
                        placeholder="อีเมล์" 
                        error={email.error}/>
                    <Input 
                        onChangeInput={this.onChangeInput} 
                        value={password.value} 
                        name="name" 
                        placeholder="Password" 
                        error={password.error}/>
            
                    <button disabled={!isFormValid} htmlFor="submit" className="Button">Register</button>
                </form>
            </div>
        )
    }
}
export default loginform
