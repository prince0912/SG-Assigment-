import {useState} from 'react';


const AddList = () => {
    const [title, setTitle] = useState("")

    const handleChangeTitle =(e)=>{
        setTitle((e)=>(
            title:e.target.value
        ));
    }


  return (
    <div>
      
    </div>
  )
}

export default AddList
