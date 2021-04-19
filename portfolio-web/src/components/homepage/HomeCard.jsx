import laptopLOGO from '../../img/laptopLOGO.png'
import cameraLOGO from '../../img/cameraLOGO.png'
import {useHistory} from "react-router-dom"

const HomeCard = ({titolo,classe,immagine,lato,nav}) => {

    const buttonFont = 'btn btn-info ' + classe;
    const src = immagine === 'laptop' ? laptopLOGO : cameraLOGO;
    const divClassName = 'homecard ' + lato + ' rounded';
    let history = useHistory();

    return (
        <div className={divClassName}>
            <h1 className={classe}>{titolo}</h1>
            <img src={src} alt="" className={immagine}/> <br/>
            <button className={buttonFont} onClick={() => history.push(nav)}>Entra</button>
        </div>

    )
}

export default HomeCard;