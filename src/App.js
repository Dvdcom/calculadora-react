import './App.css'

import Main from './componentes/Main'
import Header from './componentes/Header'
import Footer from './componentes/Footer'

function App() {
  return (
    <div id="App">
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
