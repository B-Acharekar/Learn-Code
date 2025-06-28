export function calculateAccuracy(input, target) {
  let correct = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === target[i]) correct++;
  }
  return Math.round((correct / target.length) * 100);
}

export function calculateWPM(wordCount, time) {
  return Math.round((wordCount / time) * 60);
}
