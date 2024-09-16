import React from 'react'
import NoteCard from './NoteCard'

export default function NoteCardContainer() {
  return (
    <div className="container">
    <div className="note-has-grid row">
        <h4>Note Card Container.</h4>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      
    </div>
    </div>
  )
}
