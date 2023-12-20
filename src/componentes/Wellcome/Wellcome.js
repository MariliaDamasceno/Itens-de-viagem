import './Wellcome.css'
function wellcome({nome , sobrenome}) {
    return (
     <h1>Olá, {nome || 'Usuario'} {sobrenome} Seja bem vindo(a)!</h1>
)
}
export default wellcome;