import React from 'react';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import ListEditor from './ListEditor';


const List = ({list, index}) => {
    const [editingTitle, setEditingTitle] = useState(false);
    const [title, setTitle] = useState()
    const [addCard, setAddCard] = useState(false)

    const toggleAddCard = ()=>{
        setTitle({
            addCard: !addCard
        })
    }

//    const  addCard = async(cardText) =>{

//     }


const toggleEditTitle =()=>{
    setEditingTitle({
        editingTitle:!editingTitle
    })
}

const handleChangeTitle =(e)=>{
    setTitle(
        title:e.target.value)
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
                <div className='ListTitle' onClick={toggleEditingTitle}>
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
