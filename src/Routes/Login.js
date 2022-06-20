import React, {useEffect, useState} from "react"
import { Link, useNavigate   } from "react-router-dom";
import { signInWithGoogle } from '../Models/firebase'

export default function Login({addUser, loginUser, users}){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        if (users["isLogin"]) navigate('/home');
    });

    const login = (userName, password) => {
        console.log("Login");
        
        const filter = users.filter((user)=>{
            return user["email"] === userName 
                && user["password"] === password;
        })

        if (filter.length >= 1){
            loginUser();
        }
        else{
            alert("Don't find your account")
        }

        //navigate('/home');
    }

    const add = (userName, password) => {
        console.log("Adding");

        let id = users["data"].reduce((pre, current)=>{
            return pre["id"] > current["id"] ? pre["id"] : current["id"];
        }, 0) + 1;


        addUser({"id": id, "name": "Admin"+id, "password": password ,"email": userName, "employee":[]});

        console.log(users)

        
    }

    const loginWithGoogle = async () =>{
        const user = await signInWithGoogle();

        if (user == null) {
            alert("Don't find your account");
            return;
        }
        
        console.log(user)

        let id = users["data"].reduce((pre, current)=>{
            return pre["id"] > current["id"] ? pre["id"] : current["id"];
        }, 0) + 1;


        addUser({"id": id, "name": user.displayName, "password": "" ,"email": user.email, "employee":[]});
    
        //navigate('/home');
    }

    return (
       <div>
           <div> 
               <input type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}>
                </input> 
            </div>

            <div> 
               <input type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                </input> 
            </div>

            <div> 
            <button type="button" onClick={()=> {login(userName, password);}}> Login</button>
            </div>

            <div> 
            <button type="button" onClick={()=> {add(userName, password);}}> Add User</button>
            </div>

            <div> 
            <button type="button" onClick={()=> {loginWithGoogle();}}> Login with Google</button>
            </div>

            <div> 
                <ul>
                    {
                        users["data"].map((user, index)=>{
                            return <li key={index}> {JSON.stringify(user)} </li>;
                        })
                    }
                </ul>
            </div>
       </div>
    );
}