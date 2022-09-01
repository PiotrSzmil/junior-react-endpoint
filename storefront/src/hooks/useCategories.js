import { useQuery, gql } from "@apollo/client";

const GET_CATEGORIES = gql`
    query {
        categories {
            name
  }
}
`;

export const useCategories = () => {
    const { error, loading, data } = useQuery(GET_CATEGORIES);

    return {
        error,
        loading,
        data
    }
}