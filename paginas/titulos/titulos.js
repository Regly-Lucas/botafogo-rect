import './titulos.css'

export default function Titulos(){
    return(
        <main>
        <table>
            <caption>Honrarias</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Nomenclatura</th>
                    <th>Títulos</th>
                    <th>Temporadas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_10.jpeg" alt=""/></td>
                    <td>Tríplice Coroa</td>
                    <td>1</td>
                    <td>1968</td>
                </tr>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_11.jpeg" alt=""/></td>
                    <td>12º Maior Clube do Século XX da FIFA</td>
                    <td>1</td>
                    <td>2000</td>
                </tr>
            </tbody>
        </table>
        <table>
            <caption>Continentais</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Competição</th>
                    <th>Títulos</th>
                    <th>Temporadas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_9.jpeg" alt=""/></td>
                    <td>Copa CONMEBOL</td>
                    <td>1</td>
                    <td>1993</td>
                </tr>
            </tbody>
        </table>
        <table>
            <caption>Nacionais</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Competição</th>
                    <th>Títulos</th>
                    <th>Temporadas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_8.jpeg" alt=""/></td>
                    <td>Campeonato Brasileiro</td>
                    <td>2</td>
                    <td>1968 e 1995</td>
                </tr>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_7.jpeg" alt=""/></td>
                    <td>Campeonato Brasileiro - Série B</td>
                    <td>2</td>
                    <td>2015 e 2021</td>
                </tr>
            </tbody>
        </table>

        <table>
            <caption>Interestaduais</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Competição</th>
                    <th>Títulos</th>
                    <th>Temporadas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_6.jpeg" alt=""/></td>
                    <td>Torneio Rio - São Paulo</td>
                    <td>4</td>
                    <td>1962, 1964, 1966 e 1998</td>
                </tr>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_5.jpeg" alt=""/></td>
                    <td>Taça dos Campeões Rio - São Paulo</td>
                    <td>2</td>
                    <td>2015 e 2021</td>
                </tr>
            </tbody>
        </table>

        <table>
            <caption>Estaduais</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Competição</th>
                    <th>Títulos</th>
                    <th>Temporadas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_4.jpeg" alt=""/></td>
                    <td>Campeonato Carioca</td>
                    <td>21</td>
                    <td>1907, 1910, 1912, 1930, 1932, 1933, 1934, 1935, 1948, 1957, 1961, 1962, 1967, 1968, 1989, 1990,
                        1997, 2006, 2010, 2013 e 2018</td>
                </tr>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_3.jpeg" alt=""/></td>
                    <td>Torneio Início</td>
                    <td>8</td>
                    <td>1934, 1938, 1947, 1961, 1962, 1963, 1967 e 1977</td>
                </tr>
            </tbody>
        </table>

        <table>
            <caption>Turno do Estadual</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Competição</th>
                    <th>Títulos</th>
                    <th>Temporadas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_2.jpeg" alt=""/></td>
                    <td>Taça Guanabara</td>
                    <td>8</td>
                    <td>1967, 1968, 1997, 2006, 2009, 2010, 2013 e 2015</td>
                </tr>
                <tr>
                    <td class="titulo_img"><img src="/assets/taca_1.jpeg" alt=""/></td>
                    <td>Torneio Rio</td>
                    <td>8</td>
                    <td>11989, 1997, 2007, 2008, 2010, 2012, 2013 e 2023</td>
                </tr>
            </tbody>
        </table>

        <table>
            <caption>Total</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Conquistas</th>
                    <th>Títulos</th>
                    <th>Categorias</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="titulo_img"><img src="/assets/botafogo-escudo.png" alt=""/></td>
                    <td>Títulos Oficiais</td>
                    <td>32</td>
                    <td>1 Continental, 4 Nacionais, 6 Interestaduais e 21 Estaduais</td>
                </tr>
            </tbody>
        </table>
    </main>
    )
}