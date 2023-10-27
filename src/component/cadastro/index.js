import React,{useState} from "react";
import useAuth from "../../hooks/useauth";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";


const Signuping = () =>{
  const [email,setEmail] =useState("");
  const [emailconf, setEmailConf]= useState("");
  const [senha, setSenha] = useState("");
  const [error,setError] = useState("");
  const {signup} =useAuth();
  const navigate = useNavigate();


  const enviofor = (event) => {
    event.preventDefault();
    if(!email | !emailconf | !senha){
      setError("Preencha todos os campos");
      return;
    }else if(email !== emailconf){
      setError("os email não são iguais");
      return;
    }else if(emailconf === ""){
      setError("Preencha o email de confirmação");
      return;
    }
    const res = signup(email,senha);
    if (res) {
      setError(res);
      return;
    } else{
      navigate("/login")

    }


  };
  
    return(
        <div className="container"style={{display:'grid',placeItems:'center'}}>
            <div className="FormSignup">
                <h1>Cadastro</h1>
                <div className="iconssign">
                    <small style={{textAlign:'center',color:'red'}}>Outras formas de cadastro</small>
                    <br />
                    <FaFacebook size={27} style={{marginLeft:'14px'}} color="#1877f2" />
                    <FaGoogle size={27} style={{marginLeft:'9px'}} color="#4285F4" />
                    <FaTwitter size={27} style={{marginLeft:'9px'}} color="#1DA1F2" />
                    <FaTiktok size={32} color="#FF2D55" />

                </div>
                <form onSubmit={enviofor}>
                      <label>
                   
                        <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder=" Digite o seu nome" />
                      </label>
                      <br />
                      <label>
                       
                        <input type="email" value={emailconf} onChange={(e) => setEmailConf(e.target.value)} placeholder=" Digite o seu email" />
                      </label>

                      <br/>
                      <label>
                     
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha"/>
                      </label>
                      <p> {error}</p>
                      <button className="btn btn-dark Button_center">Cadastrar-se</button>
                      <p > já possui uma conta? <Link to="/login">Entre Aqui</Link></p>
                  </form>
            </div>
        </div>
    )

}
export default Signuping;