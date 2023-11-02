import { GlobalCss } from './style'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import ParticlesBg from './components/Particles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <ParticlesBg />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
