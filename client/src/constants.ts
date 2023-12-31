import { SingleProductType } from "./types/product";


export const navLinks = [
    {
        link_name: "Home",
        href:"#",
        isDropDown:false
    },
    {
        link_name: "About",
        href:"#",
        isDropDown:false
    },
    {
        link_name: "Contact Us",
        href:"#",
        isDropDown:false
    },
]

export const dummyCartData = [
  {
    item_id:"1",
    item_url:"#",
    item_img_url:"item-1.webp",
    item_name:"Popular Drinks Tea",
    item_quantity:1,
    iten_price:130
  },
  {
    item_id:"2",
    item_url:"#",
    item_img_url:"item-2.webp",
    item_name:"Popular Drinks Tea 2",
    item_quantity:2,
    iten_price:130
  },
  {
    item_id:"3",
    item_url:"#",
    item_img_url:"item-3.webp",
    item_name:"Popular Drinks Tea 3",
    item_quantity:8,
    iten_price:130
  }
]


export const dummyProductData: SingleProductType[] = [
  {
    prod_id: "1",
    prod_name: "Green 103we Tea.",
    prod_price: 135.00,
    prod_sale: 100.00,
    prod_tag: "Hot",
    prod_url: "#",
    prod_img_url: "item-1.webp",
    prod_type: "Black Coffee",
  },
  {
    prod_id: "2",
    prod_name: "Dover Gray Tea Cover",
    prod_price: 144.00,
    prod_sale: 104.00,
    prod_tag: "-35%",
    prod_url: "#",
    prod_img_url: "item-2.webp",
    prod_type: "Black Coffee",
  },
  {
    prod_id: "3",
    prod_name: "Fruit Tea Green Caven",
    prod_price: 145.00,
    prod_sale: 99.00,
    prod_tag: "New",
    prod_url: "#",
    prod_img_url: "item-3.webp",
    prod_type: "Brown Tea",
  },
  {
    prod_id: "4",
    prod_name: "Popular Drinks Tea",
    prod_price: 99.00,
    prod_sale: 15.00,
    prod_tag: null,
    prod_url: "#",
    prod_img_url: "item-4.webp",
    prod_type: "Green Tea",
  },
  {
    prod_id: "5",
    prod_name: "Green 103we Tea.",
    prod_price: 135.00,
    prod_sale: 100.00,
    prod_tag: "Hot",
    prod_url: "#",
    prod_img_url: "item-5.webp",
    prod_type: "Black Coffee",
  },
  {
    prod_id: "6",
    prod_name: "Dover Gray Tea Cover",
    prod_price: 144.00,
    prod_sale: 104.00,
    prod_tag: "-35%",
    prod_url: "#",
    prod_img_url: "item-6.webp",
    prod_type: "Black Coffee",
  },
  {
    prod_id: "7",
    prod_name: "Fruit Tea Green Caven",
    prod_price: 145.00,
    prod_sale: 99.00,
    prod_tag: "New",
    prod_url: "#",
    prod_img_url: "item-7.webp",
    prod_type: "Brown Tea",
  },
  {
    prod_id: "8",
    prod_name: "Popular Drinks Tea",
    prod_price: 99.00,
    prod_sale: 15.00,
    prod_tag: null,
    prod_url: "#",
    prod_img_url: "item-8.webp",
    prod_type: "Green Tea",
  },
];


export const catogories = ["Black Coffee", "Brown Tea", "Green Tea"]