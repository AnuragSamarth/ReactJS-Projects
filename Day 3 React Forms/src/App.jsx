import { useState } from "react"

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email:'',
    message:''
  })

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prevFormData)=> ({...prevFormData, [name]:value}))
    // console.log({name,value})
    // console.log(formData)
  }

  const handleSubmit = (event)=>{
       event.preventDefault();
       console.log(formData);
  }
 
  return (
    <div className=" w-full h-screen bg-slate-400 flex align-middle justify-center">
     <form onSubmit={handleSubmit} className=" mt-10">
      <div className=" border-2 border-black"> 
      <div>
      <label htmlFor="name" className=" text-lg">
        Enter your name: <input type="text" id="name" name='name' value={formData.name} onChange={handleChange} className=" p-3 border-2 border-black outline-none  rounded-md mb-4"/>
      </label>
      </div>
      <div>
      <label htmlFor="email"  className=" text-lg">
        Enter your email: <input type="email" id="email" name='email'value={formData.email} onChange={handleChange} className=" p-3 border-2 border-black outline-none  rounded-md mb-4" />
      </label>
      </div>
      <div>
      <label htmlFor="message"  className=" text-lg">
        Message : <textarea name="message" id="message" cols="30" rows="10" value={formData.message} onChange={handleChange} className=" p-3 border-2 border-black outline-none  rounded-md mb-4"/>
      </label>
      </div>
      <div className=" ml-36">
      <input type="submit" className="p-3 border-2 border-black bg-green-600 rounded-2xl cursor-pointer"/>
      </div>
      </div>
    </form>
    </div>
  )
}

export default App
