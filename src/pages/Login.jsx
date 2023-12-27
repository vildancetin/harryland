import { useState } from "react"
import { useLogin } from "../context/LoginProvider"

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {login}=useLogin()

    const handleSubmit=(e)=>{
        e.preventDefault()
        login({email,password})
    }
    console.log({email,password})
  return (
    <section className="bg-gray-50 dark:bg-gray-900 login-container">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div className="w-full bg-gray-300 bg-opacity-25 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold uppercase text-center leading-tight tracking-tight text-gray-200 md:text-2xl dark:text-white">
                  Welcome to Magic World
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" autoComplete="off" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium uppercase text-gray-200 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-red-800 text-gray-900 sm:text-sm rounded-lg focus:ring-red-800 focus:border-red-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white uppercase">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-red-800 text-gray-900 sm:text-sm rounded-lg focus:ring-red-800 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                  </div>

                  <button type="submit" className="w-full text-white bg-red-800 hover:bg-yellow-600 focus:ring-2 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 uppercase">Sign in</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login