
import { useState } from "react";


const Login (props) => {
    const [firstName, setFirstName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            firstName,
            username,
            password,
            email
        }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>First Name:
                <input 
                    type="text" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                />
            </label>
            <label>
            Email:
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            </label>
            <label>
                Username:
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </label>
            <label>
                Password:
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}}

export default Login;