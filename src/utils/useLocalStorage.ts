// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage
import {useEffect, useState} from "react";

const useLocalStorage = (keyInLocalStorage: string, init: any) => {
    const [value, setValue] = useState(init);
    localStorage.setItem(keyInLocalStorage, JSON.stringify(value));

    const setNewValueInLocalStorage = (variable: any) => {
        return setValue(variable)
    }


    return [value, setNewValueInLocalStorage];
}


export {useLocalStorage};


