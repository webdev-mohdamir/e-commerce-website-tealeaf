import { useCart } from "../../../context/cart/CartContext";
import { addToCart } from "../../../lib/cart/add_to_cart"
import { SingleProductType } from "../../../types/product"
import styles from "./singleProduct.module.css"

const SingleProduct = ({prod_id,prod_name,prod_price,prod_sale,prod_tag,prod_url,prod_img_url}:SingleProductType) => {

  const { updateCartData } = useCart();

  const handleAddtoCart = (product: SingleProductType) => {
    addToCart(product);
    updateCartData(); // Call updateCartData after adding to the cart

    alert("Product is added to cart")
  };

  return (
    <div className={styles.product_wrapper} key={prod_id}>
        <div className={styles.product_thum}>
            <img src={`products/${prod_img_url}`} alt={prod_name} className={styles.thum_img}/>
            {prod_tag && (<span className={styles.tag}>{prod_tag}</span>)}
            <div className={styles.product_action}>
                <button
                    className={styles.action_btn}
                    onClick={()=>handleAddtoCart({prod_id,prod_name,prod_price,prod_sale,prod_tag,prod_url,prod_img_url})}
                >
                    <i className={`icon-basket ${styles.icon}`}></i>
                </button>
                <button className={styles.action_btn}>
                    <i className={`icon-heart ${styles.icon}`}></i>
                </button>
            </div>
        </div>

        <div className={styles.product_info}>
            <h3>
                <a href={prod_url} className={styles.product_title}>{prod_name}</a>
            </h3>
            <span className={styles.original_price}>${prod_price}</span>
            <span className={styles.sale_price}>${prod_sale}</span>
        </div>
    </div>
  )
}

export default SingleProduct