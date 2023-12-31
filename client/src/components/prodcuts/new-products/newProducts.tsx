import { useEffect, useState } from "react";
import SingleProduct from "../single-product/singleProduct"
import styles from "./newProducts.module.css"
import { SingleProductType } from "../../../types/product";
import { catogories, dummyProductData } from "../../../constants";

const NewProdcuts = () => {
    const [newProd, setNewProd] = useState<SingleProductType[] | null>(null);

    useEffect(()=>{
        const data = dummyProductData;        
        setNewProd(data);
    }, [])

    const handleShowData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const button = e.target as HTMLButtonElement;

      // Use a copy of the original data for filtering
      const originalData = dummyProductData;

      const filteredProd = originalData.filter(prod => {
        return prod.prod_type === button.innerText || button.id === "all";
      });

      setNewProd(filteredProd);
    };

  return (
    <>
    <section className={`${styles.container}`}>
        <div className="wrapper">
            <h2>New Products</h2>

            <div className={styles.prodCatagories}>
              <button className={styles.prodType} onClick={(e) =>  handleShowData(e)} id="all">
                All
              </button>
              {catogories.map((pType) => (
                  <button 
                    className={styles.prodType}
                    key={pType} 
                    onClick={(e) =>  handleShowData(e)}
                    id={pType}
                    >
                    {pType}
                  </button>
              ))}
            </div>

            <div className={styles.products}>
                {newProd && newProd.map(data => (
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
    </>
  )
}

export default NewProdcuts