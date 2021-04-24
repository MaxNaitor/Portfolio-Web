import Gallery from 'react-grid-gallery';
import { RITRATTI } from '../photography/exportRitratti';
import { TRAVEL } from '../photography/exportTravel';
const ScrollFoto = ({ genere }) => {

    return (
            <div className="row no-gutters" >
                <div className="col-md-3">
                    <h1>{genere}</h1>
                </div>
                <div className="col-md-9 scroll-foto">
                    <Gallery images={genere === 'ritratti' ? RITRATTI : TRAVEL} rowHeight={400}/>
                </div>
            </div>
    )
}

export default ScrollFoto;