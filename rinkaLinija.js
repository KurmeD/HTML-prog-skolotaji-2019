// C=2πR
// https://www.uzdevumi.lv/p/matematika/9-klase/rinka-garums-laukums-2233/re-986c4601-d388-4c6d-b6da-60c63be0bacc
        
function rinkaLinija() {
  const R = Number(prompt('Lūdzu ievadiet rādiusa garumu'));
  const C = Math.PI * 2 * R
  return `Riņķa līnijas garums ar rādiusu ${R} ir ${C.toFixed(4)} ${C}`;
}

console.log('rinka linijas fails');
