import { Jwt } from "../../store/models/auth";

export function isAuth ():boolean | Jwt {
    const jwt = localStorage.getItem('Jwt') || JSON.stringify({
        user: {
            name: '威震天',
            role: 1,
            email:'4985666@qq.com'
        }
        
    });
    if (jwt) {
        return JSON.parse(jwt);
    } else {
        return false
    }
}