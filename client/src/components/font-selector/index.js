import React, { useState } from 'react'
import fetchFonts from '../../utilities/fetch-fonts'

export default function FontSelector() {
  const [font, setFont] = useState('')
  return (
    <>
      <button onClick={handleClick}>Get font pairings</button>
      <div style={{ whiteSpace: 'pre' }}>{JSON.stringify(font, null, 4)}</div>
      <button>Save font pairing button here</button>
    </>
  )
  function handleClick(e) {
    setFont('loading...')
    e.preventDefault()
    fetchFonts().then(result => {
      setFont(result)
      return
    })
  }
}
