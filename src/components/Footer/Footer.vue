<template>
    <div class="w-full h-auto relative">
        <div class="absolute pin">
            <img class="runner z-10" src="@/assets/walk-2635038_1920.jpg" alt="">
            <div class="after absolute bg-red z-20 pin"></div>
        </div>

        <div class="relative pin z-30 flex flex-col items-center">
            <div class="flex md:flex-row flex-col-reverse flex-col md:mt-16 mt-8 md:w-full justify-start md:justify-center xl:justify-start items-start">
                <div class="flex flex-col xl:ml-20 md:mr-12 items-center md:items-start w-full md:w-auto">
                    <div class="uppercase md:text-xl flex flex-col md:font-medium text-m font-bold md:mb-12 mb-4">
                        <a class="no-underline text-white my-3 cursor-pointer" @click="modal('logo')">Of logó
                            használata</a>
                        <a class="no-underline text-white my-3 cursor-pointer" @click="modal('imp')">Impresszum</a>
                        <a class="no-underline text-white my-3 cursor-pointer" @click="modal('data')">Adatvédelmi
                            tájékoztató</a>
                        <!--<a class="no-underline text-white my-3 cursor-pointer" @click="modal('general')">Általános-->
                        <!--szerződési feltételek</a>-->
                    </div>
                </div>
                <div class="flex flex-col text-white contact font-light md:self-start">
                    <h1 class="text-xl mb-2 uppercase font-medium tracking-wide" id="contact">Kapcsolat</h1>
                    <span class="my-1 text-md">Vadász Vince</span>
                    <span class="my-1 text-md">+36 30 579 2343</span>
                    <span class="my-1 text-md">info@orszagfutas.hu</span>
                    <h2 class="text-base mb-2 mt-6 uppercase font-medium tracking-wide">Mozdulj érte egyesület</h2>
                    <span class="my-1 text-md">1223 Budapest, Hant u. 18.</span>
                    <span class="my-1 text-md">adószám: 18731215-1-43</span>
                </div>
            </div>
            <div class="flex items-center lg:self-start self-center w-full md:ml-20 md:mb-12 mb-4 flex-col md:flex-row container">
                <img class="w-24" src="@/assets/OF_white-shadow.svg" alt="">
                <span class="text-white md:text-base text-sm font-medium md:px-4 px-0 text-center">COPYRIGHT © 2018 ORSZÁGFUTÁS <span
                        class="md:inline-block hidden">|</span> Designed by <a
                        class="text-white no-underline text-m font-bold" href="https://www.visualz.hu" target="_blank">VISUALZ</a></span>
            </div>


            <modal name="logo" :adaptive="true" height="auto" :delay="50" :scrollable="true"
                   :clickToClose="true"
                   classes="bg-white shadow-lg md:rounded-table rounded-none">
                <div class="w-4/5 bg-red rounded-r-full flex self-start" @click="closeModel">
                    <h1 class="my-3 uppercase text-lg font-medium ml-6 text-white">OF LOGÓ HASZNÁLATA</h1>
                </div>
                <div class="md:py-2 py-2 text-m px-8 mx-4 text-justify mb-6 leading-normal" @click="closeModel">
                    <p class="mb-2"> Az Országfutás szervezői szívesen veszik, ha egyéb szervezett eseményeddel
                        csatlakozol a
                        kezdeményezésünkhöz. Ebben az esetben javasoljuk a csoportos regisztrációt.</p>
                    <p> Hozzájárulunk ahhoz, hogy az OF logót illetve az aktuális esemény képét használd, ha az általad
                        szervezett esemény nonprofit jellegű. Ha nem, kérjük keress meg az info@orszagfutas.hu címen.
                    </p>
                </div>
            </modal>
            <modal name="imp" :adaptive="true" height="auto" :delay="50" :scrollable="true"
                   :clickToClose="true"
                   classes="bg-white shadow-lg md:rounded-table rounded-none">
                <div class="w-4/5 bg-red rounded-r-full flex self-start" @click="closeModel">
                    <h1 class="my-3 uppercase text-lg font-medium ml-6 text-white">IMpresszum</h1>
                </div>
                <div class="md:py-2 py-2 text-m px-8 mx-4 text-justify mb-6 leading-normal" @click="closeModel">
                    <p class="tracking-wide">
                        Tárhelyszolgáltató neve:
                        MediaCenter Hungary Kft. <br>
                        Tárhelyszolgáltató székhelye és telephelye:
                        6000 Kecskemét, Sosztakovics u. 3. II/6 <br>
                        Tárhelyszolgáltató e-mail címe: <br>
                        mediacenter@mediacenter.hu <br>
                        A weboldal üzemeltetője:
                        Mozdulj érte Egyesület <br>
                        Egyesület elnöke:
                        Vadász Vince <br>
                        Székhely:
                        1223 Budapest, Hant u. 18. <br>
                        Telefonszám:
                        +36 30 579 2343 <br>
                        E-mail cím:
                        info@orszagfutas.hu <br>
                        Adószám:
                        18731215-1-43 <br>
                        Egyesületet nyilvántartásba vevő hatóság:
                        Fővárosi Törvényszék
                        <br>
                        Nyilvántartásba vétel ideje:
                        2015.11.07<br>
                        Nyilvántartási szám:
                        01-02-0015936
                        <br>
                        Bankszámla:
                        UniCredit 10918001-00000085-87750004
                    </p>
                </div>
            </modal>
            <!--<modal name="general" :adaptive="true" height="auto" :delay="50" :scrollable="true"-->
            <!--:clickToClose="true"-->
            <!--classes="bg-white shadow-lg md:rounded-table rounded-none">-->
            <!--<div class="w-4/5 bg-red rounded-r-full flex self-start" @click="closeModel">-->
            <!--<h1 class="my-3 uppercase text-lg font-medium ml-6 text-white">általános szerződési feltételek</h1>-->
            <!--</div>-->
            <!--<div class="md:py-2 py-2 text-m px-8 mx-4 text-justify mb-6 leading-normal" @click="closeModel">-->
            <!--<p class=""> TODO</p>-->
            <!--</div>-->
            <!--</modal>-->
            <modal name="data" :adaptive="true" height="auto" :delay="50" :scrollable="true"
                   width="800"
                   classes="bg-white shadow-lg md:rounded-table rounded-none data">
                <div class="w-4/5 bg-red rounded-r-full flex self-start" @click="closeModel">
                    <h1 class="my-3 uppercase text-lg font-medium ml-6 text-white">adatvédelem</h1>
                </div>
                <div class="md:py-2 py-2 text-m px-8 mx-4 text-justify font-light mb-6 leading-normal"
                     @click="closeModel">
                    <h1 class="text-lg uppercase">A Mozdulj érte Egyesület adatvédelmi tájékoztatója</h1>
                    <h2>Bevezető</h2>
                    <p>A Mozdulj érte Egyesület tájékoztatja a versenyein résztvevőket és nevezési rendszerébe
                        regisztrálókat adatkezelési gyakorlatáról és a felhasználók jogorvoslati lehetőségeiről. A
                        Mozdulj érte Egyesület mint adatkezelő kötelezettséget vállal arra, hogy az általa nyújtott
                        adatkezeléssel kapcsolatos szolgáltatás megfelel a hatályos jogszabályokban meghatározott
                        elvárásoknak.</p>
                    <h2>Az adatkezelő adatai:</h2>
                    <p>Név: Mozdulj érte Egyesület <br>
                        Székhely: 1223 Budapest, Hant u. 18. <br>
                        Postacím: 1112 Budapest, Sasadi út 186. <br>
                        Cégjegyzékszám: 01-02-0015936 <br>
                        Adószám: 18731215-1-43 <br>
                        e-mail-cím: info@orszagfutas.hu <br>
                        Telefonszám: +36305792343 <br>
                        Honlap: orszagfutas.hu <br>
                    </p>
                    <h2>Az adatkezelés jogalapja</h2>
                    <p>Versenyeinkre való nevezésével, termékeink megvásárlásával, megrendelésével, hírleveleinkre és
                        edzésterveinkre való feliratkozásával ön szerződést köt velünk a meghatározott szolgáltatások
                        teljesítésére, illetve termékek megvásárlásra.
                        A személyes adatok kezelésének jogalapja a szerződés teljesítéséhez (versenyek, rendezvények
                        lebonyolítása stb.) szükséges adatok esetében a szerződés teljesítése. Ezek az adatok az online
                        nevezési rendszerbe való regisztráció során kötelezően kitöltendőként jelennek meg. A nem
                        kötelezően kitöltendő adatok kezelésének alapja az ön hozzájárulása.
                        Az általános adatkezelési hozzájáruláson túlmenően külön hozzájárulást kérünk a marketingcélú
                        e-mailek és SMS-ek küldéséhez. Ez a hozzájárulás a többi adattól függetlenül bármikor
                        visszavonható. A visszavonás nem akadálya a versenyeken való részvételnek.
                    </p>
                    <p>
                        A személyes adatok kezelésének jogalapja a szerződés teljesítéséhez (versenyek, rendezvények
                        lebonyolítása stb.) szükséges adatok esetében a szerződés teljesítése. Ezek az adatok az online
                        nevezési rendszerbe való regisztráció során kötelezően kitöltendőként jelennek meg. A nem
                        kötelezően kitöltendő adatok kezelésének alapja az ön hozzájárulása.
                    </p>
                    <p>Az általános adatkezelési hozzájáruláson túlmenően külön hozzájárulást kérünk a marketingcélú
                        e-mailek és SMS-ek küldéséhez. Ez a hozzájárulás a többi adattól függetlenül bármikor
                        visszavonható. A visszavonás nem akadálya a versenyeken való részvételnek.</p>
                    <h2>Más versenyző benevezése</h2>
                    <p>
                        Tapasztalatunk szerint ügyfeleink igénylik azt a lehetőséget, hogy barátaikat, családtagjaikat,
                        kollégáikat is benevezhessék versenyeinkre. Ez az egyszerűsített nevezés a futók és a Mozdulj
                        érte Egyesület életét is megkönnyíti. Csapatnevezés esetén pedig eleve a csapatvezetőnek kell a
                        tagokat is beneveznie, mivel csapat csak együtt nevezhet, amihez nem várhatjuk el minden tag
                        személyes megjelenését.
                    </p>
                    <p>A Mozdulj érte Egyesület ezért megadja a lehetőséget ügyfeleinek, hogy másokat is benevezhessenek
                        versenyeire. Ilyen esetben feltételezzük és elvárjuk, hogy a benevezést végző ügyfelünk
                        rendelkezzék az érintett személyek hozzájárulásával a nevezéssel járó adatkezeléshez. A
                        személyes adatok kezeléséhez általában nem szükséges az írásos hozzájárulás, ezért mi sem
                        terheljük ügyfeleinket bürokratikus előírásokkal.</p>
                    <h2>Az adatkezelés célja és időtartama</h2>
                    <span>A Mozdulj érte Egyesület által folytatott adatkezelés általános célja:</span>
                    <ul>
                        <li>ügyfeleink beazonosítása és nyilvántartása, valamint a nevezések rögzítése,</li>
                        <li>az általunk szervezett események lebonyolítása,</li>
                        <li>ügyfeleink tájékoztatása és marketingtevékenységünk biztosítása,</li>
                        <li>pénzügyi nyilvántartások vezetése,</li>
                        <li>statisztikák, elemzések összeállítása,</li>
                        <li>kedvezményes nevezési lehetőség biztosítása esetén a kedvezményre jogosultak körének
                            meghatározása és a kedvezmények hozzárendelése az érintett ügyfelekhez,
                        </li>
                        <li>eseményeinken felmerülő egészségügyi probléma esetén az ügyfél által megadott hozzátartozó
                            értesítése,
                        </li>
                        <li>szolgáltatásaink folyamatos javítása, újabb események előkészítése.</li>
                    </ul>
                    <p>Adatbázisunkban szereplő ügyfeleink a jövőben is bármikor nevezhetnek versenyeinkre, vagyis
                        beazonosításuk meghatározatlan ideig szükséges lehet. Azonban a háromévenkénti felülvizsgálat
                        során törölhetjük olyan ügyfelek adatait, akiknek több éve nem volt új nevezésük.</p>
                    <h2>Marketingtevékenységünk részletezése</h2>
                    <span>Marketingtevékenysége keretében a Mozdulj érte Egyesület</span>
                    <ul>
                        <li>statisztikai elemzéseket végez abból a célból, hogy javíthassa szolgáltatásait és
                            megalapozza akcióit,
                        </li>
                        <li>célcsoportokat képez ügyfélköréből, akiket egy adott szolgáltatás vagy akció érdekelhet,
                            illetve akik számára az akciókat meghirdeti,
                        </li>
                        <li>e-mailben hírleveleket, reklámokat küld ki,</li>
                        <li>felhasználhatja az eseményein részt vevőkről készült fényképeket, videókat (ehhez
                            ügyfeleinknek minden egyes nevezésükkel kifejezetten hozzá kell járulniuk, és ez a
                            hozzájárulás a nevezés elengedhetetlen feltétele, mivel a képeken szereplőket nem minden
                            esetben tudjuk név szerint beazonosítani).
                        </li>
                    </ul>
                    <h2>Adattovábbítás külföldre</h2>
                    <p>A Mozdulj érte Egyesület semmilyen személyes adatot nem továbbít külföldre, azonban fenntartja a
                        jogot, hogy szükség esetén a felhőbe költöztesse virtuális szervereit. Erről bővebben olvashat a
                        szerverekről szóló szakaszban.</p>
                    <h2>A kezelt adatok köre</h2>
                    <p>Az általunk kezelt személyes adatokat lent részletezzük az adatkezelés céljával együtt.
                        Ügyfeleinkről az általuk megadott adatokat tartunk nyilván. Ugyancsak nyilvántartjuk a versenyek
                        során elért eredményeket (pl. befutóidő, helyezés, megtett távolság) és a versenyszervezéssel
                        kapcsolatos adatokat (pl. rajtszám átvétele, nevezés visszaigazolása).</p>
                    <h2>E-mailek küldése</h2>
                    <span>E-mailt küldünk minden ügyfelünknek</span>
                    <ul>
                        <li>az online nevezési rendszerbe történt sikeres regisztrációról,</li>
                        <li>a sikeres nevezésről a személyes nevezés kivételével (visszaigazoló levél),</li>
                        <li>jelszócsere kezdeményezése esetén,</li>
                        <li>a versenyekkel kapcsolatos tudnivalókról,</li>
                        <li>szükség esetén ügyintézés, adategyeztetés céljából.</li>
                    </ul>
                    <p>A fent említett üzenetek a szolgáltatásunk részét képezik, és a marketingcélú hozzájárulástól
                        függetlenül küldjük őket.</p>
                    <p>Reklámcélú e-mailt, hírlevelet csak annak küldünk, aki ehhez hozzájárulását adja. Ez a
                        hozzájárulás bármikor visszavonható, például a minden hírlevelünk alján szereplő leiratkozási
                        funkcióval, az online nevezési rendszerben az adatmódosítás gombra kattintva vagy külön
                        e-mailben.</p>
                    <h2>Az adatok megismerésére jogosultak köre</h2>
                    <p>Az ügyfelek által megadott személyes adatok megismeréséhez cégen belül csak azon dolgozók
                        jogosultak, akik nevezéssel kapcsolatos feladatokat látnak el, illetőleg az adatok
                        karbantartását, elemzését, összesítését, értékelését végzik, valamint akik az ügyfelek esemény
                        előtti és utáni tájékoztatásáért felelősek. A fent említett körbe tartoznak:</p>
                    <ul>
                        <li>a neveztetők és adatrögzítők,</li>
                        <li>a rendszergazda és az adatbázis kezelője,</li>
                        <li>a pénzügyi dolgozók,</li>
                        <li>a marketinges dolgozók.</li>
                    </ul>
                    <h2>A weboldalak látogatásakor keletkező adatok</h2>
                    <p>Mint minden webszerver az interneten, a mi webszervereink is automatikusan tárolnak egyes
                        adatokat a weboldalaink megtekintésekor, amelyek személyes adatnak minősülhetnek. Az
                        orszagfutas.hu felkeresésekor a szerverek az általánosan szokásos adatokat tárolják az esetleges
                        üzemzavarok elhárítása, a szolgáltatások javítása és a betörési kísérletek felderítése
                        végett:</p>
                    <ul>
                        <li>a látogatás időpontja,</li>
                        <li>a megtekintett oldal címe,</li>
                        <li>a hivatkozó oldal címe (ahonnan a látogató érkezett),</li>
                        <li>a látogató IP-címe,</li>
                        <li>a látogató böngészőfejléce (ún. user agent), amely az operációs rendszer és a böngésző
                            típusát, verziószámát tartalmazza.
                        </li>
                    </ul>
                    <h2>A versenyzőkről/ügyfelekről tárolt adatok</h2>
                    <p>A felsorolt adatokat a versenyző beazonosításához (pl. hasonló nevű versenyzők
                        megkülönböztetéséhez), a kapcsolattartáshoz, a szolgáltatás biztosításához (pl. versenyekkel
                        kapcsolatos értesítések kiküldése), a verseny lebonyolításához (pl. rajtszámozás, nevezés
                        ellenőrzése, problémamegoldás), pénzügyi összesítésekhez és a fent részletezett
                        marketingcélokhoz is használjuk. A regisztrációkor, illetve nevezéskor nem feltétlenül szükséges
                        adatokat nem kötelezőként jelöltük meg.</p>
                    <span>Alapadatok:</span>
                    <ul>
                        <li>teljes név,</li>
                        <li>e-mail-cím,</li>
                        <li>kér-e információs anyagokat, e-maileket az elkövetkezendő versenyekről, lehetőségekről,
                        </li>
                    </ul>
                    <span>Az online nevezési rendszerben nevezőkről nyilvántartott további adatok:</span>
                    <ul>
                        <li>online azonosító,</li>
                        <li>felhasználónév,</li>
                        <li>titkosított jelszó,</li>
                        <li>az utolsó jelszócsere dátuma (a program működéséhez és hibaelhárításhoz szükséges),</li>
                        <li>online kártyás befizetéskor a tranzakcióazonosító, amely a pénzügyi ellenőrzésekhez és a
                            problémamegoldáshoz szükséges.
                        </li>
                    </ul>
                    <h2>Adatok törlése</h2>
                    <p>Ügyfeleink a jogszabály alapján bármikor kérhetik személyes adataik törlését az adatbázisunkból,
                        online nevezési rendszerünkből, illetve az eredménylistákból. Folyamatban levő nevezés esetén ez
                        csak a versenytől való visszalépéssel együtt lehetséges.</p>
                    <p>A hozzájárulás visszavonása után is tárolhatjuk azokat az adatokat, amelyek jogi kötelezettségünk
                        teljesítéséhez, illetve létfontosságú érdekeik érvényesítéséhez kellenek. Jogi kötelezettségeink
                        közé tartozik a pénzügyi ellenőrzéseknek való megfelelés, amelyhez az adatbázisban tárolt
                        fizetési adatokra van szükség. Jogos érdekünk az adatbázis integritásának megőrzése. Ennek
                        keretében technikai okból (az adatbázisok felépítése miatt) nem tudunk olyan adatot törölni,
                        amely más adathoz szorosan kötődik (pl. külső kulcs). Jogi kötelezettségünk, egyben jogos
                        érdekünk és harmadik személyekkel szembeni kötelezettségünk a biztonsági másolatok megőrzése,
                        hogy sérülés esetén az adatbázis helyreállítható legyen. A biztonsági másolatokból adatok nem
                        törölhetők, csak az éles adatbázisból. A biztonsági másolatokhoz csak a rendszergazda férhet
                        hozzá, és csak üzemzavar esetén használjuk fel őket helyreállításra. Jogos érdekünk továbbá,
                        hogy továbbra is kinyerhessük adatbázisunkból a statisztikai adatokat, például ne változzék a
                        versenyre nevezők száma és statisztikai összetétele. Harmadik személyek jogos érdeke, hogy
                        vissza tudjuk követni, ki nevezte be őket az adott versenyre (ha Ön benevezett valakit, akkor
                        neki problémája lehetne belőle, ha nem tudjuk tisztázni a nevezés részleteit), illetve hogy ne
                        töröljük a teljes csapat nevezését és eredményeit azért, mert egy csapattag az adatai törlését
                        kérte.</p>
                    <p>Ennek alapján csak azoknak az ügyfeleknek az adatait tudjuk teljesen törölni, akik soha nem
                        neveztek versenyeinkre, nem vásároltak tőlünk semmilyen terméket vagy szolgáltatást, azaz csak
                        beregisztráltak. Aki csak személyesen vagy átutalással nevezett, azaz nem kötődik hozzá érdemi
                        adat az online nevezési rendszerben, töröljük az adatait az online adatbázisból, de megmaradnak
                        a szükséges adatok a fő adatbázisunkban. Egyébként töröljük az ügyfél nevét, minden
                        elérhetőségét és címét, egyesületét, a nevezések során megadott „baj esetén értesítendő”
                        elérhetőségeit, a cége nevét, ha megadta, valamint az utolsó számlázási nevét és címét, és
                        minden más esetlegesen tárolt adatot, amelynek a megőrzése az adatbázis integritásához nem
                        szükséges. Így például bárki láthatja az eredménylistában, hogy a kategóriájában hatodiknak
                        rangsorolt versenyző előtt egy törölt versenyző volt ugyanabban a kategóriában; ezt kívánja a
                        sport tisztasága és ügyfeleink jogos érdeke.</p>
                    <p>Ha Ön az adatait töröltette, a későbbiekben újra nevezhet versenyeinkre, de nem tudjuk figyelembe
                        venni a korábbi nevezéseit. Így eleshet az „indult már BSI-eseményen” típusú kedvezményes
                        nevezési díjtól, a Jubileumi Futók Klubja tagságától, a Félmaratonmániában, a Fut a cég akcióban
                        és a Spuri Aranykártya számításában figyelembe vett eredményeitől, egyes további
                        díjkedvezményekre való jogosultságtól. Ha az adott évben indult a Fut a cég akció keretébe
                        tartozó versenyen, hátrányba kerülhet a cége az eredmény megállapításakor.</p>
                    <h2>Sütik használata a weboldalon</h2>
                    <p>Ez a weboldal úgynevezett sütiket (cookies) használ. A sütik olyan apró szöveges adatfájlok,
                        amelyek az ön webböngészéjőn keresztül weboldalunkat meglátogatva számítógépe merevlemezén
                        tárolódnak. A sütik bizonyos információkat (például egyedi oldal vagy nyelvi beállításokat)
                        tárolnak el, amelyeket az ön webböngészője – a sütik élettartamától függően – továbbít nekünk,
                        amikor ön ismét felkeresi weboldalunkat.</p>
                    <h2>
                        Jogorvoslati lehetőségek
                    </h2>
                    <p>Amennyiben úgy érzi, hogy a Mozdulj érte Egyesület vagy annak valamely dolgozója megsértette a
                        személyes adatainak védelméhez fűződő jogát, kérjük, vegye fel a kapcsolatot a Mozdulj érte
                        Egyesület-vel valamely elérhetőségünk útján, hogy a problémát mielőbb megoldhassuk.</p>
                    <p>Elérhetőségeink a tájékoztató elején olvashatóak.</p>
                    <p>Ha úgy véli, hogy a Mozdulj érte Egyesület problémájával kapcsolatban nem tette meg a megfelelő
                        lépéseket, lehetősége van a továbbiakban bírósághoz, illetve a Nemzeti Adatvédelmi és
                        Információszabadság Hatósághoz fordulni.</p>
                    <p>Nemzeti Adatvédelmi és Információszabadság Hatóság</p>
                    <p>Postacím: 1534 Budapest Pf.:834 <br>
                        Cím: 1125 Budapest Szilágyi Erzsébet fasor 22/C. <br>
                        Telefon: 06-1/391-1400 <br>
                        Fax: 36-1/391-1410 <br>
                        e-mail-cím: ugyfelszolgalat@naih.hu <br>
                        Weboldal: www.naih.hu <br>
                        Elnök: Dr. Péterfalvi Attila <br>
                    </p>
                    <h2>A Mozdulj érte Egyesület kikötése</h2>
                    <p>Az adatkezelő fenntartja a jogot, hogy szükséges esetben adatvédelmi nyilatkozatát
                        megváltoztassa. Erre azon esetekben kerülhet sor, ha a szolgáltatások köre bővül, a technikai
                        rendszer megváltozik, vagy azt jogszabály kötelezővé teszi. Azonban ilyen jellegű módosítás nem
                        jelentheti a személyes adatok eredeti céltól való eltérő kezelését.</p>
                    <div class="w-full flex items-center justify-center">
                        <button class="mx-auto my-8 border rounded-full bg-white border-red text-center
                    text-red py-2 px-4 hover:text-white hover:bg-red uppercase py-4 px-6" @click="closeModal('data')">
                            bezár
                        </button>
                    </div>
                </div>
            </modal>

        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            modal(target) {
                this.$modal.show(target);
            },
            closeModal(target) {
                this.$modal.hide(target)
            }
        }
    }
</script>

<style scoped>
    .runner {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 80% 60%;
    }

    .after {
        opacity: 0.75;
    }

    .data h2 {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 1.125rem;
    }
</style>