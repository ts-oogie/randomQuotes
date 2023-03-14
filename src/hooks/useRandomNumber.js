import {useState, useEffect} from 'react'

const useRandomNumber = (num) => { 

    const [number, setNumber] = useState(0)

    useEffect(()=>{
        alert("used")
        if(num == null){
            setNumber(0)
        }
        else{
            setNumber(num)
        }  
    })

    return {number}

}

export default useRandomNumber