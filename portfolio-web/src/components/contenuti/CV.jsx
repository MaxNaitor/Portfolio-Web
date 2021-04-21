import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV = () => {

    return (
        <div className="cv">
            <Document file="/files/Tiziano Massa CV.pdf" className="pdf">
                <Page pageNumber={1}></Page>
                <Page pageNumber={2}></Page>
            </Document>
            <Link to="/files/Tiziano Massa CV.pdf" target="_blank" download> Scarica il CV</Link>
        </div>

    )
}

export default CV;