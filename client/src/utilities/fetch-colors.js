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
  return fetch(`http://colormind.io/api/`, {
    method: 'POST',
    body: JSON.stringify({
      model: `ui`,
      input: [primaryLight, accentLight, accentBrand, accentDark, primaryDark]
    })
  }).then(response => response.json())
}
