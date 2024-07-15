// Потрібно на jsonplaceholder відправити об'єкт post
// відповідно, для цього вам потрібно його створити. Створення об'єкту повинно відбуватись
// за допомоги форми з useForm та валідацією.
// Якщо ви не пам'ятаєте як відправляти дані на jsonplaceholder подивіться його документації

import React from 'react';
import './App.css';
import FormComponent from "./Components/FormComponent";

const App = () => {
    return (
        <div>
            <FormComponent/>
        </div>
    );
}

export default App;