---
author: Märt Põder
tags:
  - e-hääletus
  - krüpto
  - e-riik
  - propaganda
disableComments: true
date: 2015-03-30 06:03:00
image: images/cryptobarn.png
title: Vaadeldamatu e-hääletus pole usaldusväärne
slug: rohkem-kryptot
description: 'Kuigi kodu- ja välismaised eksperdid on teinud valimiskomisjonile korduvalt ettepanekuid parandada e-hääletuse süsteemi krüptograafia vahenditega, on neid järjekindlalt eiratud. Kui ei leidu poliitilist valmisolekut viia järgneva kahe valimistevaba aasta jooksul e-hääletus vastavusse tänapäevaste demokraatlike valimiste standarditega, siis võib ajaloos kõige esimese üleriigilise e-hääletuse läbiviija tiitel jäädagi meie e-riigi ainsaks saavutuseks.'
---

Ükski ettepanekutest e-valimiste usaldusväärsuse parandamiseks pole olnud tungivam kui viia e-hääletus vastavusse "otsast lõpuni kontrollitavuse" (_end-to-end verifiability_) nõuetega.

Resoluutseima neist leiab ilmselt OSCE 2011. aasta Riigikogu valimiste vaatlusmissiooni raportist, kus pannakse ette, et loodaks "avatud ja osapooli kaasav töörühm, et kaaluda kontrollitavust võimaldava internetihääletuse skeemi või samaväärselt usaldusväärse mehhanismi kasutuselevõtmist, mille abil saaks valija veenduda ega tema häält pahavara abil muudetud ei ole". <A HREF="#viited"><sup>[1]</sup></A>

Kuigi Andres Herkel kinnitas 2012. aastal Riigikogus põhiseaduskomisjoni nimel e-hääletusega seotud seadusemuudatusi tutvustades, et viidatud OSCE raportist "arvestati peaaegu kõike, mis puudutas elektroonilist hääletust" <A HREF="#viited"><sup>[2]</sup></A>, pole seda siiski tehtud.

Seadusega võimaldatud "elektroonilise hääle kontroll" <A HREF="#viited"><sup>[3]</sup></A> sarnaneb OSCE poolt soovitatud valimiste usaldusväärsuse tagamise mehhanismile üksnes nime poolest.

<h2>Otsast lõpuni kontrollitavus</h2>

Otsast lõpuni kontrollitavus on kontseptsioon, mille abil püütakse kirjeldada ning tagada digikeskkonnas läbiviidava hääletuse vaadeldavus ligilähedaselt samasugusel määral, nagu oleme harjunud kontrollima sedelite ja valimiskastidega valimisi. Selle eesmärk on määratleda põhiseadusega ette nähtud demokraatlike valimiste nõuded digikeskkonna jaoks sobival abstraktsioonitasemel.

Üksiku valija jaoks on oluline individuaalne kontrollitavus. See tähendab, et iga valija peab saama veenduda, et tema hääl edastati, salvestati ja loeti valimistel kokku õigesti. Universaalne kontrollitavus seevastu tähendab, et iga valimiste vaatleja peab saama veenduda, et kõik salvestatud hääled on arvesse võetud, üleliigseid hääli pole lisatud ning hääled on korrektselt kokku loetud.

Otsast lõpuni kontrollitavus on loodud ületama e-hääletuse põhimõttelist probleemi sellega, et meil pole võimalik näha, mis toimub hääletuse läbiviimise eest vastutava arvutisüsteemi sees, ja niimoodi veenduda, et hääletust viiakse läbi korrektselt. Sedelite-kastide abil läbiviidavate valimiste puhul on meil kõigil aga see võimalus olemas.

<h2>Põhimõtteline vaadeldavuse dilemma</h2>

Oleme harjunud tagama hääle salajasust, märkides oma valiku sedelile valimiskabiini privaatsuses ja murdes seejärel sedeli kokku — ning pärast valimiskasti laskmist on valija ja tema hääle seos kõrvalseisja jaoks praktiliselt tuvastamatu.

Seejuures saame jälgida nii iseenda kui teiste sedelite valimiskasti laskmist, sedelitega täidetud valimiskastide kokkukogumist, sedelite väljavõtmist ning lõpuks sedelitele märgitud häälte kokkulugemist. See annab meile robustse ja arusaadava kindluse, et hääletus viidi läbi korrektselt.

Arvutisüsteemide sees tiksuvate bittide-baitide vaadeldamatuse probleemi lahenduseks on teadlased pakkunud välja eri krüptograafilisi lahendusi, mille abil saame tagada häälte individuaalse ja universaalse kontrollitavuse.

Kui sedelite-kastide puhul tagab kindluse protsessi lihtsus ja jälgitavus, siis e-hääletuse puhul annavad krüptograafilised lahendused meile kindluse, mis põhineb hoopis matemaatilisel tõestusel.

<h2>Krüptograafiliselt tagatud usaldus</h2>

Kuigi see pole sama, mis jälgida sedelite liikumist oma silmaga, on otsast lõpuni matemaatiliselt kontrollitav krüptograafiline jälg sedeli teekonnast siiski parem valimiste korrektsuse tagatis kui arvutisüsteemi käitava “itimehe” ausõna.

Arvutisüsteemid on oma keerukuse tõttu alati haavatavad. Iga süsteem on täpselt nii turvaline, kui turvaline on selle nõrgim bitt. Sageli on aga suurim turvarisk hoopis süsteemi käitav inimene. Seetõttu pole väga ratsionaalne usaldada kolmandik kõigist üleriigiliselt antavatest häältest pimesi ühe kompromiteeritava institutsiooni kätte.

Krüptograafia võimaldab sellised riskid hajutada ning tagada usaldusväärsuse isegi osaliselt kompromiteeritud süsteemis.

On püütud argumenteerida, et digikeskkonnas hääletamisel peaksime üldse loobuma valimiste vaatlemisest isiklikult ning hakkama usaldama audiitoreid, kes meile kinnitaks, et kõik arvutite sisemuses toimunu oli korrektne.

Kergekäeline loobumine vaadeldavusest pole aga põhjendatud, sest valijatel on selle järgi harjumuspärane ja õigustatud ootus. Tegelikult pole ka audiitoril ilma kirjeldatud krüptograafiliste lahendusteta võimalust saada usaldusväärset kinnitust arvutisüsteemi sisemuses toimuva protsessi korrektsuse kohta.

Seetõttu on e-hääletusega tegelevate teadlaste enamuse veendumus, et otsast lõpuni kontrollitavust pakkuvad krüptograafilised lahendused on ainus viis, kuidas tagada hääletuse usaldusväärsus digikeskkonnas toomata ohvriks põhiseaduslikke printsiipe nagu valimiste ühetaolisus või hääle salajasus.

<h2>Raskused lubaduste täitmisega</h2>

Kuigi ka Eesti e-hääletuse süsteemis kasutatakse episoodiliselt krüptograafia vahendeid, pole tehtud pingutusi otsast lõpuni kontrollitavuse tagamiseks.

Kasutusele võetud lahendus hääle kontrollimiseks ei vasta individuaalse kontrollitavuse kriteeriumile, sest võimaldab valijal häält kontrollida ainult piiratud aja jooksul ega anna seega võimalust veenduda, et hääl õigel kujul ka lugemisele läks. Ka pole tehtud midagi universaalse kontrollitavuse tagamiseks.

Ometi näib Riigikogu arvavat, et on kinnitanud e-hääletuse täiendused, mis viivad meie süsteemi vastavusse OSCE soovitustega. Ka Euroopa Nõukogu e-hääletuse standardite töörühma koosolekute protokollidest leiab täitmata lubaduse, et Eesti võtab otsast lõpuni kontrollitava e-hääletuse süsteemi Norra eeskujul kasutusele juba 2013. aasta KOV valimistel. <A HREF="#viited"><sup>[4]</sup></A>

<h2>Osaline lahendus on puudulik</h2>

Kui heita pilk OSCE käesoleva aasta Riigikogu valimiste esialgsesse raportisse <A HREF="#viited"><sup>[5]</sup></A>, siis leiab sealt osutuse, et e-hääle kontrollimise sisseviimine "vastab osaliselt" (_partially address_) soovitusele otsast lõpuni kontrollitavuse kohta.

Kuna jutt on aga mehhanismist, mille eesmärk on tagada kontrollitavus sõna otseses mõttes "otsast lõpuni", st kogu hääletussüseemi ulatuses tervikuna, siis tähendab mistahes osaline lahendus siin tegelikult läbikukkumist.

Kui demokraatlike valimiste põhimõtete kaitsmine krüptograafia vahenditega kõlab liiga abstraktselt, siis võib ette kujutamisel olla abi võrdlusest linnamüüriga.

Poolik linnamüür ei kaitse linna soovimatute sissetungijate eest. Osaliselt valmis linnamüür ei ole päriselt linnamüür, vaid saab selleks alles siis, kui ümbritseb kogu linna ja on varustatud suletavate väravatega.

Ka põhiseaduses sätestatud nõudmised demokraatlikele valimistele on kas täidetud või mitte, vahepealset varianti pole.

<h2>Otsustajad ei valda teemat</h2>

Soovitus kasutada e-hääletuse kontrollitavuse tagamiseks sellisel tasemel krüptograafiat pole tegelikult uus. Suund otsast lõpuni kontrollitavale süsteemile soovitati võtta juba ühes e-hääletuse lähteuuringutest, mis telliti Tartu Ülikooli teadlastelt 2001. aastal. <A HREF="#viited"><sup>[6]</sup></A>

Pole head selgitust, miks on eiratud nii seda kui ka paljusid teisi soovitusi, mida on e-hääletuse parandamiseks välja käinud nii meie oma teadlased kui ka Euroopa Nõukogu e-hääletuse standardite töörühma eksperdid.

Mind ei üllata seejuures, et Riigikogu liikmed ei saa aru, mis on e-hääletusega seotud küsimuste tegelik sisu, sest tegu on kahe väga erineva valdkonna piiril oleva uurimisalaga, mille teaduslik käsitlemine eeldab pädevust nii riigiõiguse kui tehnoloogia põhimõtteliste küsimuste alal.

Samas on täiesti vastuvõetamatu, et rohkem kui kümne aasta jooksul pole suudetud luua valimiskomisjoni juurde laiapõhjalist töörühma, suudaks arutada e-hääletuse küsimused piisaval teoreetilisel tasemel sisuliselt läbi ning teha nende sisu selgeks ka Riigikogule, selle komisjonidele, aga ka üldsusele, kes e-hääletuse küsimuses jätkuvalt lõhestunud on.

Kui niivõrd ulatuslike valimissüsteemi uuendustega nagu üldise e-hääletuse võimaldamine ei kaasne avalikkusele mõistetavat debatti ja sellest lähtuvat tahet uuendusi usaldada, siis on need määratud läbikukkumisele.

<h2>Ikka kindlalt edasi</h2>

Ilmselge märk probleemidest vaatab vastu juba OSCE 2007. aasta Riigikogu valimiste raportist:

"Kui /—/ käesolevas raportis esiletõstetud tõsistele probleemidele ei leita toimivat lahendust, tuleks võimudel tõsiselt kaaluda, kas e-hääletus üldse peaks olema laialdaselt kättesaadav hääletusmeetod või kas ei peaks seda hoopis kasutatama piiratud alustel või üldse mitte kasutama." <A HREF="#viited"><sup>[7]</sup></A>

Samasugust soovitust korrati 2014. aastal ka seni ainsas meie e-hääletuse süsteemi kohta tehtud sõltumatus teadusekspertiisis.

Michigani Ülikooli professor J Alex Haldermani juhitud rahvusvaheline töörühm soovitab lisaks konkreetse e-hääletuse süsteemi käitamise lõpetamisele võtta eeskuju Norra e-hääletusest, mille puhul on juba alates selle käivitamisest 2008. aastal võetud suund otsast lõpuni kontrollitavuse nõuete tagamisele. <A HREF="#viited"><sup>[8]</sup></A>

Suutmatus võtta kuulda teadusringkondade kriitikat jõudis oma absurdsuse tipuni, kui arutellu sekkus peaminister Taavi Rõivas, kes seadis valitsuse pressikonverentsil raporti usaldusväärsuse kahtluse alla põhjendusega, et ta olla teadlasi kuugeldanud ning keegi neist olla Facebookis sõber ühe Keskerakonna poliitikuga:

"Nii Eesti oma eksperdid kui OSCE ametlikud vaatlusmissioonid on korduvalt kinnitanud e-valimiste turvalisust. /—/ Kõik need eksperdid, kes on tõsiseltvõetavad, on Eesti e-valimisi turvaliseks hinnanud. /—/ Need konkreetsed inimesed pole suutnud tuua välja ühtegi meile uudset fakti. /—/ Eesti inimesed usaldavad e-valimisi. Ja on ka põhjust." <A HREF="#viited"><sup>[9]</sup></A>

<h2>Valed ja endapettus</h2>

Peaminister esiteks valetab siin otseselt OSCE vaatlusmissioonide raportite kohta, et need on meie e-hääletamise hinnanud turvaliseks, aga mõtleb teiseks kohapeal välja ka need tõsiseltvõetavad väliseksperdid, kes meie e-hääletamist auditeerinud on, sest tegelikult on siiani rahvusvaheliste ekspertide poolt auditeerimata isegi e-hääletuse lähtekood.

Kui on tõsi Rõivase väide, et raportis ei toodud välja ühtegi uut fakti, siis tekib küsimus, miks pole peaministrile nii hästi teada olevate puuduste kõrvaldamiseks midagi ette võetud.

Haldermani töörühma raport on siiani ainus sõltumatu uuring Eesti e-hääletamise süsteemi kohta. See on avaldatud mainekas eelretsenseeritavas teadusajakirjas ja on siiani ümber lükkamata. Raportit on tutvustatud nii valdkonna teadlaste kui ka häkkerite konverentsidel, kus see on saanud ainult positiivset tagasisidet.

Selline kriitika meie e-hääletuse suunal on tegelikult valdkonda uurivate teadlaste uurimistöödes valdav, kuigi enamasti esitatakse seda äärmise delikaatsusega. <A HREF="#viited"><sup>[10]</sup></A> Meie e-hääletust ei peeta seejuures eeskujuks ei tehnoloogilises ega ka õiguslikus mõttes, vaid pigem nähakse selles hulljulget sotsiaalset eksperimenti, mida on võimalik läbi viia vaid endise Nõukogude Liidu riigis, mis pole veel oma demokraatlikke instinkte suutnud taastada.

Kuigi armastame oma e-riigiga välismaal uhkeldamas käia, siis tasuks meie esindajatel tõsiselt järele mõelda, kas ei kiida e-hääletamise asjatundjad meid pigem viisakusest kui püüdlikke idioote, kelle kohta on teada, et nad rohkemaks suutelised polegi.

<P><a href="https://en.wikipedia.org/wiki/My_Sister,_My_Sitter"><img style="float: center; margin: 0 0 0 0;" src="http://boamaod.github.com/images/cryptobarn.png" alt="Marge uhkeldamas Homeriga taasavatud Springfield Squidport'is. Rohkem krüptot saab poest nende selja taga." title="Marge uhkeldamas Homeriga taasavatud Springfield Squidport'is. Rohkem krüptot saab poest nende selja taga."></a></P>

<h2 id="viited">Viited</h2>

[1] http://www.osce.org/odihr/77557<br>
[2] http://www.riigikogu.ee/?op=steno&stcommand=stenogramm&date=1336460700#pk10289<br>
[3] https://www.riigiteataja.ee/akt/1045561?leiaKehtiv#para48b6<br>
[4] http://www.coe.int/t/DEMOCRACY/ELECTORAL-ASSISTANCE/themes/evoting/2013ARDITA.pdf lk 18<br>
[5] http://www.osce.org/odihr/elections/estonia/139566<br>
[6] http://www.vvk.ee/public/dok/lipmaamyrk.pdf lk 14jj<br>
[7] http://www.osce.org/odihr/elections/estonia/25925<br>
[8] https://estoniaevoting.org/findings/paper/<br>
[9] http://meediaveeb.valitsus.ee/show.php?path=/2014/pressikonverents-2014-05-15-rnd11069.f4v al 28:55<br>
[10] http://www.ifes.org/Content/Publications/News-in-Brief/2012/June/~/media/B7FB434187E943C18F4D4992A4EF75DA.pdf lk 142 (150)<br>
