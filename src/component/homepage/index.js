import React from "react";
import Menu from "../componentfullpages/menu";
import Primeirocont from "./primeirocont";
import Segundocomponent from "./segundocont";
import Terceirocomponent from "./terceiracont";
import QuartoComponent from "./quartacont";


const Home = () =>{
    return(
        <div>
            <Menu />
            <main>
                <br />
                <br />
                <Primeirocont />
                <br />
                <Segundocomponent />
                <br />
                <Terceirocomponent />
                <br/>
                <QuartoComponent />

            </main>
        </div>
    )
}
export default Home;