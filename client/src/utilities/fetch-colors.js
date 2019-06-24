/*
basic color fetch example need to change function signature to accept and return in the following format

{
    primaryLight,
    accentLight,
    accentBrand,
    accentDark,
    primaryDark
  }

*/

import { rgbToHex, hexToRgb } from './rgbhex'

export default function fetchColors(
  {
    primaryLight = 'N',
    accentLight = 'N',
    accentBrand = 'N',
    accentDark = 'N',
    primaryDark = 'N'
  } = {
    primaryLight: 'N',
    accentLight: 'N',
    accentBrand: 'N',
    accentDark: 'N',
    primaryDark: 'N'
  }
) {
  const parsedInput = [
    primaryLight,
    accentLight,
    accentBrand,
    accentDark,
    primaryDark
  ].map(hex => hexToRgb(hex) || 'N')

  return fetch(`http://colormind.io/api/`, {
    method: 'POST',
    body: JSON.stringify(
      parsedInput.every(value => value === 'N')
        ? { model: `ui` }
        : {
            model: `ui`,
            input: parsedInput
          }
    )
  })
    .then(response => response.json())
    .then(({ result }) => {
      const [
        primaryLight,
        accentLight,
        accentBrand,
        accentDark,
        primaryDark
      ] = result.map(([r, g, b]) => rgbToHex(r, g, b))
      return { primaryLight, accentLight, accentBrand, accentDark, primaryDark }
    })
}
