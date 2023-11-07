
import { useState } from "react"
export default function BotafogoJogadores({ jogador, jogadorSelecionado, seterJogadorSelecionado }) {
   const ehOJogadorSelecionado = () => {
    return jogador.id === jogadorSelecionado.id
    
   } 
   function selecionarJogador(){
    seterJogadorSelecionado(
        jogador
    )
   }
    return (
        <li onMouseEnter={selecionarJogador} onClick={selecionarJogador} className={ehOJogadorSelecionado()  ? 'personagem selecionado' : 'personagem'}  >
            <img src={jogador.src} />
        </li>
    )
}