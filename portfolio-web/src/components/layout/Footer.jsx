import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-sm-4">
                    <img src={github} alt=""/>
                </div>
                <div className="col-sm-4">
                    <img src={linkedin} alt=""/>
                </div>
                <div className="col-sm-4">
                    <img src={instagram} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer;