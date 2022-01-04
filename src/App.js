import './App.css';
import signUpImage  from './images/signup.jpg'
import SignUp from './Component/SignUp';

function App() {
  return (
   <div className="container mt-3">
     <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <div className="col-md-7">
          <img className="img-fluid w-100" src={signUpImage}></img>
        </div>
     </div>

   </div>
  );
}

export default App;
