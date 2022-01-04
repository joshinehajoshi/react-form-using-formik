import { Container } from 'react-bootstrap';
import './App.css';
import signUpImage  from './images/signup.jpg'

function App() {
  return (
   <div className="container mt-3">
     <div classNam="row">
        <div className="col-md-5">
          SignUp
        </div>
        <div className="col-md-7">
          <img src={signUpImage}></img>
        </div>
     </div>

   </div>
  );
}

export default App;
