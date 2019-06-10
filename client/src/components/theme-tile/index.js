import React from 'react'
import ColorPalleteTile from '../color-pallete-tile'
import FontPairingTile from '../font-pairing-tile'

export default function ThemeTile({ title, id, colors, fonts }) {
  return (
    <div style={{ padding: '2em' }}>
      <div>Theme Title: {title}</div>
      <div> Theme Id: {id}</div>
      <div>Color Palletes: {ColorPalleteTile(colors)}</div>
      <div>Font Pairings: {FontPairingTile(fonts)}</div>
    </div>
  )
}
