import Titulo from '../../Components/Titulo'

export default function usandoTitulo(){
    return (

        <div>
            <Titulo 
            principal="Pagina cadastro"
            secundario ="inclur ,aalterar e excluir coisas"
            />
 <Titulo 
            principal="Pagina Login"
            secundario ="informe email"
            pequeno = {true}
            />

        </div>
    )
}