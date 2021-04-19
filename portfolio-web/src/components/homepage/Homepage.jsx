import HomeCard from "./HomeCard"


const Homepage = () => {
    return (
        <div className="homepage">
            <div className="row" style={{left: '1%'}}>
                <div className="col-md-6 colLeft">
                    <HomeCard titolo="Web Development" classe="tech" immagine="laptop" lato="left"/>
                </div>
                <div className="col-md-6 colRight">
                    <HomeCard titolo="Fotografia" classe="fotografia" immagine="camera" lato="right" />
                </div>
            </div>
        </div>

    )
}

export default Homepage;