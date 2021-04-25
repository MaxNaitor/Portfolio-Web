import { calcolaEta } from "../utils/utility"


const ChiSono = ({ tipo }) => {

    const renderComponent = () => {
        return (
            <>
                <div className="chi-sono">
                    <h1>Salve!</h1>
                    <h1>Sono <b>Tiziano Massa</b>, ho {calcolaEta()} anni e vivo a Roma.</h1>
                    {tipo === '/development' ? renderDev() : renderPh()}
                </div>
            </>
        )
    }

    const renderDev = () => {
        return (
            <>
                <div className="paragrafo">
                    <h1>Come molti,a causa della pandemia del 2020, ho perso il mio posto di lavoro.</h1>
                </div>
                <div className="paragrafo">
                    <h1>Durante il primo periodo di quarantena,ho iniziato a studiare <b>Java</b> autonomamente seguendo corsi online.</h1>
                </div>
                <div className="paragrafo">
                    <h1>A settembre dello stesso anno,ho frequentato un corso di formazione professionale presso un' azienda
                    ampliando le mie competenze e conoscienze,imparando linguaggi come <b>HTML</b>, <b> CSS,</b> <b>SQL</b> e
                          framework come <b>Spring </b> e <b>Hibernate</b>.</h1>
                </div>
                <div className="paragrafo">
                    <h1>Al termine del corso,ho proseguito la formazione in stage con la medesima azienda,introducendo ulteriori tecnologie
                    come <b>React</b>, <b>Redux</b>, <b>MongoDB</b> e <b>Docker</b>.
                    </h1>
                </div>
                <div className="paragrafo">
                    <h1>Ciò che preferisco del mondo della programmazione è la continua necessità di studiare,apprendere e utilizzare
                    nuovi strumenti che, combinati tra loro, porteranno al raggiungimento dell'obiettivo prefissato, cosa che personalmente
                        mi regala grandi soddisfazioni.</h1>
                </div>
                <div className="paragrafo">
                    <h1>Durante questo periodo di studio e apprendimento,ho compreso che la programmazione sarebbe stata la scelta del mio campo lavorativo.</h1>
                </div>
            </>
        )
    }

    const renderPh = () => {
        return (
            <>
                <div className="paragrafo">
                    <h1>La mia passione per la fotografia, è nata per puro caso.</h1>
                </div>
                <div className="paragrafo">
                    <h1>Ho comprato la mia prima fotocamera nel 2016 ed è stato amore a primo scatto.</h1>
                </div>
                <div className="paragrafo">
                    <h1>Da quel momento ho iniziato a studiare la composizione,la teoria e la storia della fotografia
                    da completo autodidatta,seguendo numerosi fotografi su youtube e prendendo spunto dai loro scatti.
                </h1>
                </div>
                <div className="paragrafo">
                    <h1>Sperimentando vari generi,ho scoperto la mia preferenza per tre di questi in particolare:</h1>
                    <h1>La <b>Travel Photography</b>,la <b>Portrait Photograhy</b> e la <b>Live Photograhy</b>.</h1>
                </div>
                <div className="paragrafo">
                    <h1>Col passare del tempo,sto sviluppando un mio stile,concentrato sulla <b>simmetria</b>,lo <b>spazio negativo</b></h1>
                    <h1>e, dove possibile, il <b>minimalismo</b>.</h1>
                </div>
            </>
        )
    }

    return (
        <>
            {renderComponent()}
        </>
    )
}

export default ChiSono