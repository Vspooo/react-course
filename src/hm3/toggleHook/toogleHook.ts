// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
import {useEffect, useRef, useState} from "react";

const useToggle = () =>{
    const [state, setState] = useState<boolean>()
    function toggleValue(){
        setState(!state)
    }
    return[state,toggleValue]
}


// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

const usePrevious = (value:any) =>{
    const currentValue =  useRef(value)
    const previousValue = useRef()
    if (currentValue.current !== value){
        previousValue.current = currentValue.current
    }
    return previousValue.current
}

// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage

const useStorage = (key,value,defaultValue) =>{
    const [value, setValue] = useState(()=>{
        let keyValue = localStorage.getItem(key)
        if (keyValue !== null) return JSON.parse(keyValue)

        if (defaultValue === 'function'){
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(()=>{
        if (value === undefined) return localStorage.removeItem(key)
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value,localStorage])

     return[value,setValue]
}

useStorage("value","hHsadsas",window.localStorage)