import { useEffect, useState } from 'react'
import { CartTotals} from '../../types/cartTypes'
import styles from './cartBlock.module.css'
import { SingleProductType, productProps } from '../../types/product'
import { remove_item } from '../../lib/cart/add_to_cart'
import { useCart } from '../../context/cart/CartContext'

const CartBlock = ({isOpen}:productProps) => {

  const [subTotal, setSubTotal] = useState<number | null>(null)
  // const [data, setData] = useState<SingleProductType[] | null>(null)

  const {cartData, updateCartData} = useCart();

  useEffect(() => {
    
    if(cartData && cartData.length>0){
      
      const cartTotals= cartData.reduce(
        (acc: CartTotals, item: SingleProductType) => {
          acc.totalPrice += (item.prod_quantity || 1) * item.prod_sale;
          return acc;
        },
        {totalPrice: 0 }
      );
      
      // setData(cartData)
      setSubTotal(cartTotals.totalPrice)
    }
  }, [cartData])



  const handleRemoveItem = (id:string)=>{
    remove_item(id);
    updateCartData();
  }

  return (
    <div className={`${styles.container} ${!isOpen ? "" : styles.show}`}>
        {cartData && cartData.length >0  ? 
            (
            <div className={styles.cartItemsBox}>
              {cartData && cartData.map(data => (
                <div className={styles.cart_item} key={data.prod_id}>
                  <div className={styles.cart_item__img}>
                    <a href={data.prod_url}>
                      <img src={`products/${data.prod_img_url}`} alt={data.prod_name} />
                    </a>
                  </div>
                  <div className={styles.cart_item__info}>
                    <div className={styles.item_name}>
                      <a href={data.prod_url}>
                        {data.prod_name}
                      </a>
                    </div>
                    <div className={styles.item_quantity}>{data.prod_quantity} x</div>
                    <a href={data.prod_url}>
                      <div className={styles.item_price}>$ {data.prod_sale * (data.prod_quantity || 1)}</div>
                    </a>
                  </div>
                  <div className={styles.item_delete} id={data.prod_id}
                    onClick={()=> handleRemoveItem(data.prod_id)}
                  >
                    <i className='icon-trash'></i>
                  </div>
                </div>
              ))}

              <div className={styles.cart_footer}>
                <div className={styles.cartitemTotal}>
                  <span className="subtotal_txt">Sub Total:</span>
                  <span className={styles.subtotal_price}>$ {subTotal}</span>
                </div>

                <div className={styles.cartMainBtns}>
                  <a href='#' role='button' className={styles.btn}>View Cart</a>
                  <button className={styles.btn}>Checkout</button>
                </div>
              </div>
            </div>
            ) 
            : ("No Item Added") }
    </div>
  )
}

export default CartBlock