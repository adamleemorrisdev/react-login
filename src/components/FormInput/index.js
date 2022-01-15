// component files will live here

const FormInput = (props) => {
 return(<div>
  <label htmlFor='email'>Email</label>
  <input
      type='email'
      className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 hover:shadow-md`}
      id='email'
      placeholder='Your Email'
  />
</div>) 
}

export default FormInput;