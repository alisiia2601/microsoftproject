'use client'
import {useState} from 'react'
import styles from '../smartmatch/SmartMatch.module.css'
import UploadCV from './UploadCV'

export default function SmartMatch() {
  const [files,setFiles] = useState([{
    name:'myFile.pdf'
  }])
  const removeFile =(filename)=>{
      setFiles(files.filter(file=>file.name !== filename))
  }
 console.log(files)
  return (
    <div className={styles.mainContent}>
        <h1>SmartMatch©</h1>
        <p>
           Ladda upp ditt CV och hämta in LinkedIn för att förfina dina matchningar
        </p>
        <div>
          <UploadCV files={files} setFiles={setFiles} removeFile={removeFile}/>
        </div>
    </div>
  )
}
