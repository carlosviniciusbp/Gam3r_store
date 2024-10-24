import { CalcularParcelamento } from "@gstore/core"

export default function useParcelamento(valor: number, quantidade: number = 12) {
  const parcelamento = new CalcularParcelamento().executar(valor, quantidade)
  return parcelamento
}
