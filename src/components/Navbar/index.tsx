import './styles.css';
import 'bootstrap/js/src/collapse';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark main-nav">
            <div className="container-fluid">
                <div className="nav-logo-text">
                    <a href="/">
                        <h3>Carros Top</h3>
                    </a>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#cars-top-navbar"
                    aria-controls="cars-top-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="cars-top-navbar">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li>
                            <NavLink to="/" activeClassName="active" exact>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog" activeClassName="active">
                                CATÁLOGO
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
