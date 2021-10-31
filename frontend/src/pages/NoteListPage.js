import React,{useEffect, useState} from 'react'
import AddButton from '../components/AddButton'

import { Header } from '../components/Header'
import ListItem from '../components/ListItem'
import NotePage from './NotePage'
function NoteListPage() {

    const [notes,setNote]=useState([])

   useEffect(()=>{
    getNotes()
   },[])
   let getNotes=async ()=>{
       let response= await fetch("/api/notes/")
       let data=await response.json()
       setNote(data)
   }
    return (
        <div className="notes">
            <div className="notes-header">
               <h3 className="header-title">&#98782; Notes</h3>
               <p className="notes-length">{notes.length}</p>
            </div>
            <div className="notes-list">
                { notes.map((note,index)=>(
                    <ListItem key={index} note={note}/>
                ))}
            </div>
            <AddButton/>
        </div>
    )
}

export default NoteListPage