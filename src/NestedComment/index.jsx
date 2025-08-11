import React, { useState } from 'react'
import Comments from './Comments'
const NestedComment = () => {
const [input,setInput]=useState('')
const [comments,setComments]=useState([
    {
        id:1,
        display:"hello",
        children:[
            {
                id:2,
                display:'very nice',
                children:[
                    {id:3,
                    display:'amazing',
                children:[]
                }
                ]
            }
        ]
    },
    {
        id:4,
        display:'wow',
        children:[]
    }
])

const addReply=(parentId,text)=>{

    const copy=[...comments];
    addComments(copy,parentId,text)
}

    const addComments = (comments, parentId, text) => {

        for (let i = 0; i < comments.length; i++) {
            let comment = comments[i];
            if (comment.id === parentId) {
                console.log('***********First Level*******', parentId, text);
                comment.children.unshift(newComment(text));
            }
        }

        for (let i = 0; i < comments.length; i++) {
            let comment = comments[i];
            console.log('----children-parentId--------', parentId)
            addComments(comment.children, parentId, text);
        }
    }
 

    const handleInputChange=(e)=>{
setInput(e.target.value)
    }

    const newComment=(text)=>{
        return {
            id:new Date().getTime(),
            display:text,
            children:[]
        }
    }
    const handleNewComment=()=>{
if(input){
setComments([...comments,newComment(input)])
}
    }
  return (
    <div>
        
        <h1>NestedComment</h1>

<div>
    <input className='border p-1' value={input} type="text" placeholder='your comment...' onChange={handleInputChange} />
</div>
<div className='my-4'>
    <button className='p-1 rounded-md bg-blue-300 cursor-pointer' onClick={handleNewComment}>Comment</button>
</div>
<div>
{
  comments.map((item)=>{
        console.log(item)
        return <Comments key={item.id} comment={item} addReply={addReply}/>
     })
}
</div>
    </div>
  )
}

export default NestedComment