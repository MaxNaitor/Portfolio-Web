import github from '../../img/github.png'


const Elemento = ({ elemento, tipo }) => {

    const renderComponente = () => {
        if (tipo === 'tecnologie') {
            return renderTecnologie()
        } else if (tipo === 'progetti') {
            return renderProgetti()
        } else if (tipo === 'attrezzatura') {
            return renderAttrezzatura()
        }
    }

    const renderTecnologie = () => {
        return (
            <div className="elemento-tech">
                <h1>{elemento.nome}</h1>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img src={elemento.immagine} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h3>{elemento.commento}</h3>
                    </div>
                </div>
            </div>
        )
    }

    const renderProgetti = () => {
        return (
            <div className="elemento-tech">
                <h1>{elemento.nome}</h1>
                <div className="row no-gutters">
                    <div className="col-md-3" >
                        <a href={elemento.github} target="_blank"><img src={github} alt="" title="Guarda su GitHub" /></a>
                    </div>
                    <div className="col-md-9">
                        <h3>{elemento.descrizione}</h3>
                    </div>
                </div>
            </div>
        )
    }

    const renderAttrezzatura = () => {
        return (
        <div className="elemento-ph">
            <div className="row no-gutters">
                <div className="col-md-3" >
                    <img src={elemento.immagine} alt=""/>
                </div>
                <div className="col-md-9">
                    <h1>{elemento.nome}</h1>
                </div>
            </div>
        </div>
        )
    }

    return (
        <>
            {renderComponente()}
        </>
    )
}

export default Elemento;