import { searchbarProps } from '../../types/normalTypes';
import styles from './searchbar.module.css';

const Searchbar = ({isOpen} : searchbarProps) => {
  return (
        <div className={`${styles.container} ${isOpen ? styles.show: "hidden"}`}>
            <form action="/" method="get">
                <input type="text" placeholder='Search Here'/>
                <button type='submit'>
                    <i className='icon-magnifier'></i>
                </button>
            </form>
        </div>
  )
}

export default Searchbar