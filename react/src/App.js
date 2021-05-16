import Login from './component/Login';
import Register from './component/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
function App() {

  const margintopForm = '5%', borderForm = "col-4 shadow-lg p-3 mb-5 rounded bg-white"
  return (
    <div>
      <BrowserRouter>
        <div class="row" style={{ marginTop: margintopForm }}>
          <div class="col-4">
          </div>
          <div class={borderForm}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Register" component={Register} />
            </Switch>
          </div>
          <div class="col-4">
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
