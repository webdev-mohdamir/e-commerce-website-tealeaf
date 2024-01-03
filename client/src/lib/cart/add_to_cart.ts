import { SingleProductType } from "../../types/product";

export const getCart = ()=>{
    
    const cartData = localStorage.getItem('cart') ?? '[]';
    
    return JSON.parse(cartData)
    
}

export const addToCart = (product: SingleProductType) => {
    const existingCart: SingleProductType[] = getCart() as SingleProductType[];

    const cartData = {
        prod_id: product.prod_id,
        prod_name: product.prod_name,
        prod_img_url: product.prod_img_url,
        prod_sale: product.prod_sale,
        prod_tag: product.prod_tag,
        prod_quantity: 1,
        prod_price: product.prod_price,
        prod_url: product.prod_url,
    };

    const existingProductIndex = existingCart.findIndex((prod) => cartData.prod_id === prod.prod_id);

    if (existingProductIndex !== -1) {
        existingCart[existingProductIndex].prod_quantity = (existingCart[existingProductIndex].prod_quantity || 0) + 1;
    } else {
        existingCart.push(cartData);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

    console.log(existingCart);
};

export const remove_item = (prod_id:string)=>{
        
    const cartData = localStorage.getItem('cart') ?? '[]';

    const cartArray = JSON.parse(cartData);

    const updatedStorage = cartArray.filter((item: SingleProductType) => item.prod_id !== prod_id);

    localStorage.setItem('cart', JSON.stringify(updatedStorage));
}