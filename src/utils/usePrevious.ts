// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

import {useRef, useEffect} from "react"

const usePrevious = (value: any) => {
    const prev = useRef(0);
    useEffect(() => {
        prev.current = value;
    }, [value]);
    return [prev.current];
}

export {usePrevious};
