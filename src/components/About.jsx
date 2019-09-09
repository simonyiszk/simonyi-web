import React from "react";
import "./main.css";
import "./about.css";

export default function About() {
  return (
    <div className="aboutSectionContainer">
      <div className="aboutHeroContainer">
        <div>
          <h1 className="aboutSectionTitle">Rólunk</h1>
          <div className="aboutHeroText">
            A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet,
            amely a Villamosmérnöki és Informatikai Karon működik. A
            szakkollégium 2003-ban vette fel Simonyi Károly, a BME
            Villamosmérnöki és Informatikai Karának rajongva tisztelt
            professzora nevét. A Simonyi Károly Szakkollégium célja, hogy
            elsősorban a szakkollégium tagjai, lehetőség szerint a
            Villamosmérnöki és Informatikai Kar minden hallgatója számára
            lehetőséget biztosítson az egyetemi képzést kiegészítő ismeretek
            elsajátítására. Ennek érdekében tanfolyamokat, bemutatókat,
            konferenciákat és más szakmai rendezvényeket szervez, lehetőségéhez
            mérten infrastruktúrával támogatja a hallgatók önálló szakmai
            munkáit. Ezenkívül a szakkollégium céljai közé tartozik, hogy a
            tagjai által elért eredményeket minél szélesebb körben publikálja, a
            magyar felsőoktatás más egységeivel és a szakemberekkel
            megismertesse a szakkollégiumban folyó munkát.
          </div>
        </div>
        <div className="aboutHeroImage"></div>
      </div>
    </div>
  );
}
