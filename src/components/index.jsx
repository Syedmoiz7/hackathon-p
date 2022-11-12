import { useState } from "react";
import Login from "./login.jsx"


function Attendence() {

    const [isLogin, setIsLogin] = useState(false)

    return (
        <div>
            {
                (isLogin) ?
                    <div></div>
                    :
                    <Login/>
            }

        </div>
    )


}

export default Attendence;
