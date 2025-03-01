export type User = {
    id: string;
    name: string;
    avatar: string;
    isOnline: boolean;
  };
  
  export type Message = {
    id: string;
    senderId: string;
    text: string;
    timestamp: Date;
    isRead: boolean;
  };
  
  export type Conversation = {
    id: string;
    participants: User[];
    messages: Message[];
    lastActivity: Date;
  };
  
  // Utilisateur courant (vous)
  export const currentUser: User = {
    id: "user-1",
    name: "Vous",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
    isOnline: true,
  };
  
  // Contacts
  export const contacts: User[] = [
    {
      id: "user-2",
      name: "Sophie Martin",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      isOnline: true,
    },
    {
      id: "user-3",
      name: "Thomas Dubois",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
      isOnline: false,
    },
    {
      id: "user-4",
      name: "Marie Leroy",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
      isOnline: true,
    },
    {
      id: "user-5",
      name: "Paul Bernard",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      isOnline: false,
    },
  ];
  
  // Conversations
  export const conversations: Conversation[] = [
    {
      id: "conv-1",
      participants: [currentUser, contacts[0]],
      lastActivity: new Date(2023, 5, 15, 14, 30),
      messages: [
        {
          id: "msg-1",
          senderId: "user-2",
          text: "Bonjour ! Comment vas-tu aujourd'hui ?",
          timestamp: new Date(2023, 5, 15, 10, 0),
          isRead: true,
        },
        {
          id: "msg-2",
          senderId: "user-1",
          text: "Salut Sophie ! Ça va bien, merci. Et toi ?",
          timestamp: new Date(2023, 5, 15, 10, 5),
          isRead: true,
        },
        {
          id: "msg-3",
          senderId: "user-2",
          text: "Très bien ! Je travaille sur le nouveau projet.",
          timestamp: new Date(2023, 5, 15, 10, 10),
          isRead: true,
        },
        {
          id: "msg-4",
          senderId: "user-1",
          text: "Super ! J'ai hâte de voir les résultats.",
          timestamp: new Date(2023, 5, 15, 10, 15),
          isRead: true,
        },
        {
          id: "msg-5",
          senderId: "user-2",
          text: "Je te partagerai les maquettes dès qu'elles seront prêtes.",
          timestamp: new Date(2023, 5, 15, 14, 30),
          isRead: true,
        },
      ],
    },
    {
      id: "conv-2",
      participants: [currentUser, contacts[1]],
      lastActivity: new Date(2023, 5, 14, 16, 45),
      messages: [
        {
          id: "msg-6",
          senderId: "user-3",
          text: "As-tu reçu mon email concernant la réunion de demain ?",
          timestamp: new Date(2023, 5, 14, 16, 30),
          isRead: true,
        },
        {
          id: "msg-7",
          senderId: "user-1",
          text: "Oui, je l'ai bien reçu. Je serai présent à 14h.",
          timestamp: new Date(2023, 5, 14, 16, 45),
          isRead: true,
        },
      ],
    },
    {
      id: "conv-3",
      participants: [currentUser, contacts[2]],
      lastActivity: new Date(2023, 5, 13, 9, 15),
      messages: [
        {
          id: "msg-8",
          senderId: "user-4",
          text: "Bonjour ! Pourrais-tu m'envoyer le rapport mensuel ?",
          timestamp: new Date(2023, 5, 13, 9, 0),
          isRead: true,
        },
        {
          id: "msg-9",
          senderId: "user-1",
          text: "Bien sûr, je te l'envoie tout de suite.",
          timestamp: new Date(2023, 5, 13, 9, 15),
          isRead: true,
        },
      ],
    },
    {
      id: "conv-4",
      participants: [currentUser, contacts[3]],
      lastActivity: new Date(2023, 5, 10, 11, 20),
      messages: [
        {
          id: "msg-10",
          senderId: "user-5",
          text: "Salut ! Es-tu disponible pour un appel cette semaine ?",
          timestamp: new Date(2023, 5, 10, 11, 0),
          isRead: true,
        },
        {
          id: "msg-11",
          senderId: "user-1",
          text: "Bonjour Paul ! Oui, je suis libre jeudi après-midi.",
          timestamp: new Date(2023, 5, 10, 11, 20),
          isRead: true,
        },
      ],
    },
  ];