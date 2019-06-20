const init = async () => {
  async function getObject(uri) {
    const response = await fetch(uri, {
      method: "GET",
      mode: "cors"
    });

    if (!response.ok) throw new Error("Error while handling request.");

    return await response.text();
  }

  function getFiles(data) {
    console.log(data);
    var linePattern = /<a href="[0-9]{8}\.md">[0-9]{8}\.md<\/a>/g;
    var found = data.match(linePattern);
    if (!found) return [];

    var numberPattern = /(\d{4})(\d{2})(\d{2})/g;
    return found
      .map(file => file.split('"')[1])
      .map(file => {
        return {
          name: file,
          date: new Date(file.split(".")[0].replace(numberPattern, "$1-$2-$3"))
        };
      })
      .sort((a, b) => b.date - a.date);
  }

  ///////////////
  ///Események///
  ///////////////
  var myfile = await getObject("../data/events.yml");
  var eventobj = jsyaml.load(myfile);

  var honapcontainer = document.getElementById("honapok");
  if (!honapcontainer) return;

  var honapResult = "";
  eventobj.forEach(month => {
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
  });
  honapcontainer.innerHTML = honapResult;

  ///////////
  ///Hírek///
  ///////////
  var filesRaw = await getObject("../data/posts");
  var filesList = getFiles(filesRaw);
  filesList = filesList.map(async (file) => getObject("../data/posts/"+file.name));
  filesList = await Promise.all(filesList);

  var hircontainer = document.getElementById("hirek");
  if (!hircontainer) return;
/*
  var hirResult = "";
  filesList.forEach(hir => {
    hirResult += `<div class="hir">
    <div class="hircim">${}</div>
    <div class="hirtorzs">

    </div>
  </div>`;
  });*/
};

init();
