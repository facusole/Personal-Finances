import '../css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav-container">
            <ul>
                <li>
                    <Link to="/incomes">Incomes</Link>
                </li>
                <li>
                    <Link to="/expenses">Expenses</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

