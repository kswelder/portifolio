import { Link } from "react-router-dom"
import "../styles/HeaderNavComponents.css"

function HeaderNavComponent() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                        <div></div>
                    </li>
                    <li>
                        <Link to="/projetos" className="link">Projetos</Link>
                        <div></div>
                    </li>
                    <li>
                        <Link to="/sobre" className="link">Sobre</Link>
                        <div></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavComponent