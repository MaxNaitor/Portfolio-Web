import { useState } from 'react'
import foto from '../../img/ioPH.jfif'
import Contenuto from '../utils/Contenuto'
import Pulsantiera from '../utils/Pulsantiera'

const DevHomepage = () => {

    const [prova, setProva] = useState('prova')

    return (
        <div className="corpoComponente">
            <div className="home">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <div className="schedahome rounded">
                            <img src={foto} alt="" className="fotoprofilo rounded-circle" />
                            <Pulsantiera selezione={setProva} tipo="development" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Contenuto mostra={prova}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevHomepage