import {useForm} from 'react-hook-form'

// React useFormHook - search React hook form 

const Sep30 = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  
  const submitHandler = (data)=>{
    console.log(data);
  }
  
  return (
    <>
    <form onSubmit={handleSubmit(submitHandler)}>
      <input {...register("exampleRequired", { required: true })} /> <br />
      <input {...register("firstName", { required: true, maxLength: 20 })} /> <br />
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
    </>
  )
}

export default Sep30