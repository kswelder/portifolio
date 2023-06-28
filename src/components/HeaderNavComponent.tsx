import { Link } from "react-router-dom"
import "../styles/HeaderNavComponents.css"

function HeaderNavComponent() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/projetos" className="link">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/sobre" className="link">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavComponent