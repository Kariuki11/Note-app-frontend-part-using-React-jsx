import React from 'react'
import NoteCard from './NoteCard'

export default function NoteCardContainer({notes, loading}) {
  return (
    <div className="container">
    <div className="note-has-grid row">

      {notes.map(note => <NoteCard key={note.id} note={note} />)}

      
    </div>
    </div>
  )
}
