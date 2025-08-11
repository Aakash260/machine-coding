import React, { useRef, useState } from 'react'

const Comments = ({comment,addReply}) => {
    console.log(comment)
    const [showReplyBox,setReplyBox]=useState(false)
    const [replyText,setReplyText]=useState('')
    const inputRef=useRef(null)
    const handleRepy=()=>{
setReplyBox(true)
inputRef.current.focus();
    }
    const handleCancelBtn=()=>{
      setReplyBox(false)
      setReplyText('')
    }

    const handleRepySave=(id)=>{
      console.log(id)
    }
    const handleKeyDown=(e,id)=>{
       
    if(e.key==='Enter'){
     
      handleRepySave(id)
      addReply(id,replyText)
      setReplyBox('')
      setReplyText('')
    }
    }
  return (
    <li  key={comment.id} className='my-6 ml-20'>
        {comment.display}
        {
          !showReplyBox && (
            <button onClick={handleRepy} className='ml-4 p-1 bg-red-400 rounded-md'>
              Reply
            </button>
          )
        }
        {showReplyBox?(
          <div className='space-y-2'>
          <br />
          <input onKeyDown={(e)=>handleKeyDown(e,comment.id)} type="text" className='border' ref={inputRef} value={replyText} onChange={(e)=>setReplyText(e.target.value)}/>
          <br />
      <button
      
      className='p-1 rounded-md bg-green-300 cursor-pointer mx-4' >save</button>
         
<button
onClick={handleCancelBtn}
className='p-1 rounded-md bg-red-300 cursor-pointer' >cancel</button>
          </div>
        ):null}
        {
          comment.children.length?(
            <ul>
              {
                comment.children.map((item)=>{
                  return <Comments key={item.id} comment={item} addReply={addReply}/>
                })
              }
            </ul>
          ):null
        }
    </li>
  )
}

export default Comments