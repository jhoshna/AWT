const path = require('path');

const filePath = '/Users/John/Documents/project/index.js';

// 🔹 Get the base file name
console.log('Base Name:', path.basename(filePath)); // Output: index.js

// 🔹 Get the directory name
console.log('Directory Name:', path.dirname(filePath)); // Output: /Users/John/Documents/project

// 🔹 Get the file extension
console.log('File Extension:', path.extname(filePath)); // Output: .js

// 🔹 Join paths
console.log('Joined Path:', path.join('/Users/John', 'Documents', 'project', 'index.js'));  
// Output: /Users/John/Documents/project/index.js

// 🔹 Resolve an absolute path
console.log('Resolved Path:', path.resolve('index.js'));  
// Output: /absolute/path/to/index.js

// 🔹 Normalize a path
console.log('Normalized Path:', path.normalize('/Users/John//Documents/../project/index.js'));  
// Output: /Users/John/project/index.js

// 🔹 Check if path is absolute
console.log('Is Absolute?', path.isAbsolute(filePath)); // Output: true

// 🔹 Get relative path
console.log('Relative Path:', path.relative('/Users/John/Documents', '/Users/John/project/index.js'));  
// Output: ../project/index.js

// 🔹 Parse the path into an object
const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);
/* Output:
{
  root: '/',
  dir: '/Users/John/Documents/project',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/

// 🔹 Convert a parsed object back to a string
console.log('Formatted Path:', path.format(parsedPath)); // Output: /Users/John/Documents/project/index.js
