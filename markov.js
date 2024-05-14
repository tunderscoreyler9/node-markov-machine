/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.toLowerCase().split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {};

    for(let i = 0; i < this.words.length - 1; i++) {
      const word = this.words[i];
      const nextWord = this.words[i + 1];

      if(this.chains[word]) {
        this.chains[word].push(nextWord);
      } else {
        this.chains[word] = [nextWord];
      }
    };

    const lastWord = this.words[this.words.length - 1];
    this.chains[lastWord] = [null];
  };


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

let mm = new MarkovMachine("The quick brown fox jumps over the lazy dog");
console.log(mm);