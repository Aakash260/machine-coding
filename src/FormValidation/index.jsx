import React,{useState} from 'react'

const FormValidation = () => {
    const defaultValues={
        firstName:{
            id:'firstName',
            label:'First Name',
            type:'text',
            placeHolder:'First Name...',
            value:'',
            isError:false,
            errorMsg:"First Name can't be empty"
        },
          lastName:{
            id:'lastName',
            label:'Last Name',
            type:'text',
            placeHolder:'Last Name...',
            value:'',
            isError:false,
            errorMsg:"Last Name can't be empty"
        },
         email:{
            id:'email',
            label:'Email Name',
            type:'email',
            placeHolder:'Email Name...',
            value:'',
            isError:false,
            errorMsg:"Email Name can't be empty"
        },
        password:{
            id:'password',
            label:'Password Name',
            type:'password',
            placeHolder:'Password Name...',
            value:'',
            isError:false,
            errorMsg:"Password Name can't be empty"
        },
        confirmPassword:{
            id:'confirmPassword',
            label:'confirm Password Name',
            type:'password',
            placeHolder:'confirm Password Name...',
            value:'',
            isError:false,
            errorMsg:"confirm Password Name can't be empty"
        },
    }
    const [formData,setFormData]=useState(defaultValues)

    const handleInput=(e)=>{
const key=e.target.id;
const value=e.target.value;
const copyObj={...formData}
copyObj[key].value=value
setFormData(copyObj)

    }

    const isValidForm=()=>{
        const copy={...formData}

        Object.keys(copy).forEach(element => {
            const obj=copy[element]
obj.isError=!obj.value?true:false;
          
        });
        setFormData(copy)
    }
const handleSubmit=(e)=>{
    console.log('submitted')
e.preventDefault();
isValidForm()
}

  return (
    <div>
        <h2>FormValidation</h2>
<form action="" className='space-y-4' onSubmit={handleSubmit}>
     {
        Object.keys(formData).map((key)=>{
            const {id,label,type,placeHolder,value,isError,errorMsg}=formData[key]
            return <div key={id}>
                <label htmlFor="">{label}:</label>
                <input onChange={handleInput} className='border ml-2' id={id} placeholder={placeHolder}  type={type} value={value}/>
                {
                    isError && <div className='text-red-400'>{errorMsg}</div>
                }
            </div>

        })
     }
     <div>
        <button type='submit'  className='p-1 rounded-md cursor-pointer bg-blue-200 '>Submit</button>
     </div>
</form>
    </div>
  )
}

export default FormValidation