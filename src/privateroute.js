import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context";

const PrivateRoute = (props) => {

    let { isLogin } = useContext(AuthContext);
    // console.log(isLogin)

    if (isLogin) {
        return props.children;
    }
    return <Navigate to="/" replace />
}
export default PrivateRoute;