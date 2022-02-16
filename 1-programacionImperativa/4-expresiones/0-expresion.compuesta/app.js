const { Console } = require("./console");

const console = new Console();
console.writeln(04 >>> 2); // 1
console.writeln(04 >>> 1, 3); // 2
console.writeln((04 >>> 1, 3)); // 3
console.writeln((04 >>> 1, 4 % 5)); // 4
console.writeln((04 >>> 1, 4 % 5, 5 >= 5)); // true
console.writeln((04 >>> 1, 4 % 5, 5 >= 5, false || true)); // true

let x = 0;
let y = 0;
console.writeln((x++, y++)); // 0
console.writeln((x++, y++, "gggg")); // gggg
console.writeln((x++, y++)); // 2
console.writeln((x)); // 3
