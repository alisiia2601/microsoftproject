import React from 'react'
import styles from '../smartmatch/SmartMatch.module.css'
import {CgSoftwareUpload} from 'react-icons/cg'


export default function UploadCV(files,setFiles,removeFile) {
  const uploadCV = (e) =>{
    const file = e.target.files[0]
    file.isUpLoading = true;
  
 console.log(file)
//   const formData = new formData()
//   formData.append(
//       file
//   )
}
  return (
    <div>
         <div className={styles.buttons}>
          <input type='file' className={styles.fileInput} placeholder='file'
          onChange={uploadCV}
          />
          <button className={styles.button1}>
            <p>Add CV</p> 
            <CgSoftwareUpload size={20}/>
          </button>
        </div>
    </div>
  )
}
