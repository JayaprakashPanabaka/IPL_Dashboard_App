import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

const App = () => (
  <>
    {/* <h1>Remove this heading and write your code here</h1> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />

      {/* <Home />
    <TeamMatches />
    <NotFound /> */}
    </Switch>
  </>
)

export default App
