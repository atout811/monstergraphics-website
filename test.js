const fs = require("fs").promises;
const run = async () => {
  try {
    const data = await fs.writeFile("file1.js", "hello"); // need to be in an async function
    console.log(data); // the contents of file1.js
  } catch (error) {
    console.log(error);
  }
};

run();
