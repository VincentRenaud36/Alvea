import { gql } from '@apollo/client';

export const GET_DATA = gql`
  query MyQuery {
    projets {
      id
      nomProjet
      categorieProjet
      descriptionProjet
      dateProjet
      tagProjet
      colorProjet
      imageProjet {
        url
      }
    }
  }
`;

export const GET_PROJET_BY_ID = gql`
  query GetProjetById($id: ID!) {
    projets(where: { id: $id }) {
      id
      nomProjet
      categorieProjet
      descriptionProjet
      dateProjet
      tagProjet
      colorProjet
      imageProjet {
        url
      }
    }
  }
`; 