import styles from './searchbutton.module.css';
import SearchIcon from './search.svg';
import cn from 'classnames';

function SearchButton({disabled=false}) {
    return (
        <>
            <button className={cn(styles.search,{
                [styles.disabled]: disabled,
            })} >
                <img src={SearchIcon} alt="Search Icon" />
            </button>  
        </>
    )
}

export default SearchButton
