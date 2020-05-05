//Create function that will play the 
const spinner = () => {
  //probably a for loop
  //put a function in here and put into a loop
  //number to timeout will have to change, 
    process.stdout.write('hello from spinner2.js... \rheyyy\n');  
    //spinner1 took 1500ms to run
    //1500 / 9moves = 
    const pattern = '|/-\\';
    let cycle = 1;
    while (cycle <= 8) {
      const character = pattern[cycle % pattern.length];
      setTimeout(() => {
        process.stdout.write(`\r${character}   `);
      }, 166 * cycle)
      cycle ++;
    }
  }
  spinner();
