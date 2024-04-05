import { useState } from 'react'
import { Button } from "flowbite-react";
import { Label, TextInput, Select, Blockquote } from "flowbite-react";
import { HiMail, HiLogin, HiUsers } from "react-icons/hi";
import './Form.css'
import { Card } from "flowbite-react";


function Form() {

    const [userDetails, setuserDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: ""
    })

    const [validation, setValidation] = useState({
        firstname: false,
        lastname: false,
        email: false,
        password: false,
        gender: false
    })


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setuserDetails(
            (prevState) => ({
                ...prevState,
                [name]: value
            })
        )
    }


    const handleBtn = (event) => {
        console.log("nnnn");
        event.preventDefault()
        console.log(email, password);
        validate()
    }


    function validate() {

        let firstVal = userDetails.firstname.length > 3 ? false : true
        let lastVal = userDetails.lastname.length > 3 ? false : true
        let emailVal = userDetails.email.includes("@") && userDetails.email.includes(".") ? false : true
        let passwordVal = userDetails.password.length > 3 ? false : true
        let genderVal = userDetails.gender == "other" ? false : true

        setValidation({
            ...validation,
            firstname: firstVal,
            lastname: lastVal,
            email: emailVal,
            password: passwordVal,
            gender: genderVal
        })
        // if (userDetails > 0) {
        //     // This is a setState method called setToDo that copies all the value in
        //     // the todo array and adds the input and pushs back the todo array
        //     setuserDetails([...todo, input])
        //     // This is a  setState method called setInput that reset the input back to an
        //     // empty string
        //     setInput("")
        // }
        console.log(todo);
    }
    return (
        <>

            <Blockquote className="text-xl">React Form</Blockquote>

            <div id='FormControl'>

                <div id='Form-control'>

                    <Card className="max-w-sm">

                        <form onSubmit={handleBtn}>

                            {/* FirstName */}
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="fname" />
                                </div>
                                <TextInput type="text" icon={HiUsers} name="firstname" value={userDetails.firstname}
                                    placeholder="First Name"
                                    id="fname" onChange={handleChange} />
                            </div>
                            {validation.firstname && <p>Error</p>}
                            <br />

                            {/* Last Name */}
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="lname" />
                                </div>
                                <TextInput type="text" icon={HiUsers} name="lastname" value={userDetails.lastname}
                                    placeholder="Last Name"
                                    id="lastname" onChange={handleChange} />
                            </div>
                            {validation.lastname && <p>Error</p>}
                            <br />

                            {/* Password */}
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="password" />
                                </div>
                                <TextInput id="password" type="password"
                                    name="password" icon={HiLogin}
                                    placeholder="password" value={userDetails.password}
                                    onChange={handleChange} sizing="sm"
                                    shadow />
                            </div>
                            {validation.password && <p>Error</p>}

                            <br />

                            {/*Email  */}
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="email" />
                                </div>
                                <TextInput type="email" icon={HiMail} name="email" value={userDetails.email}
                                    placeholder="email@gmail.com"
                                    id="email" onChange={handleChange} />
                            </div>
                            {validation.email && <p>Error</p>}
                            <br />

                            {/* Gender */}
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="countries" />
                                </div>

                                <Select id="gender" onChange={handleChange}>
                                    <option value="other" >Other</option>
                                    <option value="Male" >Male</option>
                                    <option value="Female">Female</option>
                                </Select>
                            </div>
                            {validation.gender && <p>Error</p>}
                            

                            <br />

                            {/* Button */}
                            <button>Log In</button>
                        </form >

                    </Card>
                    <br />
                </div>


                <div id='FormContent'>
                    <Card className="max-w-sm">
                        First_Name:  {userDetails.firstname} <br /> <br />
                        Last_Name:  {userDetails.lastname} <br /> <br />
                        Email: {userDetails.email} <br /> <br />
                        Password: {userDetails.password} <br /> <br />
                        Gender:  {userDetails.gender}
                    </Card>
                </div>
            </div>



        </>
    )
}

export default Form

