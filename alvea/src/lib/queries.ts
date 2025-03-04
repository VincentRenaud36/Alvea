import { gql } from '@apollo/client';

// REQUÊTES UTILISATEUR
export const GET_UTILISATEURS = gql`
  query GetUtilisateurs {
    utilisateurs {
      id
      prenom
      nom
      mail
    }
  }
`;

// REQUÊTES MENTOR
export const GET_MENTORS = gql`
  query GetMentors { 
    mentors {
      id
      mentor_Profession
      mentor_Annee_experience
      mentor_Bio
      utilisateur {
        id
        prenom
        nom
        mail
      }
      entreprise {
        id
        entreprise_nom
        entreprise_secteur
      }
      videos {
        id
        video_titre
        video_url
      }
    }
  }
`;

// REQUÊTES ETUDIANT
export const GET_ETUDIANTS = gql`
  query GetEtudiants {
    etudiants {
      id
      etudiant_ecole
      etudiant_niveau_etudes
      etudiant_champs_etudes
      etudiant_situation_scolaire
      utilisateur {
        id
        prenom
        nom
        mail
      }
    }
  }
`;

// REQUÊTES RENCONTRE
export const GET_RENCONTRES = gql`
  query GetRencontres {
    rencontres {
      id
      rencontres_debut
      rencontres_fin
      rencontres_url
      rencontres_created_at
      etudiant {
        id
        utilisateur {
          id
          prenom
          nom
        }
      }
      mentor {
        id
        utilisateur {
          id
          prenom
          nom
        }
      }
    }
  }
`;

// REQUÊTES ENTREPRISE
export const GET_ENTREPRISES = gql`
  query GetEntreprises {
    entreprises {
      id
      entreprise_nom
      entreprise_secteur
      entreprise_description
      entreprise_site_web
    }
  }
`;

// REQUÊTES CENTRE DE FORMATION
export const GET_CENTRES_FORMATION = gql`
  query GetCentresFormation {
    centreFormations {
      id
      centre_formation_nom
      centre_formation_adresse
      centre_formation_ville
      centre_formation_description
      centre_formation_url
      formations {
        id
        formation_titre
      }
    }
  }
`;

// REQUÊTES FORMATION
export const GET_FORMATIONS = gql`
  query GetFormations {
    formations {
      id
      formation_titre
      formation_description
      formation_duree
      formation_niveau
      formation_modalite
      formation_url
    }
  }
`;

// REQUÊTES FORUM
export const GET_FORUMS = gql`
  query GetForums {
    forums {
      id
      forum_title
      forum_texte
      forum_date_de_creation
      utilisateur {
        id
        prenom
        nom
      }
      forumComs {
        id
        forum_com_text
        forum_com_date_de_creation
      }
    }
  }
`;

// REQUÊTES EVALUATION
export const GET_EVALUATIONS = gql`
  query GetEvaluations {
    evaluations {
      id
      evaluations_note
      evaluations_avis
      etudiant {
        id
        utilisateur {
          id
          prenom
          nom
        }
      }
    }
  }
`;

// REQUÊTES VIDEO
export const GET_VIDEOS = gql`
  query GetVideos {
    videos {
      id
      video_titre
      video_texte
      video_url
      video_date_de_creation
      entreprise {
        id
        entreprise_nom
      }
    }
  }
`;

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