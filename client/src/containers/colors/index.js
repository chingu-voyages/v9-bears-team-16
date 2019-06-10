import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import ColorPalleteTile from '../../components/color-pallete-tile'
export default function Colors() {
  return (
    <>
      <div>
        This page list existing colors schemes that you can use for theme.
      </div>
      <Query query={COLORS_QUERY}>
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
              <h1>Color Pallets</h1>
              {data.colorPalletes && data.colorPalletes.map(ColorPalleteTile)}
            </>
          )
        }}
      </Query>
    </>
  )
}

export const COLORS_QUERY = gql`
  query ColorsQuery {
    colorPalletes {
      id
      title
      primaryLight
      accentLight
      accentBrand
      accentDark
      primaryDark
    }
  }
`
