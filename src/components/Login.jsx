import FacebookLogin from '@greatsumini/react-facebook-login';

const Login = ({handleSuccessfullLogin,error,handleFailedLogin}) => {
    return (

        <div className=' p-16 w-[30rem] bg-white max-sm:w-full max-sm:h-screen max-sm:rounded-none max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center rounded-lg text-center'>
            <h1 className=' text-3xl mb-8 text-gray-600'>Welcome to FB photo downloader</h1>
            <h2 className='text-xl mb-8 text-center text-gray-600'>Your go-to solution for downloading all your favorite Facebook photos in just a few clicks.</h2>
            <FacebookLogin
                appId="7651280911575260"
                onSuccess={handleSuccessfullLogin}
                onFail={handleFailedLogin}
                style={{
                    backgroundColor: '#4a70da',
                    color: '#fff',
                    fontSize: '16px',
                    padding: '12px 60px',
                    border: 'none',
                    borderRadius: '4px',
                    marginBottom: '45px'
                }}
            >Login with Facebook</FacebookLogin>
            {error && <p  className='text-red-400'>Something went wrong!</p>}
            </div>

    );
};

export default Login;