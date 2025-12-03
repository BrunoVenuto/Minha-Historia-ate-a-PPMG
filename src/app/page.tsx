"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {

  const fotos = [
    "/fotos/foto1.jpeg",
    "/fotos/foto2.jpeg",
    "/fotos/foto3.jpeg",
    "/fotos/foto4.jpeg",
    "/fotos/foto5.jpeg",
    "/fotos/foto6.jpeg",
    "/fotos/foto7.jpeg",
    "/fotos/foto8.jpeg",
    "/fotos/foto9.jpeg",
    "/fotos/foto10.jpeg",
    "/fotos/foto11.jpeg",
    "/fotos/foto12.jpeg",
    "/fotos/foto13.jpeg",
    "/fotos/foto14.jpeg",
    "/fotos/foto15.jpeg",
    "/fotos/foto16.jpeg",
    "/fotos/foto17.jpeg",
    "/fotos/foto18.jpeg"
  ];

  const [fotoSelecionada, setFotoSelecionada] = useState(fotos[0]);

  return (
    <div className="pt-24 px-4 overflow-x-hidden">
      <Header />

      <h2 className="text-2xl font-bold text-center mt-4">
        Minha história até a PPMG
      </h2>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 mt-10">

        <div className="flex-1 flex justify-center items-start sticky top-24 h-fit">
          <Image
            src={fotoSelecionada}
            alt="foto selecionada"
            width={600}
            height={600}
            className="w-full max-w-[450px] h-auto rounded-xl object-contain shadow-xl"
          />
        </div>

        <div className="
          flex-1
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-3
          gap-4
          place-items-center
        ">
          {fotos.map((foto, index) => (
            <button
              key={index}
              onClick={() => setFotoSelecionada(foto)}
              className={`
                w-full 
                max-w-[150px] 
                rounded-xl 
                overflow-hidden 
                border 
                transition 
                hover:opacity-80
                ${fotoSelecionada === foto ? "ring-4 ring-blue-500" : ""}
              `}
            >
              <Image
                src={foto}
                alt={`foto-${index}`}
                width={200}
                height={200}
                className="w-full h-28 sm:h-32 md:h-36 object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
