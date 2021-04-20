import Contattami from "../contenuti/Contattami"


const Contenuto = ({mostra}) => {
    return (
    <div className="contenuto rounded">
        <h1>{mostra}</h1>
        <Contattami/>
    </div>
)
}

export default Contenuto;