import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../../../App.css";
import skatista from "../../../images/skatista.png"

const Segundocomponent =()=>{
    const [ativo,setAtivo]= useState(false);
    useEffect(()=>{
        const element = document.querySelector(".skatista");

        const handleScroll =()=>{
            const posicao = element.getBoundingClientRect().top;
            if(posicao < window.innerHeight && !ativo){
                setAtivo(true);
            };
        }    
            window.addEventListener("scroll",handleScroll);
            return()=>{
                window.removeEventListener("scroll",handleScroll)
            };
        
    },[ativo])
    return(
        <div className="container-fluid fundosegundocont row">
            <h1>O que nos diferência?</h1>
            <div className="col-md-6">
                <div className= {`skatista ${ativo ? "ativado" : ""}`} >
                    <p>Na Loja RIP Point, acreditamos que a moda é uma forma de expressão pessoal poderosa. Nossas prateleiras e araras estão repletas de peças que contam histórias, que ecoam a energia e a paixão da cultura alternativa. Cada item cuidadosamente selecionado é uma declaração de identidade, uma afirmação de individualidade e uma homenagem ao espírito destemido do rock 'n' roll, do skate e do Rip hop.</p>

                </div>
            </div>
            <div className="col-md-6 ">
                <img src={skatista} style={{marginTop:'-14%'}} className="img-fluid d-none d-xl-flex"   alt="skatista"/>

            </div>

        </div>
    )
}
export default Segundocomponent;