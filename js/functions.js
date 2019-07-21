import events from "../data/events.yml";
const honapcontainer = document.getElementById("honapcontainer");
if (!honapcontainer) return;

let honapResult = "";
events.forEach(month => {
  if (month.events && month.events.length > 0) {
    honapResult += `<div class="honap">
          <div class="honap-esemenyek">
              ${month.events
                .map(event => {
                  return `<div class="esemeny">
                      <div class="esemeny-datum">${event.date}</div>
                      <div class="esemeny-cim">${event.name}</div>
                  </div>`;
                })
                .join("")}
          </div>
          <div class="honap-nev">
              ${month.name}
          </div>
      </div>`;
  }
});
honapcontainer.innerHTML = honapResult;

import showdown from "showdown";
const converter = new showdown.Converter();
import posts from "../data/posts/*.md";
console.log(posts);

const numberPattern = /(\d{4})(\d{2})(\d{2})/g;
const hirek = Object.keys(posts)
  .reduce((prev, curr) => {
    return [
      ...prev,
      {
        date: new Date(curr.replace(numberPattern, "$1-$2-$3")),
        data: posts[curr].data,
        content: converter.makeHtml(posts[curr].content)
      }
    ];
  }, [])
  .sort((a, b) => b.date - a.date);
console.log(hirek);
const hircontainer = document.getElementById("hircontainer");
if (!hircontainer) return;

let hirResult = "";
hirek.forEach(hir => {
  hirResult += `<div class="hir">
    <div class="hirfejlec">
      <div class="hirdatum">${hir.date
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, ".")
        .concat(".")}</div>
      <div class="hircim">${hir.data.title}</div>
      <div class="hirszerzo">${hir.data.author}</div>
    </div>
    <div class="hirtorzs">
      ${hir.content}
    </div>
  </div>`;
});
hircontainer.innerHTML = hirResult;
