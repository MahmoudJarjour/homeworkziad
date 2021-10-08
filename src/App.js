
import './App.css';
import HomePage from './Route/HomeRoute';
import {BrowserRouter} from 'react-router-dom';

const App=()=> {
  return (
   <>
      <BrowserRouter>

        <div>
          <HomePage />
        </div>

      </BrowserRouter>

   </>
  );
}

export default App;
