import {useState} from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import List from './List';
import AddList from './AddList';


const Board = ({board, addList}) => {
    const [addingList, setAddingList] = useState(false)

    const toggleAddingList = () =>{
        setAddingList(true)
    }




  return (
    <div>
        <DragDropContext >
                <Droppable droppableId="board" direction='horizontal' type="COLUMN">
                    <div className='Board'>
                        {
                            board.lists.map((listId, index) =>{
                                return <List listId={listId} key={listId} index={index}/>;
                            })
                        }
                    </div>
                    <div className='AddList'>
                        {
                            addingList ? (
                                <AddList toggleAddList={toggleAddingList}/>
                            ) :(
                                <div
                                    onClick={toggleAddingList}

                                >
                                    <ion-icon name="add"/> Add a list
                                </div>

                            )
                        }
                    </div>             
                </Droppable>
        </DragDropContext>
    </div>
  )
}

export default Board
