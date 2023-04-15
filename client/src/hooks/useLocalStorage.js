import { useState } from "react";


export const useLocalStorage = (key, initialValue) => {
 const [state, setState] = useState(() => {
    const persistedStateStingyfied = localStorage.getItem(key)
if(persistedStateStingyfied) {
    const persistedState = JSON.parse(persistedStateStingyfied)

    return persistedState
}
 return initialValue;

 });

  const setLocalStorageMemory = (value) => {
        setState(value)

        localStorage.setItem(key, JSON.stringify(value))
  }

 return [
    state,
    setLocalStorageMemory
 ]

};