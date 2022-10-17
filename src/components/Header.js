import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
 
 
const Header = () => {
     const {user,singOutUser} = useContext(AuthContext);

     const handleSingOut = () => {
        singOutUser()
        .then(()=>{})
        .catch(error => console.error( error))
     }
      
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>wellcome {user.email}</span> }

                {
                    user?. email ? 
                    <button onClick={handleSingOut} className="btn btn-sm">Sing Out</button> :<Link to ='/login'>Log In</Link>
                
                }
               
            </div>
        </div>
    );
};

export default Header;