import React from 'react'

const EditButton  = ({handleCancel, handleSave}) => {
  return (
    <div className='Edit-buttons'>
        <div onClick={handleSave}>
            {save}
        </div>
        {
            handleDelete && (
                <div>
                Delete
                </div>
            )
        }
        <div onClick={handleCancel}>
            Cancel
        </div>
      
    </div>
  )
}

export default  EditButton
