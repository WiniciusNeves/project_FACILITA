// src/utils/templates/jobTagTemplates.ts

export interface JobTagTemplate {
  label: string;
  color: string;
}

export const jobTagTemplates: JobTagTemplate[] = [
  { label: "Encanador", color: "#A85757" }, // vermelho queimado
  { label: "Jardineiro", color: "#5B8C6A" }, // verde
  { label: "Mecânico", color: "#B7BC3A" }, // amarelo esverdeado
  { label: "Motoboy", color: "#8ED1F7" }, // azul claro
  { label: "Pedreiro", color: "#C97D60" }, // laranja queimado
  { label: "Eletricista", color: "#FFD166" }, // amarelo
  { label: "Pintor", color: "#6C63FF" }, // azul violeta
  { label: "Diarista", color: "#F4978E" }, // rosa claro
  { label: "Babá", color: "#F7C59F" }, // bege
  { label: "Cozinheiro", color: "#A3A380" }, // verde oliva
];
