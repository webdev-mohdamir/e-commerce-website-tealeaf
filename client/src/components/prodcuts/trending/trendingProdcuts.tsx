import SingleProduct from "../single-product/singleProduct"
import styles from "./trendingProduct.module.css"

const TrendingProdcuts = () => {
  return (
    <section className={`${styles.container}`}>
        <div className="wrapper">
            <h2>Trending Products</h2>

            <div className={styles.products}>
                <SingleProduct />
            </div>
        </div>
    </section>
  )
}

export default TrendingProdcuts