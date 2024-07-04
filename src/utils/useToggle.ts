// 1. useToggle - custom React hook that allows a component to toggle a value between true and false

import {useState} from "react";

const useToggle = (initialValue:boolean):[boolean, ()=>void]=>{
    const [value, setValue] = useState<boolean>(initialValue);
    const toggle = ():void => {
        setValue(!value)
    };
return [value, toggle]
}
export {useToggle};