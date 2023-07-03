import { useState } from 'react'
import HeaderNavComponent from '../components/HeaderNavComponent'
import '../styles/App.css'

function App() {
  const [size, setSize] = useState("")
  const getSize = () => {
    setSize(window.outerWidth.toString())
  }

  return (
    <div className='home'>
      <HeaderNavComponent/>
      <main>
        <div className='profile'>
          <div className='profile-about'>
            <div><div className='image-home'></div></div>
            <ul>
              <li className='about-me'>
                <h3>Sobre min</h3>
                <p>Sempre fui um entusiasta na área de tecnologia, desde meus 17 anos escrevia scripts em Python e e fazia alguns mini projetinhos pessoais.<br/>Mas a partir de de 2022 eu decidir focar meus estudos para ingressar na carreira de desenvolvimento de software em específico o <strong>BackEnd</strong> com <strong>Java Spring Boot.</strong></p>
              </li>
              <li>
                <h3 className='tag'>Redes Sociais</h3>
                <ul className='social-media'>
                  <li>
                    <a href="https://github.com/kswelder" target='_blank'>
                      <div className='github'></div>
                      <p>GitHub</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/welder-hayne-9b5b59163/" target='_blank'>
                      <div className='linkedin'></div>
                      <p>Linkedin</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className='tag'>Projetos</h3>
                <ul className='projects'>
                  <li>
                    <div>
                      <div className='image-check-list-site'></div>
                      <div>
                        <h4>Check List Site</h4>
                        <p>
                          Site em React que conecta em uma API Rest para criar um check list.
                        </p>
                      </div>
                      <div>
                        <a href="https://github.com/kswelder/check-list-site" target="_blank" rel="noopener noreferrer">Github</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className='image-check-list-api'></div>
                      <div>
                        <h4>Check List API</h4>
                        <p></p>
                      </div>
                      <div>
                        <a href="https://github.com/kswelder/check-list-api" target="_blank" rel="noopener noreferrer">Github</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className='image-api-bank'></div>
                      <div>
                        <h4>API Rest java bank simulate</h4>
                        <p></p>
                      </div>
                      <div>
                        <a href="https://github.com/kswelder/api-rest-java-bank-simulate" target="_blank" rel="noopener noreferrer">Github</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className='image-spring-autentication'></div>
                      <div>
                        <h4>Spring Boot autentication</h4>
                        <p></p>
                      </div>
                      <div>
                        <a href="https://github.com/kswelder/initial-spring-boot-autentication-jwt" target="_blank" rel="noopener noreferrer">Github</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className='tag'>Tecnologias</h3>
                <ul className='tecnologies'>
                  <li>
                    <div></div>
                    <h4>React</h4>
                  </li>
                  <li>
                    <div></div>
                    <h4>Spring Boot</h4>
                  </li>
                  <li>
                    <div></div>
                    <h4>Python</h4>
                  </li>
                  <li>
                    <div></div>
                    <h4>Web Scrapping</h4>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
