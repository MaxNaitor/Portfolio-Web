import { useState } from "react";
import emailjs from 'emailjs-com';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Contattami = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const validaForm = () => {
        if (nome === '') {
            withReactContent(Swal).fire({
                title: <div>
                    <p>Inserisci il tuo nome!</p>
                </div>
            })
            return false;
        }
        if (email === '') {
            withReactContent(Swal).fire({
                title: <div>
                    <p>Inserisci la tua email!</p>
                </div>
            })
            return false;
        }

        if (msg === '') {
            withReactContent(Swal).fire({
                title: <div>
                    <p>Inserisci il tuo messaggio!</p>
                </div>
            })
            return false;
        }
        return true;
    }

    const inviaMail = (event) => {

        if (validaForm()) {
            let nomeMaiusc = nome.charAt(0).toUpperCase() + nome.slice(1)

            let templateParams = {
                mittente: nomeMaiusc,
                msg: msg,
                reply_to: email
            }
            emailjs.send("gmail_service", "template_cxou839", templateParams, "user_OuiiPTBmuFQviQVgy1BlE")
                .then(
                    withReactContent(Swal).fire({
                        title: <div>
                            <p>Grazie {nomeMaiusc}!</p>
                            <p>Ti risponderò prima possibile!</p>
                        </div>
                    })
                )
        }
        event.preventDefault();
    }

    return (
        <form onSubmit={(e) => inviaMail(e)}>
            <div className="contattami">
                <h1>Contattami!</h1>
                <h4>Ti risponderò prima possibile!</h4>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nome" onChange={(e) => setNome(e.target.value)} style={{ height: '4vh' }} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={{ height: '4vh' }} />
                </div>
                <div className="form-group">
                    <textarea name="msg" id="msg" cols="60" rows="10" className="form-control" placeholder="Scrivi il tuo messaggio" onChange={(e) => setMsg(e.target.value)} style={{ height: '25vh' }}></textarea>
                </div>
                <button className="btn btn-info" style={{ marginTop: '3%' }}>Invia</button>
            </div>

        </form>
    )
}

export default Contattami;
