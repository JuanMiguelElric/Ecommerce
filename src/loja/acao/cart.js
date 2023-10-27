const Add = (cart, product)=>{
    return{
        type:'Add_carrinho',
        cart,
        product,
    }
}
const Add_item = (cart, product)=>{
    return{
        type:'Add_item',
        cart,
        product
    }
}
const Remove_item = (cart,product)=>{
    return{
        type:'Remove_item',
        cart,
        product
    }
}
const Delete_item = (cart, product)=>{
    return{
        type:'Delete_item',
        cart,
        product
    }
}
const ChangeCart = (localcart)=>{
    return{
        type:'Change_Cart',
        localcart
    }
}
export default{
    Add,
    Add_item,
    Remove_item,
    Delete_item,
    ChangeCart

}