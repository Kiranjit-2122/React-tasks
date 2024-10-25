import { useState } from "react"
export default function Forms(){
    var [name,setName]=useState("")
    var [email,setEmail]=useState("")
    var [password,setPassword]=useState("")
    var [contact,setContact]=useState("")

    const changeName=(e)=>{
        console.log(e.target.value);
        setName(e.target.value)
    }

    const changeEmail=(e)=>{
        setEmail(e.target.value)
    } 
    
    return(
        <>
        <label>Name:</label>
        <input value={name} onChange={changeName}></input>
        {name}
        <br/>
        <br/>
        <label>Email:</label>
        <input value={email} onChange={changeEmail}></input>
        {email}
        <br/>
        <br/>
        <label>Password:</label>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        {password}
        <br/>
        <br/>
        <label>Contact Number</label>
        <input value={contact} onChange={(e)=>{setContact(e.target.value)}}></input>
        {contact}
        </>
    )
}
