import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import '../Styles/LoginPage.css';
import { auth } from "../Firebase/firebase-config";
import {
    signInWithEmailAndPassword
} from '@firebase/auth'
import { useDispatch} from "react-redux";
import { updateUser } from "../Redux/cartSlice";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
function LoginPage(){
    // useState to save the input data such as email and password
  // and also the error message when an error occurs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

   // Signs in using provided email address and password
  // naviagtes to homepage and displays email on header when signed in successfully

  const login =async()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
        setError('')
        console.log('user logged in: ', cred.user)
        dispatch(updateUser(email))
        navigate('/')
    })
    .catch((err)=>{
        switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-not-found":
            case "auth/user-disabled":
              setError("We cannot find an account with that email address");
              break;
            case "auth/wrong-password":
              setError("Your password is incorrect");
              break;
            case "auth/weak-password":
              setError("Your password should be at least 6 characters");
              break;
            case "auth/internal-error":
              setError("Some internal error has occured");
              break;
            default:
              setError(err.code)
          }
    })
  }
  return(
    <div>
    <div className='login container' id='login'>
      <Link to='/'>
        <img className='login__logo mx-auto d-block mt-2' src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' alt='' />
      </Link>
      <div id='display_error'>
        {error.length !== 0 ? (
          <div className="card mb-3 border-danger" id='error_card'>
            <div className="row">
              <div className="col-2">
                <WarningAmberIcon sx={{ fontSize: 40, color: "rgb(220, 0, 0)", marginTop: 1, marginLeft: 2, padding: "3px"}} />
              </div>
              <div className="col-10">
                <div className="card-body">
                  <h5 className="card-title text-danger fs-5">There was a problem</h5>
                  <p className="card-text" style={{ "fontSize": "82%" }}>{error}</p>
                </div>
              </div>
            </div>
          </div>
        ) :
          <></>
        }
      </div>
      <div className='login__card card rounded-1 p-4'>
        <h2>Sign-in</h2>
        <div>
          <div className="mt-2">
            <label className="" htmlFor="email"><small><strong>Email</strong></small></label>
            <input className="email form-control form-control-sm" autoFocus
              onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div className="mt-2">
            <label className="" htmlFor="pwd"><small><strong>Password</strong></small></label>
            <input className="form-control form-control-sm"
              onChange={(e) => setPassword(e.target.value)} type="password" id="pwd" />
          </div>
          <div className="mt-4">
            <button className='btn btn-warning btn-sm form-control' id='signin__button' onClick={login}>Sign in</button>
          </div>
        </div>
        <p className='mt-3 mb-0' id='policy'>
          By continuing, you agree to Amazon's <span id='policy__1'>Conditions of Use</span> and <span id='policy__1'>Privacy Notice</span>.
        </p>
      </div>
      <div className='mt-3 mb-2'>
        <span id='hr-lines'>New to Amazon?</span>
      </div>
      <div>
        <button className='btn btn-sm form-control' id='login__createButton' onClick={() => navigate('/signup')}>
          Create your Amazon account
        </button>
      </div>
    </div>
    <div className='mt-4' id='shadow'>
      <div className='' id='border__left' />
      <div className='d-flex mx-auto' id='help'>
        <div>Conditions of Use</div>
        <div>Privacy Notice</div>
        <div>Help</div>
      </div>
    </div>
    <div className='text-center mt-2' id='copyrights'>
      © 1996-2022, Amazon.com, Inc. or its affiliates
    </div>
  </div>
  )
}
export default LoginPage