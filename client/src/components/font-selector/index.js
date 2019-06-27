import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

import fetchFonts from '../../utilities/fetch-fonts'

export default function FontSelector() {
  const [font, setFont] = useState('')
  const [title, setTitle] = useState('')
  return (
    <>
      <button onClick={handleClick}>Get font pairings</button>
      <div style={{ whiteSpace: 'pre' }}>{JSON.stringify(font, null, 4)}</div>
      {font && font !== 'loading...' && (
        <Mutation mutation={FONT_PAIRING_MUTATION}>
          {(createPairing, { data }) => (
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
                  createPairing({
                    variables: {
                      title,
                      titleFont: {
                        create: {
                          title: font.title.family,
                          variant: font.title.variant
                        }
                      },
                      subTitleFont: {
                        create: {
                          title: font.subtitle.family,
                          variant: font.subtitle.variant
                        }
                      },
                      contentFont: {
                        create: {
                          title: font.content.family,
                          variant: font.content.variant
                        }
                      }
                    }
                  })
                  //add graphQL mutation here
                  setFont('')
                  setTitle('')
                }}>
                Save font pairing button here
              </button>
            </>
          )}
        </Mutation>
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
