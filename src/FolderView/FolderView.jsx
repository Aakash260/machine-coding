import React,{useState} from 'react'


const FolderView = ({files}) => {
    console.log(files)
const [expand,setExp]=useState(false)
  return (
    <div className='w-fit'>
        <div
        onClick={()=>setExp(!expand)}
        >

            {
                files.isFolder?(
                    <button className={expand?'rotate-90':null}> {">"}</button>
                ):null
            }
            {files.name
            }
        </div>
        {
            files.isFolder && expand&&files.children.map((exp)=>(
                <div className='ml-5'>
                    <FolderView files={exp}/>
                </div>
            ))
        }
    </div>
  )
}

export default FolderView