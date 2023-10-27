import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FaShoppingCart } from 'react-icons/fa';
import "../../../App.css";
import logo from "../../../images/logorippoint.png";
import hamburguermenu from "../../../images/hamburguer.png";
import { FaSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Menu = (props) =>{
    const [menuVisivel,setMenuVisivel] = useState(false);
    const hamburguerToogle = () =>{
        setMenuVisivel(!menuVisivel);
    }
    return(
        <div >
            <nav className="navbar   fixed-top">
                <img src={logo} alt="logo rippoint" style={{width:'50px'}} />
                <ul className="nav text-white ">
                    <li className="nav-item d-none d-xl-flex d-flex d-lg-none " >
                        <Link className="text-decoration" to="/produtos">
                                produtos
                        </Link>

                    </li>
                    <li className="nav-item d-none d-xl-flex d-flex d-lg-none">
                        <Link className="text-decoration" to="/cadastro">
                           Cadastrar
                        
                        </Link>

                    </li>
                    <li>
                        <button className="btn btn-outline-dark d-none d-xl-flex ">
                            Entrar
                        </button>
                    </li>
                    <li className="nav-item  d-none d-xl-flex" style={{width:'100px'}}>
                        <FaShoppingCart />
                    </li>
                    <li className="nav-item d-none d-lg-none">
                        <button onClick={hamburguerToogle} style={{background:'none', border:'none'}}>
                            <img src={hamburguermenu} width={'30px'} alt="hamburguer menu" />

                        </button>
                        {menuVisivel && (
                            <div className="menu-barra">
                                 <button className="botaotogle" style={{backgroundColor:"none"}} onClick={hamburguerToogle} ><FaSquare style={{ color: 'white', fontSize: '30px' }} /></button>
                                <ul className="list-unstyled">
                                    <li>Entrar</li>
                                    <li>Cadastrar</li>
                                    <li>Produtos</li>
                                    <li>Suporte de atendimento ao cliente</li>
                                    <li>compras</li>
                                </ul>
                            

                            </div>
                        )}

                    </li>
                </ul>

            </nav>
            
        </div>
    );
}
export default Menu;