import Login from './binding/Login'
import store from './redux/store'
import { Provider } from 'react-redux'
import {Routes, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Provider store={store} >
      <div className="App">

      <Routes>
      
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />}/>

      </Routes>

      </div>

    </Provider>
    
  );
}

export default App;
