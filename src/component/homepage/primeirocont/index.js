import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logocentral from "../../../images/logwilson.png"

const Primeirocont = () =>{
    return(
        <div className="container" >
            
            <img src={logocentral} className="img-fluid" width={"900px"} alt="logo rip-point" />
            <div className="w-100" style={{width:'50%', marginTop:'-30px'}}>
                <p style={{color:'white'}}>Somos mais do que uma simples loja de roupas masculinas; somos o destino definitivo para homens que têm paixão pela moda com atitude. Se você é apaixonado por rock 'n' roll e quer incorporar esse estilo lendário ao seu guarda-roupa, você está no lugar certo.</p>
                <button className="btn btn-outline-light  " >Comprar</button>
                
            </div>

        </div>
    )
}
export default Primeirocont;