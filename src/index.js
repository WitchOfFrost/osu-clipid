const firstline = require('firstline');
const clipboardy = require('clipboardy');
const config = require('./config.json');

let last = 0;
let current;

console.log("Running... stop with ctrl + c");

async function main(){
current = await firstline(`${config.osu_dir}/ipc.txt`, { lineEnding: '\r' });
if (last == current) {
    return;
} else {
    last = current;
    await clipboardy.writeSync(`${current}`);
    console.log(`Wrote Beatmap ID ${current} to clipboard!`);
}

}
setInterval(main, 1000);
