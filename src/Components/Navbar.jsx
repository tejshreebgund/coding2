
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div style = {{margin: "auto", width: "800px", height: "50px", backgroundColor: "gray", color : "White"}}>
            <Link style = {{marginTop : "10px", color : "white", fontWeight: "bold", marginLeft : "40px"}}to = "/">Home</Link>
            <Link style = {{marginTop : "10px", color : "white", fontWeight: "bold", marginLeft : "40px"}} to = "/admin">Admin</Link>
            <Link style = {{marginTop : "10px", color : "white", fontWeight: "bold", marginLeft : "40px"}} to = "/Addjob" >Add-jobs</Link>
            <Link style = {{marginTop : "10px", color : "white", fontWeight: "bold", marginLeft : "40px"}} to = "/login">Login</Link>
        </div>
    )
}

export {Navbar};