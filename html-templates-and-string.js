let header = "frontend";
let tags = ["html", "css","javascript"];

let program = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  program += `<li>${x}</li>`;
}

program += `</ul>`;