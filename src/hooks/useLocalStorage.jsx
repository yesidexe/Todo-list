import React from "react";

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [status, setStatus] = React.useState('idle')

    React.useEffect(() => {    
        setStatus('loading')    
        setTimeout(() => {            
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                    setStatus('idle')
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                    setStatus('success')
                }                
            } catch (error) {
                console.log(error)
                setStatus('error')
            }
        }, 1000)
    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [saveItem, item, status]
}