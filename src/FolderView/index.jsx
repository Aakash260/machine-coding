import React from 'react'
import { files } from './data'
import FolderView from './FolderView'
const Folder = () => {
  return (
    <div>
        <h1>    FolderView</h1>
        <FolderView files={files}/>
    

    </div>
  )
}

export default Folder