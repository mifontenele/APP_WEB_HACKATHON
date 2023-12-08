import "./Seacher.css";

function Seacher() {

    return (
        <>
            <div>
                <nav className="navbar bg-dark-subtle">
                    <div className="">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Procurar Eventos"
                                aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Seacher;