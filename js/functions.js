const init = async () => {
  async function getObject(uri) {
    const response = await fetch(uri, {
      method: "GET",
      mode: "cors"
    });

    if (!response.ok) throw new Error("Error while handling request.");

    return await response.text();
  }

  var myfile = await getObject("../data/events.yml");
  var eventobj = jsyaml.load(myfile);
  console.log(eventobj);

  var honapcontainer = document.getElementById("honapok");

  if (!honapcontainer) return;

  var result = "";
  eventobj.forEach(month => {
    result += `<div class="honap">
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
  });
  honapcontainer.innerHTML = result;
};

init();
