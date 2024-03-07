import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY

const ProfileForm = () => {
  const authCtx = useContext(AuthContext)
  const newPasswordRef = useRef()

  const submitHandler= async (e)=>{
    e.preventDefault()
    const enteredNewPassword = newPasswordRef.current.value

    await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`,{
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    newPasswordRef.current.value = ''
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef} minLength='6'/>
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
