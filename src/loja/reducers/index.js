import {combineReducers} from 'redux';

// importar lista de produtos
import products from '../reducers/products';

// importar o carrinho de compras

export default combineReducers({
    products,
})