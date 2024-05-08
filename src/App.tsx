import React, {useEffect} from 'react';
import './App.css';
import useHook from "./hm3/toggleHook/toogleHook";

const App = () => {

    let [value,toggleValue] = useHook(true)
    useEffect(() => {
        toggleValue();
        console.log(value)
    }, []);

    const handleToggle = ()=>{
        toggleValue()
    }

  return (
      <div>
        <button onClick={()=>{handleToggle}}>Toggle value</button>
      </div>
  );
};

export default App;


