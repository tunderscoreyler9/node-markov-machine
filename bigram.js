class MarkovMachine {
    constructor(text) {
        let words = text.split(/[ \r\n]+/);
        this.words = words.filter(c => c !== "");
        this.makeChains();
    }

    makeChains() {
        let chains = new Map();

        for (let i = 0; i < this.words.length - 1; i += 1) {
            let bigram = this.words[i] + " " + this.words[i + 1];
            let nextWord = this.words[i + 2] || null;

            if (chains.has(bigram)) {
                chains.get(bigram).push(nextWord);
            } else {
                chains.set(bigram, [nextWord]);
            }
        }

        this.chains = chains;
    }

    // Make a random choice from the array:
    static choice(ar) {
        return ar[Math.floor(Math.random() * ar.length)];
    }

    makeText(numWords = 100) {
        let keys = Array.from(this.chains.keys());
        let key = MarkovMachine.choice(keys);
        let out = [];

        while (out.length < numWords && key !== null) {
            let [w1, w2] = key.split(" ");
            out.push(w1);
            key = w2 + " " + MarkovMachine.choice(this.chains.get(key));

            if (this.chains.get(key) === undefined) {
                break;
            }
        }

        return out.join(" ");
    }
}

module.exports = {
    MarkovMachine,
};