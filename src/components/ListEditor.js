import {useRef} from 'react';
import TextareaAutosize from 'react-textarea-autosize';


const ListEditor = ({title, handleChangeTitle,deleteList}) => {
     const createRef = useRef()

     const onEnter = e=>{
        if(e.keyCode === 13)
        {
            e.preventDefault();
            SVGAnimatedLengthList();
        }
     }

    const  handleClick =(e) =>{
        const node = createRef.current;
        if(node.contains(e.target))
        {
            return
        }
        // onClickOutside();
     }

  return (
    <div className='ListTitle' ref={createRef}>
        <TextareaAutosize
            autoFocus
            className="ListTitle"
            value={title}
            onChange={handleChangeTitle}
            onKeyDown={onEnter}        
        />
        {
            deleteList && <ion-icon name="trash" onClick={deleteList}/>
        }
    </div>
  )
}

export default ListEditor;
