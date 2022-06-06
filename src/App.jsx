import './App.css'
import Nav from './components/Nav/Nav'
import routes from './routes'
import {useRoutes} from 'react-router-dom'

function App() {
  let router = useRoutes(routes)

  return (
    <div className="App">
      <Nav/>
      {router}
    </div>
  )
}

export default App
