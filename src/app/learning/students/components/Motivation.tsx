"use client";

import SALYCAPIBARA from "@/assets/SALYCAPIBARA.png";
import Image from "next/image";
import { MdPlayCircle } from "react-icons/md";

const txt =
  "¡Hola niños! ¿Están listos para comenzar una aventura emocionante en el mundo de la lectura? ¡Los libros están esperando por ustedes! ¡Vamos a explorar juntos historias increíbles, resolver misterios y descubrir nuevos mundos! ¡No esperen más, comencemos ahora!";

export default function Motivation() {
  return (
    <>
      <p>{txt}</p>

      <div>
        <Image
          src={SALYCAPIBARA}
          className="img-responsive center-box"
          alt="Motivación"
          width={680}
          height={700}
          quality={100}
          style={{ width: "auto" }}
          priority
        />
        <div
          onClick={() => {
            const speech = new SpeechSynthesisUtterance(txt);
            speech.lang = "es-US";
            const voices = window.speechSynthesis.getVoices();
            const latamVoice = voices.find((voice) => {
              if (voice.lang === "es-US") return voice;
            });
            if (!latamVoice) {
              return console.error("Latam voice not found");
            }

            speech.voice = latamVoice;
            window.speechSynthesis.speak(speech);
          }}
        >
          <MdPlayCircle />
        </div>
      </div>
    </>
  );
}
