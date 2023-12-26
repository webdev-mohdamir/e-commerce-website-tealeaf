export type CartTotals = {
  totalPrice: number;
};

export type cartItemType = {
    item_id:string;
    item_url:string;
    item_img_url:string;
    item_name:string;
    item_quantity:number;
    iten_price:number;
  }

export type cartProps = {
  isOpen: boolean;
  data: cartItemType[] | null 
};