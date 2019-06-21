import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import ColorPalleteTile from '../../components/color-pallete-tile'
import styled from 'styled-components';
import fetchColors from '../../utilities/fetch-colors'

export default function Colors() {
  const [ color, setColor ] = useState('');

  const Container = styled.div`
    background-image: linear-gradient(${color.primaryLight}, ${color.accentLight}, ${color.accentBrand}, ${color.accentDark}, ${color.primaryDark});
    min-height: 20vh;
  `;

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
              <Container><button onClick={handleClick}>Change Color</button></Container>
              
              {data.colorPalletes && data.colorPalletes.map(ColorPalleteTile)}

            </>
          )
        }}
      </Query>
    </>
  )

  function handleClick(e) {
    e.preventDefault();
    fetchColors()
      .then(result => {
        setColor(result);
      });
    return ;
  }
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
