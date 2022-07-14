import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {register, reset} from '../features/authslice/authslice'
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth) 

    const [formdata, setFormdata] = useState({
       
        email: '',
        password: ''
    })
    const { email, password} = formdata

    // useEffect(() => {
    //     if(isSuccess) {
    //         navigate('/home')
    //     }
    //     dispatch(reset())
    // }, [dispatch, user ])

    const onChange = (e) => {
        setFormdata(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
       
        if( !email || !password ) {
            return toast.error('please fill all the blanks')
        }
        // dispatch(register({ email, password }))
        setFormdata({
            
            email: '',
            password: ''
        })
    }
 
    return (
        <div className=" w-1/3 flex flex-col items-center justify-center">
            <h1 className="text-2xl my-6 text-center">Account Login</h1>
            <form className=" w-full flex flex-col items-center justify-center" onSubmit={onSubmit}>
                
                <div className=" w-full flex items-left my-2 justify-center flex-col">
                    <label className="tex-lg my-2">email</label>
                    <input onChange={onChange} value={email} type="email"  name="email" className="input input-bordered w-full roundex-none focus:outline-none" />
                </div>
                <div className=" w-full flex items-left my-2 justify-center flex-col">
                    <label className="tex-lg my-2">password</label>
                    <input onChange={onChange} value={password} name="password" type="password" className="input input-bordered w-full roundex-none focus:outline-none" />
                </div>
                
                <button type="submit" className="btn btn-success mt-4">submmit</button>
            </form> 

        </div>
    )
}

export default Login