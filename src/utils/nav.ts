export function goBack() {
  if (typeof window !== "undefined") {
    window.history.back();
  }
}
