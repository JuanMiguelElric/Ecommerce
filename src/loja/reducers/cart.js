import listadeProdutos from "./product";

const IniciodoEstado ={
    value:0,
    products:listadeProdutos,
    cart: []
}

export default function Cart(state = IniciodoEstado,action){
    switch(action.type){
        case 'Add_carrinho':
            if(state.value ===0){
                let item={
                    id:action.product.id,
                    name:action.product.nomeca,
                    price: action.product.price,
                    image: action.product.image,
                    quantity:1
                }
                state.cart.push(item);
            }else{
                let check= false;
                state.cart.map((item,key)=>{
                    if(item.id === action.product.id){
                        state.cart[key].quantity++;
                        check = true;
                    }
                });
                if(!check){
                    let item ={
                        id:action.product.id,
                        name:action.product.nomeca,
                        image: action.product.image,
                        quantity:1
                    }
                    state.cart.push(item);
                }
            }

            return{
                ...state,
                value:(state.value+1)
            }
            case 'Add_item':
                action.product.quantity++
                return{
                    ...state,
                    value:(action.cart.value +1)
                }
            case 'Remove_Item':
                if(action.cart.value <1){
                    action.product.quantity--;
                    return{
                        ...state,
                        value:(action.cart.value -1)
                    }
                } else{
                    return state;
                }
            case 'Delete_item':
                return{
                    ...state,
                    value:(action.cart.value - action.product.quantity),
                    cart: state.cart.filter(item=>{
                        return id !== action.product.id
                    })
                }
            case 'ChangeCart':
                return state = localcart;
                default:
                    return state;
    }
    return state;

}