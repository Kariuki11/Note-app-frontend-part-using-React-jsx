import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <ClipLoader
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Loader