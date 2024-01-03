import {useRef, useState } from "react";
import "../../assets/css/simple-line-icons.css";
import styles from "./navbar.module.css";
import {navLinks } from "../../constants";
import Searchbar from "../searchbar/Searchbar";
import { DescrFunction } from "../../types/functionalTypes";
import CartBlock from "../cart-block/cartBlock";
import { useCart } from "../../context/cart/CartContext";



export const Navbar = () => {
 
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const mobileMenuBtn = useRef<HTMLDivElement | null>(null);

    const handleBoolean = (func:DescrFunction, value : boolean)=>{

        !searchOpen 
        ? (cartOpen ? setCartOpen(false) : (menuOpen && setMenuOpen(false)))
        : (!cartOpen && searchOpen ? setSearchOpen(false) : (menuOpen && setMenuOpen(false)));

        return func(value ? false : true)
        
    }

    const { cartData } = useCart();

    return (
    // Navbar 
    <nav>
        <div className={`wrapper ${styles.navbar}`}>
            {/* Logo Container */}
            <div className="logo-container">
                <img src="/logo.webp" alt="" width={118} height={75}/>
            </div>

            {/* Main Menu */}
            <div className={styles.nav_menu_items}>
                <ul className={styles.main_menu_links}>
                    {navLinks.map(item => (
                        <li className={styles.main_menu_link} key={item.link_name}>
                            <a href={item.href}>{item.link_name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Secondary menu */}
            <div className={styles.secondary_menu}>
                
                {/* Search Bar */}
                <div className={styles.search_container}
                    onClick={() => handleBoolean(setSearchOpen, searchOpen)}
                >
                    <i className="icon-magnifier"></i>
                </div>
                
                {/* Cart Bag */}
                <div
                    className={styles.cart_container}
                    >
                    <div
                        className={styles.bag_container}
                        onClick={() => handleBoolean(setCartOpen,   cartOpen)}
                    >
                        <i className="icon-handbag"></i>
                        <div className={styles.cart_count}>
                            {cartData ? cartData.length : 0}
                        </div>
                    </div>

                    {/* Cart Block */}
                    <CartBlock isOpen={cartOpen}/>
                </div>
                
                {/* User */}
                <div className={styles.user_container}>
                    <a href="#">
                        <i className="icon-user"></i>
                        Login
                    </a>
                </div>

            </div>
            
            {/* Search Bar */}
            <Searchbar isOpen={searchOpen}/>

            {/* Mobile Menu and toggle bar */}
            <div className={styles.mobile_menu}>
                <span>menu</span>
                <div className="toggle_menu"
                    ref={mobileMenuBtn}
                    onClick={()=>handleBoolean(setMenuOpen, menuOpen)}
                >
                    <i className="icon-menu"></i>
                </div>

                {/* Mobile menu */}
                <div className={styles.mobile_menu_links}>
                    <ul className={menuOpen ? "isOpen" : styles.hidden}>
                        {navLinks.map(item => (
                            <li className={styles.main_menu_link} key={item.link_name}>
                                <a href={item.href}>{item.link_name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    </nav>
  )
}
