import { useEffect, useState } from 'react'
import { CartTotals, cartItemType, cartProps } from '../../types/cartTypes'
import styles from './cartBlock.module.css'

const CartBlock = ({isOpen, data}:cartProps) => {

  const [subTotal, setSubTotal] = useState<number | null>(null)
  const [cartData, setCartData] = useState<cartItemType[] | null>(null)

  useEffect(() => {
    if(data && data.length>0){
      
      const cartTotals= data.reduce(
        (acc: CartTotals, item: cartItemType) => {
          acc.totalPrice += item.item_quantity * item.iten_price;
          return acc;
        },
        {totalPrice: 0 }
      );
      
      setCartData(data)
      setSubTotal(cartTotals.totalPrice)
    }
  }, [data])

  return (
    <div className={`${styles.container} ${!isOpen ? "" : styles.show}`}>
        {cartData && cartData.length >0  ? 
            (<div className={styles.cartItemsBox}>
              {cartData && cartData.map(data => (
                <div className={styles.cart_item} key={data.item_id}>
                  <div className={styles.cart_item__img}>
                    <a href={data.item_url}>
                      <img src={`products/${data.item_img_url}`} alt={data.item_name} />
                    </a>
                  </div>
                  <div className={styles.cart_item__info}>
                    <div className={styles.item_name}>
                      <a href={data.item_url}>
                        {data.item_name}
                      </a>
                    </div>
                    <div className={styles.item_quantity}>{data.item_quantity} x</div>
                    <a href={data.item_url}>
                      <div className={styles.item_price}>$ {data.iten_price * data.item_quantity}</div>
                    </a>
                  </div>
                  <div className={styles.item_delete} id={data.item_id}>
                    <i className='icon-trash'></i>
                  </div>
                </div>
              ))}

              <div className={styles.cartitemTotal}>
                <span className="subtotal_txt">Sub Total:</span>
                <span className={styles.subtotal_price}>$ {subTotal}</span>
              </div>

              <div className={styles.cartMainBtns}>
                <a href='#' role='button' className={styles.btn}>View Cart</a>
                <button className={styles.btn}>Checkout</button>
              </div>
            </div>) : ("No Item Added") }
    </div>
  )
}

export default CartBlock