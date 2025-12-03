"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import Image from "next/image";

// importe TODAS suas fotos
import foto1 from "../../assets/foto1.jpeg";
import foto2 from "../../assets/foto2.jpeg";
import foto3 from "../../assets/foto3.jpeg";
import foto4 from "../../assets/foto4.jpeg";
import foto5 from "../../assets/foto5.jpeg";
import foto6 from "../../assets/foto6.jpeg";
import foto7 from "../../assets/foto7.jpeg";
import foto8 from "../../assets/foto8.jpeg";
import foto9 from "../../assets/foto9.jpeg";
import foto10 from "../../assets/foto10.jpeg";
import foto11 from "../../assets/foto11.jpeg";
import foto12 from "../../assets/foto12.jpeg";
import foto13 from "../../assets/foto13.jpeg";
import foto14 from "../../assets/foto14.jpeg";
import foto15 from "../../assets/foto15.jpeg";
import foto16 from "../../assets/foto16.jpeg";
import foto17 from "../../assets/foto17.jpeg";
import foto18 from "../../assets/foto18.jpeg";

export default function Home() {

  const fotos = [
    foto1, foto2, foto3, foto4, foto5, foto6,
    foto7, foto8, foto9, foto10, foto11, foto12,
    foto13, foto14, foto15, foto16, foto17, foto18
  ];

  const [fotoSelecionada, setFotoSelecionada] = useState(foto1);

  return (
    <div className="pt-24 px-4 overflow-x-hidden">
      <Header />

      <h2 className="text-2xl font-bold text-center mt-4">
        Minha história até a PPMG
      </h2>

      {/* CONTAINER MAIOR COM RESPONSIVIDADE */}
      <div className="
        max-w-[1400px] 
        mx-auto 
        flex 
        flex-col 
        lg:flex-row 
        gap-10 
        mt-10
      ">

        {/* COLUNA ESQUERDA — FOTO GRANDE */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src={fotoSelecionada}
            alt="foto selecionada"
            className="
              w-full 
              max-w-[450px] 
              h-auto 
              rounded-xl 
              object-contain 
              shadow-xl
            "
          />
        </div>

        {/* COLUNA DIREITA — GALERIA RESPONSIVA */}
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
                className="w-full h-28 sm:h-32 md:h-36 object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
