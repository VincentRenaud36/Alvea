'use client';

import { useQuery } from '@apollo/client';
import {
  GET_UTILISATEURS,
  GET_MENTORS,
  GET_ETUDIANTS,
  GET_RENCONTRES,
  GET_ENTREPRISES,
  GET_CENTRES_FORMATION,
  GET_FORMATIONS,
  GET_FORUMS,
  GET_EVALUATIONS,
  GET_VIDEOS
} from '../../lib/queries';

export default function TestHygraph() {
  const { data: utilisateursData, loading: loadingUtilisateurs } = useQuery(GET_UTILISATEURS);
  const { data: mentorsData, loading: loadingMentors } = useQuery(GET_MENTORS);
  const { data: etudiantsData, loading: loadingEtudiants } = useQuery(GET_ETUDIANTS);
  const { data: rencontresData, loading: loadingRencontres } = useQuery(GET_RENCONTRES);
  const { data: entreprisesData, loading: loadingEntreprises } = useQuery(GET_ENTREPRISES);
  const { data: centresFormationData, loading: loadingCentresFormation } = useQuery(GET_CENTRES_FORMATION);
  const { data: formationsData, loading: loadingFormations } = useQuery(GET_FORMATIONS);
  const { data: forumsData, loading: loadingForums } = useQuery(GET_FORUMS);
  const { data: evaluationsData, loading: loadingEvaluations } = useQuery(GET_EVALUATIONS);
  const { data: videosData, loading: loadingVideos } = useQuery(GET_VIDEOS);

  if (loadingUtilisateurs || loadingMentors || loadingEtudiants || loadingRencontres || 
      loadingEntreprises || loadingCentresFormation || loadingFormations || 
      loadingForums || loadingEvaluations || loadingVideos) {
    return <p className="p-8">Chargement en cours...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Test de connexion Hygraph - Toutes les données</h1>

      {/* Section Utilisateurs */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Utilisateurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {utilisateursData?.utilisateurs?.map((user: any) => (
            <div key={user.id} className="border p-4 rounded-lg shadow">
              <h3 className="font-semibold">{user.prenom} {user.nom}</h3>
              <p className="text-gray-600">{user.mail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Mentors */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Mentors</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {mentorsData?.mentors?.map((mentor: any) => (
            <div key={mentor.id} className="border p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{mentor.utilisateur?.prenom} {mentor.utilisateur?.nom}</h3>
                  <p className="text-gray-600">{mentor.mentor_Profession}</p>
                </div>
                {mentor.entreprise && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {mentor.entreprise.entreprise_nom}
                  </span>
                )}
              </div>
              {mentor.mentor_Bio && <p className="mt-2 text-sm">{mentor.mentor_Bio}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Section Étudiants */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Étudiants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {etudiantsData?.etudiants?.map((etudiant: any) => (
            <div key={etudiant.id} className="border p-4 rounded-lg shadow">
              <h3 className="font-semibold">{etudiant.utilisateur?.prenom} {etudiant.utilisateur?.nom}</h3>
              <p className="text-gray-600">{etudiant.etudiant_ecole}</p>
              <p className="text-sm text-gray-500">{etudiant.etudiant_niveau_etudes}</p>
              <p className="text-sm text-gray-500">{etudiant.etudiant_champs_etudes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Rencontres */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Rencontres</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {rencontresData?.rencontres?.map((rencontre: any) => (
            <div key={rencontre.id} className="border p-4 rounded-lg shadow">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">
                    {rencontre.etudiant?.utilisateur?.prenom} {rencontre.etudiant?.utilisateur?.nom}
                    {' '}<span className="text-gray-500">avec</span>{' '}
                    {rencontre.mentor?.utilisateur?.prenom} {rencontre.mentor?.utilisateur?.nom}
                  </p>
                  <p className="text-sm text-gray-600">
                    {new Date(rencontre.rencontres_debut).toLocaleString()}
                  </p>
                </div>
                {rencontre.rencontres_url && (
                  <a href={rencontre.rencontres_url} target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:underline">
                    Lien
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Entreprises */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Entreprises</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {entreprisesData?.entreprises?.map((entreprise: any) => (
            <div key={entreprise.id} className="border p-4 rounded-lg shadow">
              <h3 className="font-semibold">{entreprise.entreprise_nom}</h3>
              <p className="text-gray-600">{entreprise.entreprise_secteur}</p>
              {entreprise.entreprise_description && (
                <p className="mt-2 text-sm">{entreprise.entreprise_description}</p>
              )}
              {entreprise.entreprise_site_web && (
                <a href={entreprise.entreprise_site_web} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline text-sm">
                  Site web
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section Centres de Formation */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Centres de Formation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {centresFormationData?.centreFormations?.map((centre: any) => (
            <div key={centre.id} className="border p-4 rounded-lg shadow">
              <h3 className="font-semibold">{centre.centre_formation_nom}</h3>
              <p className="text-gray-600">{centre.centre_formation_ville}</p>
              <p className="text-sm text-gray-500">{centre.centre_formation_adresse}</p>
              {centre.formations && (
                <div className="mt-2">
                  <p className="font-semibold text-sm">Formations :</p>
                  <ul className="list-disc list-inside text-sm">
                    {centre.formations.map((formation: any) => (
                      <li key={formation.id}>{formation.formation_titre}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section Formations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Formations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formationsData?.formations?.map((formation: any) => (
            <div key={formation.id} className="border p-4 rounded-lg shadow">
              <h3 className="font-semibold">{formation.formation_titre}</h3>
              <p className="text-gray-600">Niveau : {formation.formation_niveau}</p>
              <p className="text-sm">Durée : {formation.formation_duree}</p>
              <p className="text-sm">Modalité : {formation.formation_modalite}</p>
              {formation.formation_description && (
                <p className="mt-2 text-sm">{formation.formation_description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section Forums */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Forums</h2>
        <div className="space-y-4">
          {forumsData?.forums?.map((forum: any) => (
            <div key={forum.id} className="border p-4 rounded-lg shadow">
              <h3 className="font-semibold">{forum.forum_title}</h3>
              <p className="text-sm text-gray-500">
                Par {forum.utilisateur?.prenom} {forum.utilisateur?.nom} - 
                {new Date(forum.forum_date_de_creation).toLocaleDateString()}
              </p>
              <p className="mt-2">{forum.forum_texte}</p>
              {forum.forumComs && forum.forumComs.length > 0 && (
                <div className="mt-4 pl-4 border-l-2">
                  <p className="text-sm font-semibold">Commentaires :</p>
                  {forum.forumComs.map((com: any) => (
                    <div key={com.id} className="mt-2">
                      <p className="text-sm">{com.forum_com_text}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(com.forum_com_date_de_creation).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section Évaluations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Évaluations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {evaluationsData?.evaluations?.map((evaluation: any) => (
            <div key={evaluation.id} className="border p-4 rounded-lg shadow">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">{evaluation.evaluations_note}/5</span>
              </div>
              <p className="text-sm mt-2">{evaluation.evaluations_avis}</p>
              <p className="text-sm text-gray-500 mt-2">
                Par {evaluation.etudiant?.utilisateur?.prenom} {evaluation.etudiant?.utilisateur?.nom}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Vidéos */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Vidéos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videosData?.videos?.map((video: any) => (
            <div key={video.id} className="border p-4 rounded-lg shadow">
              <h3 className="font-semibold">{video.video_titre}</h3>
              {video.video_texte && (
                <p className="text-sm text-gray-600 mt-2">{video.video_texte}</p>
              )}
              <div className="mt-2">
                <p className="text-xs text-gray-500">
                  Date : {new Date(video.video_date_de_creation).toLocaleDateString()}
                </p>
                {video.entreprise && (
                  <p className="text-xs text-gray-500">
                    Entreprise : {video.entreprise.entreprise_nom}
                  </p>
                )}
              </div>
              {video.video_url && (
                <a href={video.video_url} target="_blank" rel="noopener noreferrer" 
                   className="mt-2 inline-block text-blue-600 hover:underline">
                  Voir la vidéo
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 