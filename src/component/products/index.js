import React from "react";
import Menu from "../componentfullpages/menu";
import 'bootstrap/dist/css/bootstrap.css';
import camisa from "../../images/produtos/camisa.PNG";
import acessorio from "../../images/produtos/acessorios.PNG";
import bone from "../../images/produtos/bones.png";
import calca from "../../images/produtos/calça.png";
import camiseta from "../../images/produtos/camiseta.png";
import jaqueta from "../../images/produtos/jaquetas.png";

const Products =()=>{
    return(
        <div>
            <Menu />
            <br/>
            <br />
            <div  className="container container-produtos">
                <h2 style={{textAlign:'center'}}>
                    PRODUTOS
                </h2>
                <br />
                <br />
                <div className="row">
                    <div className="col-lg-2 mb-4 mr-3">
                        <div className="card" style={{width:'18rem'}}>
                            <img src={camisa} className="card-img-top" alt="camisaOG"/>
                            <div className="card-body">
                                <h5 className="card-title">Camisa Social</h5>
                                <br />
                                <button type="button" style={{marginLeft:'30%'}} class="btn btn-dark text-center">Ver mais</button>
                            </div>


                        </div>

                    </div>
                    <div className="col-lg-2 mb-4 mr-3">
                        <div className="card " style={{width:'18rem'}}>
                            <img src={acessorio} className="card-img-top" alt="acessórios"/>
                            <div className="card-body">
                                <h5 className="card-tittle">Acessórios</h5>
                                <br />
                                <button type="button" style={{marginLeft:'30%'}} className="btn btn-dark text-center">Ver mais</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2 mb-4 mr-3">
                        <div className="card" style={{width:'18rem'}}>
                            <img src={bone} className="card-img-top" alt="bonés"/>
                            <div className="card-body">
                                <h5 className="card-tittle">Boné</h5>
                                <br/>
                                <button type="button" style={{marginLeft:'30%'}} className="btn btn-dark text-center">Ver mais</button>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-2  mb-4 mr-3">
                        <div className="card" style={{width:'18rem'}}>
                            <img src={calca} className="card-img-top" alt="calças" />
                            <div className="card-body">
                                <h5 className="card-tittle">Calças</h5>
                                <br/>
                                <button type="button" style={{marginLeft:'30%'}} className="btn btn-dark text-center">Ver mais</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2  mb-4 mr-3">

                        <div className="card" style={{width:'18rem'}}>
                            <img src={camiseta} alt="camiseta" />
                            <div className="card-body">
                                <h5 className="card-tittle">Camiseta</h5>
                                <br />
                                <button type="button" style={{marginLeft:'30%'}} className="btn btn-dark text-center">Ver mais</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2  mb-4 mr-3">
                        <div className="card" style={{width:'18rem'}}>
                            <img src={jaqueta} alt="jaqueta" />
                            <div className="card-body">
                                <h5 className="card-tittle">Jaqueta</h5>
                                <br />
                                <button type="button" style={{marginLeft:'30%'}} className="btn btn-dark text-center">Ver mais</button>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Products;