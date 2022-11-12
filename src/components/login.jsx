import { useState } from "react";


function Login() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <div className="signin">
                <h1>Sign In</h1>
                <form>
                    <label htmlFor="">Username</label>
                    <br />
                    <input type="text" placeholder="Enter your user name"
                        onChange={(e) => { setUserName(e.target.value) }} />
                    <br />

                    <label htmlFor="">Password</label>
                    <br />
                    <input type="text" placeholder="Enter your password"
                        onChange={(e) => { setPassword(e.target.value) }} />

                      <button type="submit">Login</button>
                </form>
            </div>


        </div>
    )


}

export default Login;