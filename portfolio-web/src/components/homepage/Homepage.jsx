import HomeCard from "./HomeCard"


const Homepage = () => {
    return (
        <div className="homepage">
            <div className="row">
                <div className="col-md-6 colLeft">
                    <HomeCard titolo="Web Development" classe="tech" immagine="laptop"/>
                </div>
                <div className="col-md-6 colRight">
                    <HomeCard titolo="Fotografia" classe="fotografia" immagine="camera" />
                </div>
            </div>
        </div>

    )
}

export default Homepage;