import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'  
import Quotes from '../text/quotes'

const QuoteText = ({setQuote, num}) => {

    const quoteTextStyle = {
        
    }

    const iconStyle = {
        float: "left",
        marginTop: "-30px",
        marginLeft: "30px",
        marginRight: "-30px",
        color: "#9c9a9a"
    }

    const headingStyle = {
        float: "left",
        marginTop : "20px"
    }

    return (
        <div id="text" style={quoteTextStyle}>  
            <h1 style={headingStyle}>
                <FontAwesomeIcon className="faSize" icon={faQuoteLeft} size={'4x'} style={iconStyle}/> 
                <Quotes num={num} setQuote={setQuote}/>
            </h1>
        </div>
    )
}

export default QuoteText
