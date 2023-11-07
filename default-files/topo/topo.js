import React from "react";
import './topo.css'
import {Link} from 'react-router-dom'


export default function Topo() {
    return (
        <div>
            <header>

                <nav>
                    <Link to='/'>História</Link>
                    <Link to='/titulos'>Títulos</Link>
                </nav>
                <figure>
                    <img src="/assets/botafogo-escudo.png" />
                </figure>
                <nav>
                    <Link to='/idolos'>ídolos</Link>
                    <Link to='/escalacao'>Escalação</Link>
                </nav>
            </header>

        </div>
    )
}