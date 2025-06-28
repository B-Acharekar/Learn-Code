export let sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing tests help improve your speed.",
  "Practice daily to increase accuracy and speed.",
];

export function getRandomSentence() {
  const index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

export async function fetchSentence() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    return data.content;
  } catch (error) {
    console.warn("API failed, using fallback.");
    return getRandomSentence();
  }
}
