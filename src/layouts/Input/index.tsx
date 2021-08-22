import React from 'react';
import styles from './input.module.css';

function Input({disabled=false}):JSX.Element {
    return (
        <>
            <input type="name" disabled={disabled} className={styles.input} placeholder='Введите название организации' /> 
        </>
    )
}

export default Input;
