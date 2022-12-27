import {useState} from 'react'

const CardEditor = () => {
    const [text, setText] = useState("")

    handleChangeText =(e)=>{
        setText(()=>{
            text:e.target.value
        })
    }


  return (
    <div className='Edit-Card'>
        <div className='Card'>
                
        </div>
        
    </div>
  )
}

export default CardEditor
