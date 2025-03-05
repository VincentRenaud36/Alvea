"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { MessageSquare, Send, ArrowLeft, Video } from "lucide-react";
import Link from "next/link";
import { conversations, currentUser, Conversation, Message, User } from "@/lib/data";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Header from "../components/Header";

/** Exemple : limiter à 2 lignes dans la bulle (optionnel) 
 *  Nécessite @tailwindcss/line-clamp dans tailwind.config.js
 */
// import "@tailwindcss/line-clamp";

export default function MessagerieApp() {
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [allConversations, setAllConversations] = useState(conversations);
  const [showMobileConversation, setShowMobileConversation] = useState(false);

  const handleSendMessage = () => {
    if (!activeConversation || newMessage.trim() === "") return;

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: currentUser.id,
      text: newMessage,
      timestamp: new Date(),
      isRead: true,
    };

    const updated = allConversations.map((conv) => {
      if (conv.id === activeConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMsg],
          lastActivity: new Date(),
        };
      }
      return conv;
    });

    setAllConversations(updated);
    setActiveConversation(updated.find((c) => c.id === activeConversation.id) || null);
    setNewMessage("");
  };

  const getOtherParticipant = (conversation: Conversation): User => {
    return conversation.participants.find((p) => p.id !== currentUser.id) || currentUser;
  };

  const formatMessageDate = (date: Date) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (messageDate.getTime() === today.getTime()) {
      return format(date, "HH:mm");
    } else {
      return format(date, "d MMM", { locale: fr });
    }
  };

  const isLoggedIn = true; // Ex. : utilisateur connecté

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header isLoggedIn={isLoggedIn} />

      {/* Barre du haut */}
      <header className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="mr-2">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Messagerie</h1>
        </div>
        <Link href="/visio">
          <Button variant="ghost" size="icon" className="rounded-full bg-bittersweet hover:bg-bittersweet/90">
            <Video className="h-5 w-5 text-white" />
          </Button>
        </Link>
      </header>

      {/* Contenu principal */}
      <div className="flex flex-1 overflow-hidden">
        {/* LISTE DES CONVERSATIONS */}
        <div
          className={`w-full md:w-1/3 border-r ${
            showMobileConversation ? "hidden md:block" : "block"
          }`}
        >
          <div className="p-4 border-b">
            <h2 className="font-semibold">Conversations</h2>
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {allConversations.map((conversation) => {
              const otherUser = getOtherParticipant(conversation);
              const lastMessage = conversation.messages[conversation.messages.length - 1];

              return (
                <div key={conversation.id}>
                  <button
                    className={`w-full p-4 text-left hover:bg-muted flex items-start gap-3 ${
                      activeConversation?.id === conversation.id ? "bg-muted" : ""
                    }`}
                    onClick={() => {
                      setActiveConversation(conversation);
                      setShowMobileConversation(true);
                    }}
                  >
                    {/* AVATAR + ONLINE */}
                    <div className="relative flex-shrink-0">
                      <Avatar>
                        <AvatarImage src={otherUser.avatar} alt={otherUser.name} />
                        <AvatarFallback>{otherUser.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {otherUser.isOnline && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                      )}
                    </div>

                    {/* TEXTE: nom + dernier message */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <p className="font-medium truncate">{otherUser.name}</p>
                        <span className="text-xs text-muted-foreground">
                          {formatMessageDate(conversation.lastActivity)}
                        </span>
                      </div>
                      {/* TRONCATURE sur une ligne */}
                      <p
                        className="text-sm text-muted-foreground 
                          overflow-hidden text-ellipsis whitespace-nowrap 
                          block w-full"
                      >
                        {lastMessage.text}
                      </p>
                    </div>
                  </button>
                  <Separator />
                </div>
              );
            })}
          </ScrollArea>
        </div>

        {/* ZONE DE CONVERSATION ACTIVE */}
        <div
          className={`w-full md:w-2/3 flex flex-col ${
            !showMobileConversation ? "hidden md:flex" : "flex"
          }`}
        >
          {activeConversation ? (
            <>
              {/* HEADER DE LA CONVERSATION */}
              <div className="p-4 border-b flex items-center gap-3">
                {/* Bouton retour sur mobile */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setShowMobileConversation(false)}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Avatar>
                  <AvatarImage
                    src={getOtherParticipant(activeConversation).avatar}
                    alt={getOtherParticipant(activeConversation).name}
                  />
                  <AvatarFallback>
                    {getOtherParticipant(activeConversation).name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">
                    {getOtherParticipant(activeConversation).name}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {getOtherParticipant(activeConversation).isOnline
                      ? "En ligne"
                      : "Hors ligne"}
                  </p>
                </div>
              </div>

              {/* MESSAGES */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {activeConversation.messages.map((message) => {
                    const isCurrentUser = message.senderId === currentUser.id;
                    const sender = activeConversation.participants.find(
                      (p) => p.id === message.senderId
                    );

                    return (
                      <div
                        key={message.id}
                        className={`flex ${
                          isCurrentUser ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="flex gap-2 max-w-[80%]">
                          {/* Avatar si c'est pas moi */}
                          {!isCurrentUser && (
                            <Avatar className="h-8 w-8 flex-shrink-0">
                              <AvatarImage src={sender?.avatar} alt={sender?.name} />
                              <AvatarFallback>{sender?.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}

                          {/* Bulle de message */}
                          <div>
                            <Card
                              className={`p-3 ${
                                isCurrentUser
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted"
                              }`}
                            >
                              {/* Si vous voulez 2 lignes max, activez line-clamp-2 */}
                              {/* <p className="text-sm line-clamp-2 break-words"> */}
                              <p className="text-sm break-words">
                                {message.text}
                              </p>
                            </Card>
                            <p className="text-xs text-muted-foreground mt-1">
                              {format(message.timestamp, "HH:mm")}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>

              {/* BARRE D'ENVOI */}
              <div className="p-4 border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <Input
                    placeholder="Écrivez votre message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            // Si aucune conversation n'est active
            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
              <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">Aucune conversation sélectionnée</h3>
              <p className="text-muted-foreground">
                Sélectionnez une conversation pour commencer à discuter
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
