import { useState } from "react";

const Contattami = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const inviaMail = (event) => {
        console.log('email ' + email + ' psw ' + password + ' msg ' + msg)
        event.preventDefault();
    }

    return (
        <form onSubmit={(e) => inviaMail(e)}>
            <input type="text" className="input-group" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input-group" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <textarea name="msg" id="msg" cols="60" rows="10" placeholder="Scrivi il tuo messaggio" onChange={(e) => setMsg(e.target.value)}></textarea>
            <button className="btn btn-info" style={{ marginTop: '5%' }}>Invia</button>
        </form>
    )
}

export default Contattami;