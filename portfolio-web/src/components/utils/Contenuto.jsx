import Contattami from "../contenuti/Contattami"
import CV from "../contenuti/CV";


const Contenuto = ({ mostra }) => {

    const renderContenuto = () => {
        switch (mostra) {
            case 'contattami':
                return <Contattami />;
            case 'cv':
                return <CV />
            default: return <h1>{mostra}</h1>
        }
    }

    return (
        <div className="contenuto rounded">
            {renderContenuto()}
        </div>
    )
}

export default Contenuto;