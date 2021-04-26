import { useHistory } from "react-router-dom"

const Header = () => {

    let history = useHistory();

    return (
        <div className="header">
            <div className="row">
                <div className="col-md-3" onClick={() => history.push("/development")}>
                    <h5>Web Development</h5>
                </div>
                <div className="col-md-6" onClick={() => history.push("/homepage")}>
                    <h1>Tiziano Massa</h1>
                </div>
                <div className="col-md-3" onClick={() => history.push("/photography")}>
                    <h5>Fotografia</h5>
                </div>

            </div>
        </div>
    )
}

export default Header;