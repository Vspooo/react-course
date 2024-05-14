// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

import {useRef} from "react";

const usePrevious = (value:any) =>{
    const currentValue =  useRef(value)
    const previousValue = useRef()
    if (currentValue.current !== value){
        previousValue.current = currentValue.current
    }
    return previousValue.current
}