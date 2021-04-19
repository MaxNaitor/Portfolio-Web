import HomeCard from "./HomeCard"
import {useHistory} from "react-router-dom"

const Homepage = () => {
    return (
        <div className="corpoComponente">
            <div className="homepage">
                <div className="row">
                    <div className="col-md-6" >
                        <HomeCard titolo="Web Development" classe="tech" immagine="laptop" lato="left" nav="/development" />
                    </div>
                    <div className="col-md-6" >
                        <HomeCard titolo="Fotografia" classe="fotografia" immagine="camera" lato="right" nav="/photography" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Homepage;