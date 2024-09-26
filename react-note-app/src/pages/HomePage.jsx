import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'

const HomePage = ({notes, loading, handleFilterText}) => {
  return (
    <>
    
    {notes.length < 1 ? <h4 style={{textAlign: "center", marginTop: "17px"}}>No notes Found!</h4> :  <Filter handleFilterText={handleFilterText} />}
    <NoteCardContainer notes={notes} loading={loading}/>
    </>
  )
}

export default HomePage