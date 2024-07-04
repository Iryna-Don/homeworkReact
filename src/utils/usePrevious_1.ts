// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

import {useRef} from "react"

const usePrevious_1 = (init: any) => {
    const current = useRef(init);
    const previous = useRef();
    if (current.current !== init) {
        previous.current = current.current;
        current.current = init;
    }

    return [previous.current, current.current]
}

export {usePrevious_1};
