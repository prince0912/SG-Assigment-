import {useState} from 'react';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import ListEditor from './ListEditor';
import Card from "./Card";
import CardEditor from "./CardEditor";



const List = ({list, index, listId}) => {
    const [editingTitle, setEditingTitle] = useState(false);
    const [title, setTitle] = useState()
    const [addCard, setAddCard] = useState(false)

    const toggleAddCard = ()=>{
        setTitle(true)
    }

//    const  addCard = async(cardText) =>{

//     }


const toggleEditTitle =()=>{
    setEditingTitle(true)
}

const handleChangeTitle =(e)=>{
    setTitle({
        title:e.target.value})
}

const deleteList = async()=>{

}




  return (
    <Draggable draggableId={list._id} index={index}>

    <div>
        {
            editingTitle ? (
                <ListEditor 
                    list={list}
                    title={title}
                    handleChangeTitle={handleChangeTitle}
                    saveList={editingTitle}
                    onClickOutside={editingTitle}
                    deleteList={deleteList}
                />
            ):(
                <div className='ListTitle' onClick={toggleEditTitle}>
                    {list.title}
                </div>
            )}
        <Draggable draggableId={list._id}>
            <div>
                {
                    list.cards.map((cardId, index)=>(
                        <card
                            key={cardId}
                            cardId={cardId}
                            index={index}
                            listId={list._id}
                        />
                    ))}

            </div>
        </Draggable>
    </div>
    </Draggable>
  )
}

export default List
