import { Aside } from "../shared/layout/Aside/Aside";
import { Main } from "../shared/layout/Main/Main";
import './app.scss'

function App() {

  return (
    <div className="app">
      <aside className="app__aside">
        <Aside />
      </aside>
     
      <main className="app__main">
        <Main />
      </main>
    </div>
  )
}

export default App;
