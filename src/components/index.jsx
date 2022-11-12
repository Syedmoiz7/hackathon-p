import { useState } from "react";



function Attendence() {

    const [isLogin, setIsLogin] = useState(false)

    return (
        <div>
            {
                (isLogin) ?
                    <div></div>
                    :
                    <div className="signin">
                        <h1>Sign In</h1>
                        <form>
                            <label htmlFor="">Username</label>
                            <br />
                            <input type="text" placeholder="Enter your user name" />
                            <br />

                            <label htmlFor="">Password</label>
                            <br />
                            <input type="text" placeholder="Enter your password" />
                        </form>
                    </div>
            }

        </div>
    )


}

export default Attendence;
