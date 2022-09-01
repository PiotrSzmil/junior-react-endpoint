import { useQuery, gql } from '@apollo/client'
import React from 'react'

const GET_CATEGORY = gql`
  query{
    categories {
        name
  }
}
`

export default function app() {
  
    const obj = useQuery(GET_CATEGORY);

   console.log({error, loading, data}); 

    return (
    <div></div>
  )
}
