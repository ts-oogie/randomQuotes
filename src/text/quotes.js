import {useEffect, useState} from 'react'
import quoteList from './text'

const Quotes = ({num, setQuote}) => {

    let [thisQuote, setThisQuote] = useState(null)

    useEffect(()=>{
        setThisQuote(quoteList[num].quote)
        setQuote(quoteList[num].quote)
    })  

    return(
        <div>
            {thisQuote}
        </div>
    ) 
    
}


 

export default Quotes