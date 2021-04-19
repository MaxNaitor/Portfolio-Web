import laptopLOGO from '../../img/laptopLOGO.png'
import cameraLOGO from '../../img/cameraLOGO.png'

const HomeCard = ({titolo,classe,immagine}) => {

    const buttonFont = 'btn btn-info ' + classe
    const src = immagine === 'laptop' ? laptopLOGO : cameraLOGO

    return (
        <div className="homecard rounded">
            <h1 className={classe}>{titolo}</h1>
            <img src={src} alt="" className={immagine}/> <br/>
            <button className={buttonFont}>Entra</button>
        </div>

    )
}

export default HomeCard;