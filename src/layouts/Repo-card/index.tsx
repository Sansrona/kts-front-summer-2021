import React from 'react'
import styles from './repocard.module.css';
import StarIcon from '../../assets/icons/star.svg';
import Avatar from './avatar.png';

type RepoCardProps={
    username:string
}

const RepoCard: React.FC<RepoCardProps> = ({username}) => {
    return (
        <div className={styles.repocard}>
            <img src={Avatar} alt="Avatar" className={styles.avatar}/>
            <div className={styles.cardtitle}>
                <p className={styles.title}>{username}</p>
                <p className={styles.username}>ktsstudio</p>
                <p className={styles.metainfo}>
                    <span className={styles.rating}>
                        <img src={StarIcon} alt="Star icon" />
                        123
                    </span>
                    <span>Updated 21 Jul</span>
                </p>
            </div>
        </div>
    )
}

export default RepoCard;
