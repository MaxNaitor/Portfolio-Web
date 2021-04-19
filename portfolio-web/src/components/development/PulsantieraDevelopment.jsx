

const PulsantieraDevelpoment = ({selezione}) => {
    return (
        <>
            <div align="center" style={{margin: '10%'}} >
                <button className="btn btn-info-inverted tech pulsantiera" onClick={() => selezione('chi sono')}>Chi Sono</button>
                <button className="btn btn-info-inverted tech pulsantiera" onClick={() => selezione('tecnologie')}>Tecnologie</button>
                <button className="btn btn-info-inverted tech pulsantiera" onClick={() => selezione('progetti')}>Progetti</button>
                <button className="btn btn-info-inverted tech pulsantiera" onClick={() => selezione('contattami')}>Contattami</button>
            </div>
        </>
    )
}

export default PulsantieraDevelpoment