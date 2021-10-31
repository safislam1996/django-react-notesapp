   
import React from 'react'
import { Link } from 'react-router-dom'

const getTime=(note)=>{
    return new Date(note.updated_at).toLocaleTimeString()
}
const getDate=(note)=>{
    return new Date(note.updated_at).toLocaleDateString()
}
const getTitle=(note)=>{
    let title=note.body.split('\n')[0]
    if(title.length>45){
        return title.slice(0,45)
    }
    return title
}

const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item" >
               <h3>{getTitle(note)}</h3>
               <p><span>{getTime(note)} {getDate(note)}</span></p>
            </div>

        </Link>
    )
}

export default ListItem