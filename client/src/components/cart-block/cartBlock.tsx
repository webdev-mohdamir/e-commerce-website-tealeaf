import styles from './cartBlock.module.css'

type cartItemType = {
    item_id:string;
    item_url:string;
    item_img_url:string;
    item_name:string;
    item_quantity:number;
    iten_price:number;
  }

type cartProps = {
  isOpen: boolean;
  data: cartItemType[] 
};

const CartBlock = ({isOpen, data}:cartProps) => {
  return (
    <div className={`${styles.container} ${!isOpen ? "" : styles.show}`}>
        <div className={styles.cartItemsBox}>
          {data && data.map(data => (
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
                <div className={styles.item_price}>$ {data.iten_price * data.item_quantity}</div>
              </div>
              <div className={styles.item_delete} id={data.item_id}>
                <i className='icon-trash'></i>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default CartBlock