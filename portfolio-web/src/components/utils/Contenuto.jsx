import Contattami from "../contenuti/Contattami"


const Contenuto = ({ mostra }) => {

    const renderContenuto = () => {
        switch (mostra) {
            case 'contattami':
                return <Contattami />;
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