

const Pulsantiera = ({ selezione, tipo }) => {
    return (
        <>
            <div align="center" style={{ margin: '10%' }} >
                {tipo === 'development' ?
                    <>
                        <button className="btn btn-info-inverted tech pulsantiera" onClick={() => selezione('chi sono')}>Chi Sono</button>
                        <button className="btn btn-info-inverted tech pulsantiera" onClick={() => selezione('tecnologie')}>Tecnologie</button>
                        <button className="btn btn-info-inverted tech pulsantiera" onClick={() => selezione('progetti')}>Progetti</button>
                        <button className="btn btn-info-inverted tech pulsantiera" onClick={() => selezione('contattami')}>Contattami</button>
                        <button className="btn btn-info-inverted tech pulsantiera" onClick={() => selezione('cv')}>CV</button>
                    </>
                    :
                    <>
                        <button className="btn btn-info-inverted fotografia pulsantiera" onClick={() => selezione('chi sono')}>Chi Sono</button>
                        <button className="btn btn-info-inverted fotografia pulsantiera" onClick={() => selezione('ritratti')}>Ritratti</button>
                        <button className="btn btn-info-inverted fotografia pulsantiera" onClick={() => selezione('travel')}>Travel</button>
                        <button className="btn btn-info-inverted fotografia pulsantiera" onClick={() => selezione('live')}>Live</button>
                        <button className="btn btn-info-inverted fotografia pulsantiera" onClick={() => selezione('attrezzatura')}>Attrezzatura</button>
                        <button className="btn btn-info-inverted fotografia pulsantiera" onClick={() => selezione('contattami')}>Contattami</button>
                    </>
                }



            </div>
        </>
    )
}

export default Pulsantiera