// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);
// (() => {
//   process.stdout.write('\r/   ');
// }, 500);
// (() => {
//   process.stdout.write('\r-   ');
// }, 900);
// (() => {
//   process.stdout.write('\r\\   ');
// }, 1300);
// (() => {
//   process.stdout.write('\r|   ');
// }, 1700);
// (() => {
//   process.stdout.write('\r/   ');
// }, 2100);
// (() => {
//   process.stdout.write('\r-   ');
// }, 2500);
// (() => {
//   process.stdout.write('\r\\   ');
// }, 2900);
// (() => {
//   process.stdout.write('\r|   \n');
// }, 3300);

const sentence = "\r|\r/\r-\r\\ \r|\r/\r-\r\\ \r|";
const typewriter = function(string, delay) {
  for (const char of string) {
   setTimeout(() => {
    process.stdout.write(char); 
    }, delay);
      delay += 100;
    }
    setTimeout(() => {
      process.stdout.write("\n"); 
    }, delay);
};

typewriter(sentence, 0);
