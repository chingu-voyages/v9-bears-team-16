import React from 'react'

export default function FontPairingTile({
  id,
  title,
  titleFont,
  subTitleFont,
  contentFont
}) {
  return (
    <div style={{ padding: '2em' }}>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <div>
        titleFont: {titleFont.title} {titleFont.variant}
      </div>
      <div>
        subTitleFont: {subTitleFont.title} {subTitleFont.variant}
      </div>
      <div>
        contentFont: {contentFont.title} {contentFont.variant}
      </div>
    </div>
  )
}
