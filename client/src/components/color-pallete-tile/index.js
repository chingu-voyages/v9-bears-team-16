import React from 'react'

export default function ColorPalleteTile({
  id,
  title,
  primaryLight,
  accentLight,
  accentBrand,
  accentDark,
  primaryDark
}) {
  return (
    <div style={{ padding: '2em' }}>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <div>primaryLight: {primaryLight}</div>
      <div>accentLight: {accentLight}</div>
      <div>accentBrand: {accentBrand}</div>
      <div>accentDark: {accentDark}</div>
      <div> primaryDark: {primaryDark}</div>
    </div>
  )
}
