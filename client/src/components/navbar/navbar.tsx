import { useRef, useState } from "react";
import "../../assets/css/simple-line-icons.css";
import styles from "./navbar.module.css";
import { navLinks } from "../../constants";
import Searchbar from "../searchbar/Searchbar";

export const Navbar = () => {
 
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(true);
    const mobileMenuBtn = useRef<HTMLDivElement | null>(null);

    const handlMenuClick = ()=>{
        setMenuOpen(menuOpen ? false : true); 
    }

    const handleSeachClick = ()=>{
        setSearchOpen(searchOpen ? false : true);        
    }

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
                    onClick={handleSeachClick}
                >
                    <i className="icon-magnifier"></i>
                </div>
                
                {/* Cart Bag */}
                <div className={styles.bag_container}>
                    <i className="icon-handbag"></i>
                    <div className={styles.cart_count}>
                        2
                    </div>
                </div>
                
                {/* User */}
                <div className={styles.user_container}>
                    <a href="#">
                        <i className="icon-user"></i>
                        Login
                    </a>
                </div>

            </div>
            
            <Searchbar isOpen={searchOpen}/>

            {/* Mobile Menu and toggle bar */}
            <div className={styles.mobile_menu}>
                <span>menu</span>
                <div className="toggle_menu"
                    ref={mobileMenuBtn}
                    onClick={handlMenuClick}
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
