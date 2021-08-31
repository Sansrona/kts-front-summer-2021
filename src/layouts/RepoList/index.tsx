import Input from '../Input';
import RepoCard from '../Repo-card';
import SearchButton from '../SearchBtn';
import styles from './Repolist.module.css';

function RepoList() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.search}>
                <Input />
                <SearchButton />
            </div>
            <div className={styles.list}>
                {Array(6).fill(<RepoCard  username='kts-school-frontendkts-school-frontendkts-school-frontendkts-school-frontend' />)}
            </div>
        </div>
    )
}

export default RepoList
