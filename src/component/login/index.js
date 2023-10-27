import React, { useState } from "react";
import Menu from "../componentfullpages/menu";
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useauth";

const Login = () =>{
    const {signin} =useAuth();
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] =useState("");
    const [error, setError] =useState("");
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (!email || !senha) {
          setError("Preencha todos os campos");
          return;
        }
        
        const res = await signin(email, senha);
    
        if (res) {
          setError(res);
          return;
        }else{
            navigate("/dashboard")

        }
        
      };
    return(
        <div>
            <Menu />
            
            <div className="container"style={{display:'grid',placeItems:'center'}}>
                <div className="FormSignup">
                    <h1>Login</h1>
                    <div className="iconssign">
                        <small style={{textAlign:'center',color:'red'}}>Outras formas de cadastro</small>
                        <br />
                        <FaFacebook size={27} style={{marginLeft:'14px'}} color="#1877f2" />
                        <FaGoogle size={27} style={{marginLeft:'9px'}} color="#4285F4" />
                        <FaTwitter size={27} style={{marginLeft:'9px'}} color="#1DA1F2" />
                        <FaTiktok size={32} color="#FF2D55" />

                     </div>
                     <form onSubmit={handleLogin}>
                        <label>
                            <input type="email" value={email} onChange={(e) =>[setEmail(e.target.value), setError("")]} placeholder="digite seu email"/>
                        </label>
                        <label>
                            <input type="password" value={senha} onChange={(e) =>[setSenha(e.target.value),setError("")]} placeholder="Digite Sua senha"/>
                        </label>
                        <small>{error}</small>
                        <button className="btn btn-dark Button_center">Entrar</button>
                     </form>
                </div>
            </div>
           
            
            <br />
            <br />
            
        </div>
    )
}
export default Login;