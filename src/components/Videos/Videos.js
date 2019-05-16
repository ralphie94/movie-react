import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react"


const API_KEY='82f5b0c8452c5b698c5b7c68d5563ddd'


class Videos extends Component {
    state = {
        video: {}
    }

    componentDidMount() {
        this.getVideo()
            .then(data => this.setState({
                video: data.videosJson.results[0]
            }))
    }

    getVideo = async () => {
        try {
          console.log(this.props.match)
          const videos = await fetch(`https://api.themoviedb.org/3/movie/${this.props.video}/videos?api_key=${API_KEY}`);
            if (!videos.ok) {
              throw Error(videos.response.statusText);
            }
            const videosJson = await videos.json();
            return { videosJson}
            
        } catch(err) {
          console.log(err, "err in the catch block");
          return err
        }
      }

    render(){
        return (
            <div>
                <Modal trigger={<Button>Play Trailer</Button>} basic size="large">
                <iframe id="background-video" width="1000" height="700" frameborder="0" allowFullScreen
                    src={`https://www.youtube.com/embed/${this.state.video.key}?autoplay=1&mute=1`}>
                </iframe>
                </Modal>
            </div>
        )
    }
}

export default Videos;