
import React, {useEffect, useRef, useState} from 'react';
import {useToggle} from "./utils/useToggle";
import {usePrevious} from "./utils/usePrevious";
import {useLocalStorage} from "./utils/useLocalStorage";

const App = () => {
// =========================================useToggle=============================================

    const [value, toggle] = useToggle(false);


// =========================================usePrevious=============================================

    let arrFruit: string[] = ['banana', 'orange', 'cherry', 'apple', 'pear', 'plum'];
    // let arrNumbers: number[] = [1, 13, 23, 58, 111];

    let [value1, setValue1] = useState<any>(arrFruit[0]);
    const prev = usePrevious(value1);
    let index = useRef<number>(0);
    const changeValue = (arr: any[]) => {
        index.current < arr.length - 1 ? ++index.current : index.current = 0;
        setValue1(arr[index.current])
    }


// ===========================================useStorage===========================================

    let userObj = {
        userName: 'Ivan',
        userSurname: 'Ivanov',
    }
    const [value2, setNewValueInLocalStorage] = useLocalStorage('data', arrFruit);
    const [value3, setNewValueInLocalStorage1] = useLocalStorage('data_1', 12);

    useEffect(() =>
        setNewValueInLocalStorage(userObj), []
    );
    useEffect(() =>
        setNewValueInLocalStorage1(67), []
    );



    return (
        <div>
            {/*==================================================useToggle===========================================================*/}
            <button onClick={toggle}>Click me</button>
            <br/>
            {value && (<>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPnWmsyR5gI6moXqxQt_-1oajBWZumCVxOA&s'}
                    alt={'fox'}/>
            </>)}
            <br/>
            {/*==================================================usePrevious===========================================================*/}
            <button>Previous value {prev}</button>
            <button onClick={() => {
                changeValue(arrFruit)
            }}>Current value {value1}</button>
            {/*==================================================useStorage===========================================================*/}
            <br/>
            {value3}
        </div>
    )
}
export default App;