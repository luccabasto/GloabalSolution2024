export const  Footer = () => {
    return (
        <div className=" w-full flex items-center justify-between bg-gray-800 md:flex-col md:items-center md:justify-around">
            <div>Logo aqui</div>
            <div>
                <ul className="no-underline flex sm:flex-col">
                    <h3>DevTeam</h3>
                    <li>
                        <a href="https://www.linkedin.com/in/lucas-basto/"> Lucca Basto - RM:553771</a>
                    </li>
                    <li>
                        <a href="https://github.com/ThaiisRibeiro"> Thais Ribeiro - RM:553870</a>
                    </li>
                    <li>
                        <a href="https://github.com/fiapvitor"> Vitor Lucas - RM: 553029</a>
                    </li>
                </ul>
            </div>
            <div>© Todos os direitos reservados para A-tension.co </div>
        </div>
    )
}