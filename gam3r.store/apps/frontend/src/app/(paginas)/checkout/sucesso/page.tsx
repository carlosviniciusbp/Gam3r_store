"use client"
import Image from "next/image"

export default function Page() {
  return (
    <div className="container flex flex-col gap-7">
      <div className="flex flex-col items-center justify-center gap-5 py-20">
        <div className="relative h-72 w-72">
          <Image src="/logo.png" alt="Sucesso" fill />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-3xl font-bold text-transparent">
            Pedido Realizado com Sucesso!
          </h1>
          <p className="text-zinc-500">
            Você receberá um e-mail com os detalhes da sua compra.
          </p>
        </div>
      </div>
    </div>
  )
}
