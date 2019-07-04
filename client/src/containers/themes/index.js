import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import ThemeTile from '../../components/theme-tile'

export default function Themes() {
  return (
    <>
      <div>This will be the page that list existing themes</div>
      <Query query={THEME_QUERY}>
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
              <h1>Themes</h1>
              {data.themes && data.themes.map(ThemeTile)}
            </>
          )
        }}
      </Query>
    </>
  )
}

export const THEME_QUERY = gql`
  query ThemeQuery {
    themes {
      id
      title
      colors {
        id
        title
        primaryLight
        accentLight
        accentBrand
        accentDark
        primaryDark
      }
      fonts {
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
  }
`
