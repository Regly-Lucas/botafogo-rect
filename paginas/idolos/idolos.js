import './idolos.css'
import BotafogoJogadores from '../../BotafogoJogadores/BotafogoJogadores'
import jogadoresBancoDados from '../../BancoDeDados/Dados'
import selecionadoDados from '../../BancoDeDados/Dados'
import PersonagemSelecionado from '../../PersonagemSelecionado/PersonagemSelecionado'
import { useState } from 'react'
export default function Idolos() {
    const [mostrandoJogadorSelecionado, setMostrandoJogadorSelecionado] = useState(jogadoresBancoDados[0])
    return (
        <main class="conteudo_principal idolos-body">
            <section class="secao_banner_dois">
                <h1>Craques que fizeram <br /> história pelo clube.</h1>
            </section>

            <section class="selecao-de-personagem">
                <section class="personagens">
                    <h2>Selecione um jogador</h2>
                    <ul>
                        {jogadoresBancoDados.map((i) => {
                            return (
                                <BotafogoJogadores
                                    jogador={i}
                                    jogadorSelecionado={mostrandoJogadorSelecionado}
                                    seterJogadorSelecionado={setMostrandoJogadorSelecionado}
                                />
                            )
                        })

                        }
                    </ul>
                </section>
                <section class="personagem-selecionado">
                    <PersonagemSelecionado
                        src={mostrandoJogadorSelecionado.src}
                        descricaoPersonagem={mostrandoJogadorSelecionado.descricao}
                        nome={mostrandoJogadorSelecionado.nome}
                    />
                </section>
            </section>
        </main>
    )

}