import {useEffect, useState} from 'react'
import quoteList from './text'

const Quotes = ({num, setQuote}) => {

    let [thisQuote, setThisQuote] = useState(null)

    const quoteStyle = {
        fontSize: "1.5rem"
    }

    useEffect(()=>{
        setThisQuote(quoteList[num].quote)
        setQuote(quoteList[num].quote)
    })  

    return(
        <div style={quoteStyle}>
            {thisQuote}
        </div>
    ) 
    
}


 

export default Quotes