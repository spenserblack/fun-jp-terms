const speechSynthesis = window?.speechSynthesis;

const speech = speechSynthesis && new SpeechSynthesisUtterance();

export const canSpeak = speech != null;

if (canSpeak) {
  speech.lang = 'ja-JP';
}

export default (msg: string): void => {
  if (!canSpeak) {
    return;
  }

  speech.text = msg;

  speechSynthesis.speak(speech);
};
