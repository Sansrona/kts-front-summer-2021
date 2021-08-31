import React from 'react';
import styles from './input.module.css';

type InputProps = {
    disabled?: boolean,
}

const Input:React.FC<InputProps> = ({disabled})=> {
    return (
            <input type="name" disabled={disabled} className={styles.input} placeholder='Введите название организации' /> 
        
    )
}

export default Input;
