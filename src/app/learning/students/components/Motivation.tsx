"use client";

import SALYCAPIBARA from "@/assets/saly/SALY CAPIBARA.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdPauseCircle, MdPlayCircle } from "react-icons/md";

export default function Motivation() {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      audioPlayer.current?.play();
    } else {
      audioPlayer.current?.pause();
    }
  }, [play]);

  return (
    <>
      <p>
        ¡Hola niños! ¿Están listos para comenzar una aventura emocionante en el
        mundo de la lectura? ¡Los libros están esperando por ustedes! ¡Vamos a
        explorar juntos historias increíbles, resolver misterios y descubrir
        nuevos mundos! ¡No esperen más, comencemos ahora!
      </p>

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
        <audio src="/audio/welcome.mp3" ref={audioPlayer} />
        <div
          onClick={() => {
            setPlay(!play);
          }}
        >
          {play ? <MdPauseCircle /> : <MdPlayCircle />}
        </div>
      </div>
    </>
  );
}
