import React from 'react'
import logo from '../../logo.svg'
import ParticlesBg from '../../components/Particles'
import { useTypewriter } from 'react-simple-typewriter'

function Home() {
  const [text] = useTypewriter({
    words: ['src/App.tsx'],
    loop: 3,
    typeSpeed: 500,
    deleteSpeed: 0,
    delaySpeed: 400
  })

  return (
    <div className="App">
      <ParticlesBg />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{text}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Home
