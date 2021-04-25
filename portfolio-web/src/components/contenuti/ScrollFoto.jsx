import Gallery from 'react-grid-gallery';
import { RITRATTI } from '../photography/exportRitratti';
import { TRAVEL } from '../photography/exportTravel';
const ScrollFoto = ({ genere }) => {

    const renderTesto = () => {
        if (genere === 'travel') {
            return (
                <>
                    <h1>Travel</h1>
                    <p>Se c'è una cosa che amo veramente,è viaggiare.</p>
                    <p>Nulla ti arricchisce di più di andare lontano e vedere posti e culture diverse dalla tua. </p>
                </>
            )
        } else if (genere === 'ritratti') {
            return (
                <>
                <h1>Ritratti</h1>
                <p>Secondo me,per raccontare veramente una persona,non basta un volto.</p>
                <p>Una persona è se stessa solo nel suo luogo di appartenenza.</p>
                </>
            )
        }
    }

    return (
        <div className="row no-gutters" style={{ backgroundColor: 'teal' }} >
            <div className="col-md-3" style={{ padding: '3%', textAlign: 'left', margin: 'auto' }}>
                <div className="rounded" style={{ backgroundColor: 'white', color: 'teal', padding: '5%', fontFamily: "fotografia", fontSize: "3vh" }}>
                    {renderTesto()}
                    <p>Clicca sulle immagini per vederle con le proporzioni reali!</p>
                </div>
            </div>
            <div className="col-md-9 scroll-foto">
                <Gallery images={genere === 'ritratti' ? RITRATTI : TRAVEL} rowHeight={300} />
            </div>
        </div>
    )
}

export default ScrollFoto;