import React from "react";
import imagen1 from '../assets/helados.jpg';
import imagen2 from '../assets/potes-helado.jpg';
import imagen3 from '../assets/helado-artesenal.jpg';

const Imagenes = () => {

    return (
        <div className="imagenes">
            <img className="imagen" src={imagen1}/>
            <img className="imagen" src={imagen2}/>
            <img className="imagen" src={imagen3}/>
        </div>
    );
}

export default Imagenes