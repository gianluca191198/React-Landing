import React from "react";

const Header = () => {
    return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">HurlingIce</a>
                <form className="form-inline">
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Llamar</button>
                </form>
            </nav>
            
    );
}

export default Header