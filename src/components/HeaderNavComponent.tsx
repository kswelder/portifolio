import { Link } from "react-router-dom"
import "../styles/HeaderNavComponents.css"

function HeaderNavComponent() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderNavComponent