import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row no-gutters" style={{height:"100%", width:"100%"}}>
                <div className="col-sm-4" style={{height:"100%", width:"100%"}}>
                    <a href="https://github.com/MaxNaitor" target="_blank"><img src={github} alt="" /></a>
                </div>
                <div className="col-sm-4" style={{height:"100%", width:"100%"}}>
                    <a href="https://www.linkedin.com/in/tiziano-massa-061151158/" target="_blank"> <img src={linkedin} alt="" /> </a>
                </div>
                <div className="col-sm-4" style={{height:"100%", width:"100%"}}>
                    <a href="https://www.instagram.com/ti_pics/" target="_blank"><img src={instagram} alt="" /> </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;