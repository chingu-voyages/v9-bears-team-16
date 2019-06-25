import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

// export const CreateFont = ({ title, variant }) => {
//   return (
//     <Mutation mutation={CREATE_FONT}>{/* still need to finish */}</Mutation>
//   )
// }

const CREATE_FONT = gql`
  mutation($title: String!, $variant: String!) {
    createFont(data: { title: $title, variant: $variant }) {
      id
      title
      variant
    }
  }
`

const CREATE_COLOR_PALLETE = gql`
  mutation(
    $title: String
    $primaryLight: String!
    $accentLight: String!
    $accentBrand: String!
    $accentDark: String!
    $primaryDark: String!
  ) {
    createColorPallete(
      data: {
        title: $title
        primaryLight: $primaryLight
        accentLight: $accentLight
        accentBrand: $accentBrand
        accentDark: $accentDark
        primaryDark: $primaryDark
      }
    ) {
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
// const exampleColorPalleteCreateVariables = {
//   "primaryLight": "#F4F3F0",
//   "accentLight": "#AD8A5E",
//   "accentBrand": "#84A9BE",
//   "accentDark": "#987450",
//   "primaryDark": "#48629B"
// }


const CREATE_THEME = gql`
  mutation(
    $title: String!
    $description: String!
    $colors: ColorPalleteCreateOneInput!
    $fonts: FontPairingCreateOneInput!
  ) {
    createTheme(
      data: {
        title: $title
        description: $description
        colors: $colors
        fonts: $fonts
      }
    ) {
      id
      title
      description
      colors {
        id
        primaryLight
        primaryLight
        accentBrand
        accentDark
        primaryDark
      }
      fonts {
        id
        title
        titleFont {
          id
          title
          variant
        }
        subTitleFont {
          id
          title
          variant
        }
        contentFont {
          id
          title
          variant
        }
      }
    }
  }
`

// const exampleThemeCreateVariable = {
//   title: 'fromMutation',
//   description: 'Mutation Test',
//   colors: {
//     create: {
//       primaryLight: '#F4F3F0',
//       accentBrand: '#84A9BE',
//       accentDark: '#987450',
//       accentLight: '#AD8A5E',
//       primaryDark: '#48629B'
//     }
//   },
//   fonts: {
//     create: {
//       titleFont: {
//         create: {
//           title: 'title font from mutation',
//           variant: 'regular'
//         }
//       },
//       subTitleFont: {
//         create: {
//           title: 'subtitle font from mutation',
//           variant: 'regular'
//         }
//       },
//       contentFont: {
//         create: {
//           title: 'content font from mutation',
//           variant: 'regular'
//         }
//       }
//     }
//   }
// }
