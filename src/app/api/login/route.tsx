import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, senha } = await request.json();

  // LOGIN FAKE PARA TESTES
  if (email === "bruno@gmail.com" && senha === "123") {
    return NextResponse.json({
      sucesso: true,
      message: "Login realizado com sucesso!"
    });
  }

  return NextResponse.json(
    {
      sucesso: false,
      message: "Credenciais inválidas."
    },
    { status: 400 }
  );
}
