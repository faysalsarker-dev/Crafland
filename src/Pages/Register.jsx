import { useContext } from "react";
import { ContextData } from "../context/Context";

const Register = () => {
    const { createUser } = useContext(ContextData)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password= form.password.value;
        createUser(email,password)
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        }).catch(err=>{
          console.log(err);
        })

    }
    return (
      <div className='flex justify-center items-center my-5 flex-col '>
      <Helmet>
          <title>LuxeHaven | Register</title>

      </Helmet>
      <h3 className="text-4xl my-5 font-bold" data-aos="fade-left"
          data-aos-duration="1000">Register LuxeHaven</h3>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 " data-aos="fade-left"
          data-aos-duration="1000">
          <div className="card-body">
              <form onSubmit={handleRegister}>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Name</span>
                      </label>
                      <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Photo Url</span>
                      </label>
                      <input type="text" name="photourl" placeholder="Photo Url" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                      {/* {err === 'Firebase: Error (auth/email-already-in-use).' ?

                          <span className="text-red-500">This email already have on account</span> : <span>{err}</span>} */}
                  </div>
                  <div className="form-control relative">
                      <label className="label">
                          <span className="label-text">Password</span>
                      </label>
                      {/* <input onChange={(e) => handleValid(e.target.value)} type={`${toggle ? 'password' : 'text'}`} name="password" placeholder="password" className="input input-bordered" required />
                      <div onClick={() => setToggle(!toggle)} className="absolute right-2 top-2/4  p-1">
                          {
                              toggle ? <HiEyeOff className=" font-semibold text-2xl" /> : <AiFillEye className=" font-semibold text-2xl" />
                          }
                      </div> */}
                  </div>

                  <div>
                      <p className="mt-2">Password must contain</p>
                      {/* <ul className="  pl-5 mt-2">

                          <li className={`${charecter ? "text-[#4e4c4c]" : "text-[#4e4c4c7e]"} flex items-center gap-2`}
                          >{charecter ? <TiTick className="text-green-500" /> : <RxCross2 className="text-red-500" />}at least 6 characters</li>

                          <li className={`${upper ? "text-[#4e4c4c]" : "text-[#4e4c4c7e]"} flex items-center gap-2`}>{upper ? <TiTick className="text-green-500" /> : <RxCross2 className="text-red-500" />}at least one uppercase letter (A-Z)</li>

                          <li className={`${lower ? "text-[#4e4c4c]" : "text-[#4e4c4c7e]"} flex items-center gap-2`}>{lower ? <TiTick className="text-green-500" /> : <RxCross2 className="text-red-500" />}at least one lowercase letter (a-z)</li>



                      </ul> */}
                  </div>
                  <div className="form-control mt-6">
                      <button className="btn bg-[#c77dff] text-white font-bold text-xl">Register</button>
                  </div>
                  <p className="my-3">Already have an account? <Link to='/login' className="text-primary link-hover">Login now</Link></p>
              </form>
              <div className="divider">or</div>
              <div className='flex justify-center gap-5'>
                  <button onClick={handleGoogleLogin} ><img className=' w-10' src="https://i.ibb.co/3ShjXGS/google.png" alt="google" border="0" /></button>
                  <button onClick={handleGithubeLogin}><img className=' w-14' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="githube" border="0" /></button>
              </div>
          </div>
      </div >
  </div >

          
    );
};

export default Register;