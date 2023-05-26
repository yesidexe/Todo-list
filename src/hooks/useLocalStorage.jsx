import React from "react";

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [status, setStatus] = React.useState('loading')

    React.useEffect(() => {    
        try {
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem)
                setItem(parsedItem)
            }   
            setStatus('success')         
        } catch(error) {
            console.log(error)
            setStatus('error')
        }
    },[])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [saveItem, item, status]
}