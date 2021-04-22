import { useHistory } from "react-router";
import ChiSono from "../contenuti/ChiSono";
import Contattami from "../contenuti/Contattami"
import CV from "../contenuti/CV";
import Liste from "../contenuti/Liste";

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
                return <h1>{mostra}</h1>
            case 'travel':
                return <h1>{mostra}</h1>
            case 'attrezzatura':
                return <h1>{mostra}</h1>
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