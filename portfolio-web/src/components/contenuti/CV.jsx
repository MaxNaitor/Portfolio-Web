import { Link } from "react-router-dom";

const CV = () => {
    return (
        <div className="cv">
            <Link to="/files/Tiziano Massa CV.pdf" target="_blank" download> Scarica il CV</Link>


        </div>

    )
}

export default CV;