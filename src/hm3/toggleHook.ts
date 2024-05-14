
// 1. useToggle - custom React hook that allows a component to toggle a value between true and false

import {useState} from "react";

const useToggle = () =>{
    const [state, setState] = useState<boolean>()
    function toggleValue(){
        setState(!state)
    }
    return[state,toggleValue]
}