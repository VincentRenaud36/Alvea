"use client";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Video, VideoOff, X } from "lucide-react";
import Link from "next/link";

export default function ConferencePage() {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  // Simuler un flux distant pour la démonstration
  const simulateRemoteStream = async () => {
    try {
      // Créer un flux simulé pour la démonstration
      const fakeStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setRemoteStream(fakeStream);
    } catch (error) {
      console.error("Erreur lors de la simulation du flux distant:", error);
    }
  };

  useEffect(() => {
    // Initialiser la caméra et le micro locaux
    const initLocalStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);
      } catch (error) {
        console.error("Erreur d'accès à la caméra ou au micro:", error);
      }
    };

    initLocalStream();
    simulateRemoteStream(); // Simuler un flux distant pour la démonstration

    // Nettoyer les flux lors du démontage du composant
    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
      if (remoteStream) {
        remoteStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    // Attacher le flux local à l'élément vidéo
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    // Attacher le flux distant à l'élément vidéo
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  const toggleMic = () => {
    if (localStream) {
      const audioTracks = localStream.getAudioTracks();
      audioTracks.forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsMicOn(!isMicOn);
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      const videoTracks = localStream.getVideoTracks();
      videoTracks.forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsVideoOn(!isVideoOn);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4">
      <h1 className="text-2xl font-bold mb-8">Visioconférence</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Vidéo locale */}
        <Card className="overflow-hidden relative">
          <div className="aspect-video bg-black relative">
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 px-2 py-1 rounded text-white text-sm">
              Vous
            </div>
          </div>
        </Card>

        {/* Vidéo distante */}
        <Card className="overflow-hidden relative">
          <div className="aspect-video bg-black relative">
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 px-2 py-1 rounded text-white text-sm">
              Participant
            </div>
          </div>
        </Card>
      </div>

      {/* Contrôles */}
      <div className="flex gap-4 mt-8">
        <Button
          variant={isMicOn ? "default" : "destructive"}
          size="icon"
          onClick={toggleMic}
          className="rounded-full h-12 w-12"
        >
          {isMicOn ? <Mic /> : <MicOff />}
        </Button>
        <Button
          variant={isVideoOn ? "default" : "destructive"}
          size="icon"
          onClick={toggleVideo}
          className="rounded-full h-12 w-12"
        >
          {isVideoOn ? <Video /> : <VideoOff />}
        </Button>
        <Link href="/messagerie">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 bg-black hover:bg-black/80"
          >
            <X className="h-6 w-6 text-white" />
          </Button>
        </Link>
      </div>
    </div>
  );
}