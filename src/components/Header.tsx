import Link from "next/link";

// export const Header = () => {
//   return (
//     <div className="w-full bg-black text-white">
//       <div className="flex justify-between items-center text-2xl py-6 px-8">
        
//         {/* Logo alinhada à esquerda com espaçamento */}
//         <div className="logo">Logo</div>

//         {/* Menu alinhado à direita com espaçamento */}
//         <ul className="flex items-center space-x-10">
//           <li><Link href="/dashboard">Home</Link></li>
//           <li><Link href="/produtos">Produtos</Link></li>
//           <li><Link href="/sobre">Sobre</Link></li>
//         </ul>

//       </div>
//     </div>
//   );
// };

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="container mx-auto flex justify-between items-center py-4 text-white">
        <div className="logo">Logo</div>
        <nav className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
};

