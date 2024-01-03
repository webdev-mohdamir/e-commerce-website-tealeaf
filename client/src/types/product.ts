export type ProductCatagory = "Black Coffee" | "Brown Tea" | "Green Tea";

export type SingleProductType = {
    prod_id : string;
    prod_name : string,
    prod_price : number,
    prod_sale : number,
    prod_tag : string | null,
    prod_url : string,
    prod_img_url : string,
    prod_quantity?: number,
    prod_type? : ProductCatagory
}


export type productProps = {
  isOpen: boolean;
  // data: SingleProductType[] | null 
};