import './App.css'

import Main from './componentes/Main'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import { UserProvider } from './aplicacion/UserProvider';

function App() {
  return (
    <UserProvider>
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
    </UserProvider>

  );
}

export default App;
