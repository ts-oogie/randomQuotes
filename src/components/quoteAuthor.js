 
 
import Authors from '../text/authors'

const QuoteAuthor = ({num, setAuthor}) => { 

    const authorStyle = {
        float: "right"
    } 

    return (  
         <div id="author" style={authorStyle}>
            <h2><Authors num={num} setAuthor={setAuthor}/></h2>
         </div> 
    )

}

export default QuoteAuthor