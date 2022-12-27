import {useState} from 'react';
import {Draggable} from "react-beautiful-dnd";

const Card = () => {
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
            true,
            text:props.card.text
        })
    }


  return (
    {
        if(!editing){
            return(
                <Draggable>
                <div 
                className='card'
                onMouseEnter={startHover}
                onMouseLeave={endHover}
            >{
                hover && (
                    <div className='card-icons'>
                        <div className='card-icon' onClick={startEditing}>
                            <ion-icon name="create"/>
                        </div>
                    </div>
                ) }
                {
                    card.text
                }   
            </div>
                </Draggable>);
        }else{
            return(
                
            )
        }

    }
    
  )
}

export default Card;
