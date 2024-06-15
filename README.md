# Markov Node Machine

This project is a textual Markov Chain generator implemented in Node.js. It takes a corpus of text as input and generates random text based on the Markov Chain algorithm.

## Features

- Reads input text and processes it into a series of words.
- Builds Markov chains from the input text.
- Generates random text based on the Markov chains.

## Installation

To use the Markov Machine, you need to have Node.js installed on your machine. Then, you can clone the repository and install the necessary dependencies.

```
bash
git clone https://github.com/tunderscoreyler9/markov-node-machine.git
cd markov-node-machine
# Install dependcies using 'npm install'
npm install
```

## Example Usage
For a quick reference on how to use the machine, let's add the lines below to our `markov.js` file.
```
let mm = new MarkovMachine("The quick brown fox jumps over the lazy dog");
console.log(mm);
console.log(mm.makeText());
```
Next, from Git Bash, we can type the line `node markov.js` to run the file and see the resulting chains from the MarkovMachine.