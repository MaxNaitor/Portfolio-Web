import { useHistory } from "react-router";
import Attrezzatura from "../contenuti/Attrezzatura";
import ChiSono from "../contenuti/ChiSono";
import Contattami from "../contenuti/Contattami"
import CV from "../contenuti/CV";
import Liste from "../contenuti/Liste";
import Ritratti from "../contenuti/Ritratti";
import ScrollFoto from "../contenuti/ScrollFoto"

const Contenuto = ({ mostra }) => {

    const history = useHistory();

    const renderContenuto = () => {
        switch (mostra) {
            case 'chi sono':
                return <ChiSono tipo={history.location.pathname} />
            case 'contattami':
                return <Contattami />;
            case 'tecnologie':
                return <Liste tipo='tecnologie' />
            case 'progetti':
                return <Liste tipo='progetti' />
            case 'ritratti':
                return <ScrollFoto genere='ritratti'/>
            case 'travel':
                return <ScrollFoto genere='travel'/>
            case 'attrezzatura':
                return <Attrezzatura />
            case 'cv':
                return <CV />
            default: return <ChiSono tipo={history.location.pathname} />
        }
    }

    return (
        <div className="contenuto rounded">
            {renderContenuto()}
        </div>
    )
}

export default Contenuto;