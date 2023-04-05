import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context";

const Navbar = () => {
    let { isLogin } = useContext(AuthContext);

    return (
        <>
        <nav className="navbar">
           <NavLink to ='/'><i class="fa fa-fw fa-home"></i> Home</NavLink>
           <NavLink to ='/food'><i class="fa-solid fa-bowl-food"></i> Food</NavLink>
           <NavLink to ='/bakes'><i class="fa-solid fa-cake-candles"></i> Bakes</NavLink>
           <NavLink to = '/contact'><i class="fa fa-fw fa-envelope"></i> Contact</NavLink>
                     
           {isLogin ? (
            // code: Planning for conditional rendering. For now kept empty.
            <></>
           ) : (<NavLink className="split"to = '/login'><i class="fa fa-fw fa-user"></i> Login </NavLink>)
        }
        </nav>
    </>
    )
}
export default Navbar;



