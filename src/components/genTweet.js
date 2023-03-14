import {useState, useEffect} from 'react'

const GenTweet = ({author, quote}) => {

    const [tweet, setTweet] = useState("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=")
    const [thisAuthor, setThisAuthor] = useState(null)
    const [thisQuote, setThisQuote] = useState(null)

    const tweetStyle = { 
            backgroundColor: "white",
            height: "50px",
            width: "100px",
            float: "right",
            color: "black",
            paddingTop: "14px",
            borderRadius: "5px",
            marginTop: "100px",
            display: "inline", 
            marginRight: "500px" 
    }

    useEffect(() => {
        setThisAuthor(author)
        setThisQuote((quote+" ").split(" ").join("%20")) 
    })

    return (
        <div id="tweet-quote" style={tweetStyle}><a href={tweet+thisQuote+thisAuthor} target="_blank"><p>Tweet</p></a></div>
    )

}

export default GenTweet