import './App.css'
// import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Home from './Components/Home/Home'
import Mywork from './Components/Mywork/Mywork'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        {/* <About /> */}
        <Skills />
        <Mywork />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default App
