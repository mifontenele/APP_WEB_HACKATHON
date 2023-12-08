import "./AsideBar.css"

function AsideBar() {

    return (
        <>
            <div id="conjuntoBotaoLogo">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* criar evento para add e remover class show */}
                <div className="offcanvas offcanvas-start show" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header bg-dark-subtle">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <menu>Dashboard</menu>
                        </h5>
                        {/* criar o evento de remover o show */}
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body bg-dark-subtle off">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Usuários
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Usuário 1</a></li>
                                    <li><a className="dropdown-item" href="#">Usuário 2</a></li>
                                    <li><a className="dropdown-item" href="#">Usuário 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Salas
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sala 1</a></li>
                                    <li><a className="dropdown-item" href="#">Sala 2</a></li>
                                    <li><a className="dropdown-item" href="#">Sala 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Eventos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Evento 1</a></li>
                                    <li><a className="dropdown-item" href="#">Evento 2</a></li>
                                    <li><a className="dropdown-item" href="#">Evento 3</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* Seacher */}
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                {/* add evento de remover tag e fechar modal  */}
                {/* <div class="offcanvas-backdrop fade show"></div> */}
            </div>
        </>
    )
}

export default AsideBar;