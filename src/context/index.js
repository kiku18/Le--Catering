import { createContext, useEffect, useState } from "react";

export let AuthContext = createContext(null);

const LoginContext = (props) => {
    const [loginState, setLoginState] = useState(false);
    const [userId, setUserId] = useState(null);


    useEffect(() => {
       let token = localStorage.getItem('token');
       if (token) {
        setLoginState(true);
        let parsedData = parseJwt(token);
        setUserId(parsedData.sub)
       }
    }, []);

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }
// let Obj = {
//     isLogin: false,
//     setIsLogin:(a,b)=> {
//         return a+b
//     }
// }
// Obj.setIsLogin(2,4)
let contextValue ={
    isLogin : loginState,
     setIsLogin:(bool)=>setLoginState(bool),
     userId: userId
}


    return (
        <AuthContext.Provider value={contextValue }>
            {props.children}
        </AuthContext.Provider>
    )
}
export default LoginContext;