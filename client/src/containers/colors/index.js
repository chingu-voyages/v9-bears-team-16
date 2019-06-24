import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import ColorPalleteTile from '../../components/color-pallete-tile'
import styled from 'styled-components';
import fetchColors from '../../utilities/fetch-colors'

import './colors.scss';

export default function Colors() {
  const [ color, setColor ] = useState('');
  const [ colorArr, setColorArr ] = useState([]);

  const Container = styled.div`
    background-image: linear-gradient(45deg, ${color.primaryLight}, ${color.accentLight}, ${color.accentBrand}, ${color.accentDark}, ${color.primaryDark});
    min-height: 20vh;
  `;

  return (
    <>
      {/* <div>
        This page list existing colors schemes that you can use for theme.
      </div> */}
      <Query query={COLORS_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div className="colors">
                <div className="colors-loading">Loading ...</div>
              </div>
            )
          }

          if (error) {
            return (
              <div className="colors">
                <div className="colors-error">An unexpected error occured.</div>
              </div>
            )
          }
          console.log(data.colorPalletes);
          setColorArr(data.colorPalletes);
          console.log(colorArr);
          return (
              <div className="colors">
                <h1 className="colors-title">Color Pallets</h1>
                <Container><button onClick={handleClick}>Change Color</button></Container>
                
                <div className="colors-main">
                  <div className="colors-main-info">
                    {data.colorPalletes && data.colorPalletes.map(ColorPalleteTile)}
                  </div>
                  
                  <div className="colors-main-color">
                    {colorArr.map(item => {
                      return <div className="colors-tile">
                        <div className="colortile" style={{backgroundColor: item.primaryLight}}>{item.primaryLight}</div>
                        <div className="colortile" style={{backgroundColor: item.accentLight}}>{item.accentLight}</div>
                        <div className="colortile" style={{backgroundColor: item.accentBrand}}>{item.accentBrand}</div>
                        <div className="colortile" style={{backgroundColor: item.accentDark}}>{item.accentDark}</div>
                        <div className="colortile" style={{backgroundColor: item.primaryDark}}>{item.primaryDark}</div>
                      </div>
                    })}
                  </div>
                </div>

              </div>
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
