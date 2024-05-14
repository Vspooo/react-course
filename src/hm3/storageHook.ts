// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage
import {useEffect, useRef, useState} from "react";

const useStorage = (key:string, localStorageObject:object, defaultValue:any) =>{
    const [value, setValue] = useState(() => {
        let jsonValue = localStorage.getItem(key)
        if (jsonValue !== null) return JSON.parse(jsonValue)
        if (typeof defaultValue == "function"){
            defaultValue()
        } else{
            return defaultValue
        }
    })

    useEffect(()=>{
        if (value === undefined) return localStorage.removeItem(key)
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value,localStorageObject])

  return[value, setValue]
}
