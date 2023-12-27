import { useRef, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
const LoginSignup = () => {
    const [login, setLogin] = useState(true);
   
    const handelClick = () => {
        setLogin(!login);
       
    }
    return (           
            <div className="w-[80%] h-[60%] border mt-10 flex ml-28 grid-cols-3">               
                <div className="w-[60%] bg-blue-400">
                    <Login />
                    </div>              
                    <div className="w-[40%] bg-red-400">
                        <button type='button'
                            className="border-2 rounded-md"
                            onClick={handelClick}>
                            {" "}
                            {login ? "Signup" : "Login"}
                        </button>
                    </div>               
                  <div className="w-[60%] bg-blue-400">  
                    <Signup />
                    </div>
            </div>

    )
};
export default LoginSignup;