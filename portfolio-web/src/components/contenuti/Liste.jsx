import { firestore } from "../../App";
import { useCollectionData } from 'react-firebase-hooks/firestore';



const Liste = ({tipo}) => {

    const db = firestore.collection(tipo); //richiamo la raccolta delle tecnologie
    const query = db.orderBy('ordine'); //creo una query ordinata in base all'ordine di studio
    const [lista] = useCollectionData(query);

    return (
        <div>
            {lista && lista.map(elem =>
                <h1>{elem.nome}</h1>
                )}
        </div>
    )

}

export default Liste;