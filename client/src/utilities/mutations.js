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
