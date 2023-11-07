
import{Routes, Route } from 'react-router-dom'

import Escalacao from '../paginas/escalacao/escalacao'
import Idolos from '../paginas/idolos/idolos'
import Historia from '../paginas/historia/historia'
import Titulos from '../paginas/titulos/titulos'

export default function Rotas() {
  return(
    <Routes>
        <Route path='/' element={<Historia />} />
        <Route path='/titulos' element={<Titulos />} />
        <Route path='/idolos' element={<Idolos />} />
        <Route path='/escalacao' element={<Escalacao />} />
    </Routes>
  )
}

