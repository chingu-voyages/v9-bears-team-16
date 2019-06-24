import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import FontPairingTile from '../../components/font-pairing-tile'

import fetchFonts from '../../utilities/fetch-fonts'

export default function Fonts() {
  const [ font, setFont ] = useState('');



  return (
    <>
      <div>
        This page list existing font pairings that you can use for theme.
      </div>
      <Query query={FONTS_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div>
                <div>Loading ...</div>
              </div>
            )
          }

          if (error) {
            return (
              <div>
                <div>An unexpected error occured.</div>
              </div>
            )
          }

          return (
            <>
              <h1>Font Pairings</h1>
              <button onClick={handleClick} >Click Me</button>
              <div>{font}</div>
              {data.fontPairings && data.fontPairings.map(FontPairingTile)}
            </>
          )
        }}
      </Query>
    </>
  )

  function handleClick(e) {
    e.preventDefault();
    fetchFonts().then(result => {
      console.log(result);
      setFont(result.content.family);
      console.log(result.content.family);
      return;
    })
  }
}

export const FONTS_QUERY = gql`
  query FontsQuery {
    fontPairings {
      id
      title
      primary
      secondary
    }
  }
`
