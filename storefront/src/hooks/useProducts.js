import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
   query{
  categories {
    products {
      id
      name
      gallery
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
}
`;

export const useProducts = () => {
    const { error, loading, data } = useQuery(GET_PRODUCTS);

    return {
        error,
        loading,
        data
    }
}