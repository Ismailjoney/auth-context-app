import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';


const Register = () => {

    const {createUser,singInWithGoogle} = useContext(AuthContext)
    

    const handdleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(resualt => {
            const user = resualt.user;
            console.log(user)
        })
        .catch(error => {
            console.error(`error`,error)
        })

    }

    const handleGoogleLogIn = () => {
        singInWithGoogle()
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Please Register in your Email address</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handdleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">All ready have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleLogIn} className="btn btn-primary">Google log in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;