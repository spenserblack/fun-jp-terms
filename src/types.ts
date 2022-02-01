export type Term = {
  term: string,
  kana: string,
  romaji: string,
  translation: string | string[],
  [key: string]: string,
};
