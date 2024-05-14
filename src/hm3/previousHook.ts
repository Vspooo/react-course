// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

import {useRef} from "react";

const usePrevious = <T, >(value:T): T|undefined =>{
    const currentValue =  useRef<T>(value)
    const previousValue = useRef<T|undefined>()
    if (currentValue.current !== value){
        previousValue.current = currentValue.current
    }
    return previousValue.current
}