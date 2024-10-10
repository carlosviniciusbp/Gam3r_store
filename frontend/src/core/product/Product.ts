import Especifications from "./Specifications";

export default interface Product {
  id: number;
  nome: string;
  descricao: string;
  marca: string;
  modelo: string;
  imagem: string;
  nota: number;
  videoReview: string;
  tags: string[];
  especifications: Especifications;
}
