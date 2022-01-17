import {useState, useContext} from "react";
import {AuthContext} from "../AuthProvider/AuthContext";
import {Redirect} from "react-router-dom";

const Login = () => {

    const [name, setName] = useState("");

    const [password, setPassword] = useState("");
    const {handleToken, token}  = useContext(AuthContext);

    // const handleClick = () => {
    //     handleToken("tokenCreated");
    // }

    if(token) {
        return <Redirect to = "/Applyjobs" />
    }


    return (
        <div>
            email :   <input  value = {name} onChange = {(e) => setName(e.target.value)} type = "text" placeholder = "email" />
            <br />
           password : <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "password" />
            <br />
            <button onClick = {() => {
                handleToken("token")
            }}>Login</button>
        </div>
    )
}
export {Login};