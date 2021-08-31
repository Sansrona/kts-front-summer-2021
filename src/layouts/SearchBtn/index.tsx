import styles from './searchbutton.module.css';
import SearchIcon from './search.svg';
import cn from 'classnames';

type SearchButtonProps ={ 
    disabled?:boolean;
}

const SearchButton:React.FC<SearchButtonProps> = ({disabled=false})=> {
    return (
            <button className={cn(styles.search)} disabled={disabled} >
                <img src={SearchIcon} alt="Search Icon" />
            </button>  
    )
}

export default SearchButton
