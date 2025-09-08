import React from "react";

export default function LanchoneteApp() {
  const produtos = [
    {
      id: 1,
      nome: "Hambúrguer",
      preco: "R$ 15,00",
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200",
    },
    {
      id: 2,
      nome: "Cheeseburguer",
      preco: "R$ 18,00",
      imagem: "https://images.unsplash.com/photo-1606756790138-261b15b5d7d1?w=200",
    },
    {
      id: 3,
      nome: "Batata Frita",
      preco: "R$ 8,00",
      imagem: "https://images.unsplash.com/photo-1585238342028-4c07e1fbd5df?w=200",
    },
    {
      id: 4,
      nome: "Refrigerante",
      preco: "R$ 6,00",
      imagem: "https://images.unsplash.com/photo-1583337130417-3346a1afdd88?w=200",
    },
    {
      id: 5,
      nome: "Milkshake",
      preco: "R$ 12,00",
      imagem: "https://images.unsplash.com/photo-1622495898358-3f4ffb0b9a65?w=200",
    },
    {
      id: 6,
      nome: "Hot Dog",
      preco: "R$ 10,00",
      imagem: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-3">
      <h1 className="text-xl font-bold text-center text-red-600 mb-3">
        🍔 Lanchonete Delícia
      </h1>

      <div className="grid grid-cols-3 gap-3">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-16 object-cover"
            />
            <div className="p-1 text-center">
              <h2 className="text-xs font-semibold">{produto.nome}</h2>
              <p className="text-[10px] font-bold text-green-600">{produto.preco}</p>
              <button className="mt-1 px-2 py-1 text-[10px] bg-red-500 text-white rounded hover:bg-red-600">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
