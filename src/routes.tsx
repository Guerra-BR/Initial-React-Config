import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Page2'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

export default Rotas
