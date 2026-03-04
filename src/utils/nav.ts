import { atom } from "nanostores";

export const isOpen = atom(false);

export function goBack() {
  // Verificamos que estemos en el navegador
  if (typeof window !== "undefined") {
    window.history.back();
  }
}