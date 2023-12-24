import styles from "./singleProduct.module.css"

const SingleProduct = () => {
  return (
    <div className={styles.product_wrapper}>
        <div className={styles.product_thum}>
            <img src="products/item-1.webp" alt="" className={styles.thum_img}/>
            <span className={styles.tag}>Hot</span>
            <div className={styles.product_action}>
                <button className={styles.action_btn}>
                    <i className={`icon-basket ${styles.icon}`}></i>
                </button>
                <button className={styles.action_btn}>
                    <i className={`icon-heart ${styles.icon}`}></i>
                </button>
            </div>
        </div>

        <div className={styles.product_info}>
            <h3>
                <a href="#" className={styles.product_title}>Green 103we Tea.</a>
            </h3>
            <span className={styles.original_price}>$220</span>
            <span className={styles.sale_price}>$110</span>
        </div>
    </div>
  )
}

export default SingleProduct