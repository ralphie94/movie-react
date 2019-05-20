import React, { Component } from "react"
const API_KEY= process.env.REACT_APP_KEY

class Credits extends Component {
    state = {
        credits: []
    }

    componentDidMount(){
        this.getCredits()
        .then(data => this.setState({
            credits: data.creditsJson
        }))
    }
    

    getCredits = async () => {
        try {
          console.log(this.props.match)
          const credits = await fetch(`https://api.themoviedb.org/3/movie/${this.props.credit}/credits?api_key=${API_KEY}`);
            if (!credits.ok) {
              throw Error(credits.response.statusText);
            }
            const creditsJson = await credits.json();
            return { creditsJson}
            
        } catch(err) {
          console.log(err, "err in the catch block");
          return err
        }
      }

    render(){
        return (
            <div>
              <h1>Cast</h1>
               {/* {
                 this.state.credits.map((c, i) => {
                   <li>
                     
                   </li>
                 })
               } */}
            </div>
        )
    }
}

export default Credits;