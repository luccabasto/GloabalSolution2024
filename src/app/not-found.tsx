import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h2>Não encontrado</h2>
            <p>Desculpe, a página que está procurando não existe.</p>

            <Link href="/"> Retorne para tela inicial</Link>
        </div>
    )
}

export default NotFound