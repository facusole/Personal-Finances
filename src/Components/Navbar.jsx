import '../css/Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

// Una simple navbar con react-router-dom para poder linkear las paginas.

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

// Custom Link es una funcion que le pasamos 3 parametros, to es usado para usar el hook de useResolvedPath y conseguir la ruta exacta del archivo, children es para poder crear el li a todos los children de la funcion y ...props por si tenemos otros parametros. Luego, el className tiene un ternario para preguntar si la ruta absoluta es estrictamente igual, si es asi, la clase pasa a ser active y si no lo es, queda sin clase.

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

