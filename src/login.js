import React from 'react';
import FormInput from './components/FormInput'; // greyed-out if not used

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const email = e.target.elements.email?.value;
        const password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div className='h-screen flex bg-gray-100'f>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-2xl py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                <FormInput />
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 hover:shadow-md`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green-500 py-2 px-4 text-sm text-black rounded border border-green focus:outline-none hover:shadow-lg `}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

