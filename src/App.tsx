import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import AtomsAudio from './atoms/audio'

import SayHello from 'ds-package'

export default function App() {
  return (
    <Router>
      <div>
        <p>
          <SayHello name="Robson" />
        </p>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/atoms/audio">Atoms &laquo; Audio</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/atoms/audio">
            <AtomsAudio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}