import React, { useState } from 'react'
import fetchFonts from '../../utilities/fetch-fonts'

export default function FontSelector() {
  const [font, setFont] = useState('')
  const [title, setTitle] = useState('')
  return (
    <>
      <button onClick={handleClick}>Get font pairings</button>
      <div style={{ whiteSpace: 'pre' }}>{JSON.stringify(font, null, 4)}</div>
      {font && font !== 'loading...' && (
        <>
          <input
            type="text"
            placeholder="add title here"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
          <button
            onClick={e => {
              e.preventDefault()
              //add graphQL mutation here
              setFont('')
              setTitle('')
            }}>
            Save font pairing button here
          </button>
        </>
      )}
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
