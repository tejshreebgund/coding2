import {useContext} from "react";

import {AuthContext} from "../AuthProvider/AuthContext";

import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({children, path}) => {

    const {token}  = useContext(AuthContext);


    if(!token){
        return <Redirect to = "/login" />
    } 

    return (
        <Route path = {path}>
            {children}
        </Route>
    )
}


export {PrivateRoute};