import styles from './searchbar.module.css';

type searchbarProps = {
    isOpen: boolean
};

const Searchbar = ({isOpen} : searchbarProps) => {
  return (
        <div className={`${styles.container} ${isOpen ? styles.show: "hidden"}`}>
            <form action="/" method="get">
                <input type="text" />
                <button type='submit'>
                    <i className='icon-magnifier'></i>
                </button>
            </form>
        </div>
  )
}

export default Searchbar