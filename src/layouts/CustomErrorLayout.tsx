import React from 'react';
import MenuComponent from "../components/MenuComponent";
import styles from "./customErrorLayout.module.css";
const CustomErrorLayout = () => {
    return (
        <div className={styles.errorImg}>
            <h1 className={styles.red}>Упс! Сторінка 404</h1>
            <h2>Схоже, ми не можемо знайти потрібну Вам сторінку...</h2>
            <h2>Cпробуйте це:</h2>
            <MenuComponent/>
        </div>
    );
};

export default CustomErrorLayout;