import React from "react"
const PersonagemSelecionado = ({src, id, descricaoPersonagem, nome}) => {
    return (
        <div>
            <img class="personagem-grande" src={src} alt="Personagem Selecionado" />
            <aside class="informacoes-personagem">
                <h2 class="nome-personagem" id={id}>{nome}</h2>
                <p class="descricao-personagem" id="descricao-personagem">{descricaoPersonagem}</p>
            </aside>
        </div>
    )
}

export default PersonagemSelecionado