import { gql } from "apollo-boost";

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, getBookQuery };
