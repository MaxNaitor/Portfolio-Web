import { useState } from 'react'
import foto from '../../img/ioPH.jfif'
import PulsantieraDevelpoment from './PulsantieraDevelopment'

const DevHomepage = () => {

    const [prova, setProva] = useState('prova')

    return (
        <div className="corpoComponente">
            <div className="webhome">
                <div className="row" style={{ backgroundColor: 'white', height: '100vh' }}>
                    <div className="col-md-3" style={{ backgroundColor: 'white',}}>
                        <div className="schedahome rounded">
                            <img src={foto} alt="" className="fotoprofilo rounded-circle" />
                            <PulsantieraDevelpoment selezione={setProva} />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h1>{prova}</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DevHomepage