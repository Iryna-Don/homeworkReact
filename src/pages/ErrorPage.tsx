import React from 'react';
import styles from './errorPage.module.css';
import MenuComponent from "../components/MenuComponent";
const ErrorPage = () => {
    return (
        <div className={styles.errorImg}>
            <h1>На превеликий жаль ми не змогли знайти дану сторінку...</h1>
            <h2>Спробуйте це:</h2>
            <MenuComponent/>
        </div>
    );
};

export default ErrorPage;