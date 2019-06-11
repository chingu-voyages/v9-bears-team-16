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

export default function fetchColors() {
  return fetch(`http://colormind.io/api/`, {
    method: 'POST',
    body: JSON.stringify({ model: `ui` })
  }).then(response => response.json())

}
