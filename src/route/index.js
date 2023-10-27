import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../component/homepage";
import Products from "../component/products";
import Signuping from "../component/cadastro";
import Login from "../component/login";
import useAuth from "../hooks/useauth";
import Nichos from "../component/Telaprodutos";



function RouteApp() {
    
    const Private = ({Item}) =>{
        const {signed} = useAuth();
        return signed === true ? <Item /> : <Login />
    }
   

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/dashboard" element={<Private Item={Nichos} />} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/cadastro" element={<Signuping />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/produtos" element={<Products/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteApp;