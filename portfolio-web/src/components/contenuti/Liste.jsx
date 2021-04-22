import { firestore } from "../../App";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Elemento from "./Elemento";



const Liste = ({ tipo }) => {

    const db = firestore.collection(tipo); //richiamo la raccolta delle tecnologie
    const query = db.orderBy('ordine'); //creo una query ordinata in base all'ordine di studio
    const [lista] = useCollectionData(query);

    return (
        <div className="lista">
            {lista && lista.map(elem =>
                <Elemento elemento={elem} tipo={tipo} key={elem.id} />
            )}
        </div>
    )

}

export default Liste;