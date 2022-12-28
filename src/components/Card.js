import {useState} from 'react';
import {Draggable} from "react-beautiful-dnd";

const Card = (index, handleChangeText) => {
    const [hover, setHover] = useState(false);
    const [ editing, setEditging] = useState(false)

    const startHover = ()=>{
        setHover(true)
    }

    const endHover = () =>{
        setHover(false)
    }

    startEditing=()=>{
        setEditging((text)=>{
            text:Card.text;
        })
    }


  return ({
            editing !== false  ? ( return{
                <Draggable>
                <div 
                className='card'
                onMouseEnter={startHover}
                onMouseLeave={endHover}>
                {
                    hover && (
                    <div className='card-icons'>
                        <div className='card-icon' onClick={startEditing}>
                            <ion-icon name="create"/>
                        </div>
                    </div>
                ) }
                {Card.texT}   
            </div>
                </Draggable>
            })
        :
        
            return(
                
            )
        

    }
    
  )
}

export default Card;
