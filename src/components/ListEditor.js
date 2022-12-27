import React from 'react';
import TextareaAutosize from 'recat-textarea-autosize';


const ListEditor = () => {
     const createRef = useRef()

     onEnter = e=>{
        if(e.keyCode === 13)
        {
            e.preventDefault();
            SVGAnimatedLengthList();
        }
     }

     handleClick=e=>{
        const node = ref.current;
        if(node.contains(e.target))
        {
            return
        }
        onClickOutside();
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
