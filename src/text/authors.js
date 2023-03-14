import {useEffect, useState} from 'react'
import quoteList from './text'

const Authors = ({num, setAuthor}) => {

    let [thisAuthor, setThisAuthor] = useState(null)

    useEffect(()=>{
        setThisAuthor(quoteList[num].author) 
        setAuthor(quoteList[num].author)
    })  

    return(
        <div>-
            {thisAuthor}
        </div>
    ) 
    
}


 

export default Authors