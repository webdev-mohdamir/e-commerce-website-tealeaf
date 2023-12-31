import { useEffect, useState } from "react";
import SingleProduct from "../single-product/singleProduct"
import styles from "./trendingProduct.module.css"
import { SingleProductType } from "../../../types/product";
import { dummyProductData } from "../../../constants";

const TrendingProdcuts = () => {
    const [trendingProd, setTrendingProd] = useState<SingleProductType[] | null>(null);

    useEffect(()=>{
        const data = dummyProductData;        
        setTrendingProd(data);
    }, [])

  return (
    <section className={`${styles.container}`}>
        <div className="wrapper">
            <h2>Trending Products</h2>

            <div className={styles.products}>
                {trendingProd && trendingProd.map(data => (
                  <SingleProduct 
                    key={data.prod_id}
                    prod_id ={data.prod_id}
                    prod_name ={data.prod_name} 
                    prod_price ={data.prod_price}
                    prod_sale ={data.prod_sale} 
                    prod_tag ={data.prod_tag} 
                    prod_url ={data.prod_url} 
                    prod_img_url ={data.prod_img_url}
                  />
                ))}
            </div>
        </div>
    </section>
  )
}

export default TrendingProdcuts