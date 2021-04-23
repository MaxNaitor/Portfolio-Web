import { firestore } from "../../App";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Elemento from "./Elemento";



const Liste = ({ tipo, filtro }) => {

    const db = firestore.collection(tipo); //richiamo la raccolta delle tecnologie
    const query = db.orderBy('ordine'); //creo una query ordinata in base all'ordine di studio
    const [lista] = useCollectionData(query);

    const handleFilter = (elemento) => {
        console.log(filtro)
        if (filtro != undefined) {
            if (elemento.tipo === filtro) {
                return <Elemento elemento={elemento} tipo={tipo} key={elemento.id} />
            }
        } else {
            return <Elemento elemento={elemento} tipo={tipo} key={elemento.id} />
        }
    }

    return (
        <div className="lista">
            {lista && lista.map(elem =>
                handleFilter(elem)
            )}
        </div>
    )

}

export default Liste;