import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

export const CreateFont = ({ title, variant }) => {
  return (
    <Mutation mutation={CREATE_FONT}>{/* still need to finish */}</Mutation>
  )
}
const CREATE_FONT = gql`
  mutation($title: String!, $variant: String!) {
    createFont(data: { title: $title, variant: $variant }) {
      id
      title
      variant
    }
  }
`
