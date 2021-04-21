export const calcolaEta = () => {
    let data = new Date()
    let annoCorrente = data.getFullYear();
    return (parseInt(annoCorrente,10) - 1996)
}