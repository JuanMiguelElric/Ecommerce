import React, {useState, useEffect} from "react";
import "../../../App.css";
import 'bootstrap/dist/css/bootstrap.css';

const Terceirocomponent = () =>{
    const [ativo, SetAtivo]=useState(false);
    useEffect(()=>{
        const elementar = document.querySelector(".textoterceirocompo");
        const Movimentomouse = ()=>{
            const position = elementar.getBoundingClientRect().top;
            if(position < window.innerHeight && !ativo){
                SetAtivo(true)

            }
        }
        window.addEventListener("scroll",Movimentomouse);
        return () =>{
            window.removeEventListener("scroll",Movimentomouse)
        };

    },[ativo])
    return(
        <div className="contaienr-fluid fundoterceiracont row">
            <div className="col-md-12">
                <h1>O que você pode esperar?</h1>
                <br />
                <br />

            </div>
            <div className= {`textoterceirocompo ${ativo ? "ativei" : ""}`}>
                <p>Coleção Exclusiva: Nossa equipe está sempre à procura das últimas tendências e das marcas mais inovadoras. Trabalhamos com cuidado para trazer a vocês uma coleção única e exclusiva, que é tão diversa quanto inspiradora.</p>
                <p>Atendimento ao Cliente Excepcional: Estamos aqui para ajudar. Nossa equipe apaixonada e experiente está pronta para orientá-los na escolha das peças perfeitas para o seu estilo.</p>
                <p>Compromisso com a Qualidade: Garantimos a qualidade de cada item em nossa loja. Cada peça foi escolhida pensando na durabilidade e na estética.</p>
                <p>Comunidade RIP: A Loja RIP Point é mais do que apenas uma loja; é uma comunidade de pessoas apaixonadas por moda alternativa. Siga-nos nas redes sociais para se conectar com outros entusiastas e ficar por dentro das últimas novidades.</p>

            </div>

        </div>
    )
}
export default Terceirocomponent;