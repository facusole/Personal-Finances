import '../css/Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav-container">
            <ul>           
                <CustomLink to="/incomes">Incomes</CustomLink>                
                <CustomLink to="/expenses">Expenses</CustomLink>
            </ul>
        </div>
    )
}

function CustomLink ({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true}) // end: true lo que hace es que todo el path sea igual y no parcialmente igual.
    return (
        <li className={ isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;

