import React from 'react'

export default function FontPairingTile({ id, title, primary, secondary }) {
  return (
    <div style={{ padding: '2em' }}>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <div>primary: {primary}</div>
      <div>secondary: {secondary}</div>
    </div>
  )
}
