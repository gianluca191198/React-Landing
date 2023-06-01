import React from "react";
import { useState } from 'react';
import helado from '../assets/helado.png';
import cuarto from '../assets/cuarto.svg';
import medio from '../assets/medio.svg';
import kilo from '../assets/1kg.svg';
import cucurucho from '../assets/cucurucho.svg';
import Imagenes from './Imagenes';
import imagen1 from '../assets/helados.jpg';

const Body = () => {

    
  const[precios, agregarPrecio] = useState(
        [
        {id:1, nombre: "1/4kg", valor: 1000, icono: cuarto , width: 80},
        {id:1, nombre: "1/2kg", valor: 1900, icono: medio ,width: 80},
        {id:1, nombre: "1kg", valor: 3500, icono: kilo  , width: 80},
        {id:1, nombre: "Cucurucho chico", valor: 700, icono: cucurucho , width: 210},
        {id:1, nombre: "Cucurucho grande", valor: 900, icono: cucurucho , width: 210},
        ]
    );

    const sabores = ["Vainilla","Chocolate","Crema oreo","Dulce de leche granizado","Dulce de leche",
                    "Cookies and Cream","Maracuya","Café","Nuez","Frutilla al agua","Caramelo","Limón","Frutos del bosque",
                    "Tramontana","Mora","Banana split","Menta granizada","Tiramisú","Almendra","Mousse de chocolate"];
    
    return (
        <div>
            <div className="masthead text-black text-center titulo">
                <div className="container d-flex align-items-center flex-column">
                    <h1 className="masthead-heading text-uppercase mb-0">Heladeria Hurlingham</h1>
                    <div className="subtitulo">Helado artesanal desde 1990</div>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <img className="helado" src={helado}/>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </div>
            {/* <Imagenes/> */}
            {/* <img className="imagen" src={imagen1}/> */}
            <div className="precios">
                <div className="precios-container container">
                    <div className="precios-valor">
                        {
                            precios.map(precio => (
                            <div className="precio">
                                <img className="icono"src={precio.icono}></img>
                                <div  style={{width: precio.width}} >{precio.nombre}</div>
                                <div className="precio-valor">${precio.valor}</div>
                            </div>
                        ))
                        }
                    </div>
                    <div className="sabores">
                        {
                            sabores.map(sabor => (
                            <div className="sabor">
                                <div>{sabor}</div> |
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body