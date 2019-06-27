import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import FontPairingTile from '../../components/font-pairing-tile'
import FontSelector from '../../components/font-selector'

export default function Fonts() {
  return (
    <>
      <div>
        This page list existing font pairings that you can use for theme.
      </div>
      <FontSelector />
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

              {data.fontPairings && data.fontPairings.map(FontPairingTile)}
            </>
          )
        }}
      </Query>
    </>
  )
}

export const FONTS_QUERY = gql`
  query FontsQuery {
    fontPairings {
      id
      title
      titleFont {
        title
        variant
      }
      subTitleFont {
        title
        variant
      }
      contentFont {
        title
        variant
      }
    }
  }
`

export const FONT_PAIRING_MUTATION = gql`
  mutation(
    $title: String!
    $titleFont: FontCreateOneInput!
    $subTitleFont: FontCreateOneInput!
    $contentFont: FontCreateOneInput!
  ) {
    createFontPairing(
      data: {
        title: $title
        titleFont: $titleFont
        subTitleFont: $subTitleFont
        contentFont: $contentFont
      }
    ) {
      id
      title
      titleFont {
        title
        variant
      }
      subTitleFont {
        title
        variant
      }
      contentFont {
        title
        variant
      }
    }
  }
`

// const expectedArgsForMutation = {
//   title: 'create font pairing mutation',
//   titleFont: {
//     create: {
//       title: 'title font from mutation',
//       variant: 'regular'
//     }
//   },
//   subTitleFont: {
//     create: {
//       title: 'subtitle font from mutation',
//       variant: 'regular'
//     }
//   },
//   contentFont: {
//     create: {
//       title: 'content font from mutation',
//       variant: 'regular'
//     }
//   }
// }
