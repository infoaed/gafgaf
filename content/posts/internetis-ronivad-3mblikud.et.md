+++
title = 'Internetis ronivad ämblikud ja muud elukad'
slug = 'internetis-ronivad-3mblikud'
image = 'images/otsingud2.jpg'
date = "2000-08-01T14:09:00"
description = 'Andmete puhul on üks tähtsamaid asju, et nad oleks pärast sisestamist ka leitavad — olgu siis failinime, kataloogi, spetsiaalse identifitseerimiskoodi või muu võrdväärse informatsiooni abil. Igatahes on selge, et andmed peavad olema arukaks tarvitamiseks mõnel viisil struktureeritud. See on lihtne isikliku telefoniraamatu puhul, ka riikliku autoregistri puhul, kuid mida varieeruvamaks muutuvad kirjed andmebaasis, seda raskemaks läheb vastava andmekogu otstarbekas liigendamine. Hajusa andmebaasina käsitletav Internet oma kasvava kodulehtede arsenaliga paneb inimese võime asju enda korra järgi sättida karmilt proovile.'
disableComments = true
+++

Kes iganes on Internetiga lähemalt kokku puutunud, see teab umbkaudugi, mis on otsingumootor ehk _search engine_ ja milleks see vajalik on. Näiteks suutis minu 14-aastane õde tulla lagedale järgmise määratlusega:

> Otsingumootorid töötavad nii, et sisestad, mida sa otsida tahad, ja siis tuleb võimalikult palju neid saite, kus on see sõna kas pealkirjas või nii, arvuti ekraanile.

Suurem jagu kasutajaid enamasti sellega piirdubki. Et aga orienteeruda otsimisvõimaluste suhteliselt kirjus valikus, on tarvis veidike täpsemalt teada, mis tööpõhimõtted kindlustavad otsimootoritele nende eksistentsi.

## Kataloog ja indeks

Kuna lehekülgi sünnib ja sureb Internetis iga päev lugematu arv, siis pole mõeldav, et keegi suudaks nende kõikide üle arvet pidada. Ka ei ole kujuteldav selline tsentraliseeritud infokogumisorgan, kellele tuleks alati teada anda, kui lood või eemaldad mõne lehekülje. Sellepärast peavad Internetis leiduvale informatsioonile arukalt liigendatud ligipääsemise eest võitlejad tegelema lehekülgede registreerimise ja annulleerimisega omal jõul.

Üldiselt on selliseks liigendamiseks kaks võimalust. Esiteks, leida hulk inimesi, kes sirviks veebilehti, kirjutaks neis leiduvast kokkuvõtteid ja paigutaks vastavatesse kataloogidesse. Sellist inimeste (toimetajate) poolt loodud andmebaasi nimetatakse tavaliselt kataloogiks.

Teine võimalus on lasta sama töö teha ära selleks otstarbeks kirjutatud programmil (ämblik ehk _spider_), mis loomulikult suudab sellist suhteliselt mehhaanilist indekseerimise (ronimine ehk _crawling_) tööd teha märksa odavamalt ja kiiremini kui inimene.

Milles on aga andmebaaside erinevused? Inimestest kataloogijate tegevus peaks olema hõlpsasti ette kujutatav. Aga digitaalsed ämblikud?

Ämblik liigub mööda võrku ja registreerib selle, mis saadaval. Jälgides lehekülgedel leiduvaid viiteid, suudab ta jõuda nende lehtedeni, mis pole veel indekseeritud. Lehekülje registreerimisel võib ämblik (olenevalt oma intelligentsuse tasemest) luua indeksi kõigist leheküljel leiduvatest sõnadest, viidetest teistele lehekülgedele ning püüda eristada olulist ebaolulisest (nt sidesõnad, parasiitsõnad jne).

Olulistest märksõnadest, mida ämblik eristab šrifti suuruse ning eripära järgi, märksõna asukoha järgi leheküljel või spetsiaalse märksõnade kirjelduse järgi, luuakse dokumendile paik temaatilises kataloogis. Viidete abiga saab aga luua võrgust tervikliku kaardi, mida saab kasutada näiteks lehekülgede asjakohasuse ja kvaliteedi määramisel — mida rohkem viiteid vastava teema lehekülgedelt mõnele kindlale paigale leidub, seda kvaliteetsem ja autoriteetsem too paik siis ka on. Kõikide sõnade kohta peetav indeks aga lubab kasutada täistekstotsingut.

Tihti on lehekülgedel ka muud peale teksti — näiteks pilt ja heli. Vähemalt seni ei suuda ükski levinum otsimootor nendega korralikult hakkama saada, vaid lähtutakse ikkagi neis sisalduvatest kirjeldavatest tekstidest.

Paistab olevat ilmne, et inimese loodud kataloog sisaldab teatud olulist infot, mis on märgatav just inimesele, sellises kataloogis on kirjas lehekülje "mõte", kuigi ka toimetajad on erinevad ja erinevate lehekülgede mõtted erinevalt tõlgendatavad. Aga selline kataloog pakub vähemasti üht inimesele mõistetavat struktuuri, kus on võimalik oma inimliku põhikogemuse baasil orienteeruda.

Digitaalse ämbliku loodud indeks on seevastu põhjalikum ja pisiasju märkavam, kuid põhiline otsimine on siiski jäetud inimese teha, nimelt on sellise indeksi puhul vajalik tunda ämblike "hingeelu", et päringuid töötlevale mootorile anda edasi just see õige päring, mis kindlustab juba mõistliku ja inimliku vastuse. Arvata võib, et infotehnoloogia arenedes ja tehisintellekti loomisele üha lähenedes suudavad varsti ka ämblikud inimestega peaaegu võrdväärselt katalogiseerida.

## Päring

Päring koosneb kogu võrguavarust hõlmata püüdvate süsteemide puhul tavaliselt märksõnadest, fraasidest ja nende mõlemate loogilistest ühenditest, väiksemate süsteemide puhul lisaks veel teksti suvaliste osade päringutest. Tavaliselt saab kasutada fraaside ja sõnade komplekside puhul loogilist "ja"-d ja "või"-d, samuti eitust ja jaatust. See tähendab, et päringus võib nõuda:

* kas ühe või teise sõna esinemist leheküljel;
* selle ja veel teise sõna esinemist leheküljel,
* mõne sõna mitte-esinemist leheküljel,
* kolme eelneva omavahelisi kombinatsioone.

Samas on mõne süsteemi puhul võimalik otsida sõnade nimekirja alusel ning lähtuda erinevate sõnade võimalikult suurest esindatusest leheküljel.

Päringu efektiivsus sõltub ämblike loodud andmebaasi puhul suurelt jaolt kasutatavast indeksist ja sellega ümberkäivast päringuhaldurist, toimetajate poolt loodud kataloogi puhul õigupoolest ainult toimetajate vilumusest ja korrektsusest.

Kõigepealt on päringule loodetud tulemuse saamine seoses loodud indeksi suurusega, kuid sugugi mitte ainult. Nimelt pole suurest indeksist kasu, kui otsides Internetist infot pirnisortide kohta serveeritakse meile hoopis valgusteid tootvate ja turustavate firmade kodulehekülgi. Tuleb kas täpsustada päringut või loota, et päringusüsteem suudaks pärija soovist paremini aru saada. Sellist ülesannet täidab nt mõnda mootorisse kaasatud päringute arhiiv, kust iga uue päringu puhul vaadatakse, kas sarnaseid päringuid on juba tehtud ja kui on, siis teavitatakse otsijat vastavatest valdkonnaga seotud märksõnadest ning kataloogi rubriikidest. Loomulikult registreeritakse seal ka vastne päring, et aidata edasisi päringuid paremini sooritada. Selline süsteem aitab palju kaasa sagedaste päringute puhul, kuid on kasutu ja peaaegu eksitav eksootilisemate soovide puhul.

Teiseks on kasulik juba mainitud viidetest lähtuv kaart, mis laseb määrata Interneti sõlmpunkte — need on autoriteetsed viitajad või sisuka teabega lehed. See kindlustab, et pärides mootorilt lambipirnide järele, ei kuvata sobivate lehekülgete kirjeid mitte suvaliselt ega ka märksõna esinemise rohkuse järgi (mis on kergelt saboteeritav ja laialdaselt kasutatav), vaid autoriteetsuse järgi. Seetõttu saavad esmalt ära märgitud pirnide prestiižsemad ja tähtsamad tootjad
ning novaatorlikud ja kõmulised üksused valgustitehnoloogias, mitte ebatähtsad kohalikud edasimüüjad ega ka see artikkel, kus sõna "pirn" tegelikult päris mitmel korral esineb.

Loomulikult rakendatakse päringutele ka elementaarset õigekirjakontrolli. Mõnikord eemaldatakse sõnadelt mitmuse lõppe ja muid eksitavaid ning päringu tulemuslikkust kahandavaid elemente. Saadakse aru mõistetest ja osatakse vastata küsimustele.

## Laborist reaalsusse

Esimene üldine otsingumootor [Yahoo!](http://www.yahoo.com) sai tuntuks 1994. aastal, koosnedes inimeste loodud kataloogist ja märksõnaotsingust. Temaga on tihedalt
seotud ka praegune esirinnas olev mittetulundusühinguna Netscape'i korporatsioonile kuuluv kataloog [www.dmoz.org](http://www.dmoz.org) (_directory+mozilla_, muide, lipukirjaks on sel "_HUMANS do it better!_" — "INIMESED teevad paremini!"). See loodi 1998. aastal GNUHoo nime all alternatiivina Yahoo!-le, peatselt muutis aga nime Newhoo'ks. Kui Netscape Newhoo enda hõlma alla haaras, siis sai nimi jällegi muudetud — kes teab, mida Yahoo! oma rahadega oleks kohtus taotlema võinud hakata —
seekord ODP-ks (_Open Directory Project_) ja paralleelselt kannab ta tänapäeval ka juba mainitud nime "dmoz". ODP on märkimisväärne sellepärast, et ta on vabatahtlike
toimetajate koostatud kataloog ja ühtlasi suurim inimeste koostatud võrgukataloog üldse. Andmeid on seal rohkem kui kahe miljoni lehekülje kohta ja kataloogi koostasid enam kui 28 tuhat toimetajat. Ka on ta spetsialistide arvates kõige põhjalikum ja kvaliteetsemalt katalogiseeritud, kuigi õelaid pilke ei suuda täielikult peletada ka see projekt.

ODP vägevuse kinnituseks kasutab aga suur osa mainekaid otsingumootoreid ODP vabalt jagatavat kataloogi oma päringute toimetamiseks.

Automaatikal põhinevaist otsingumootoreist väärib äramärkimist [Google](http://www.google.com), mis kasutas esimesena reaalselt ära lehekülgedel leiduvate viidete voorusi saitide relevantsuse määramisel. Ka on Google'il suurim
arv lehekülgi indekseeritud — kokku üle miljardi (mis kaasab ka lihtsalt kaardistatud lehti, kus ämblik tegelikult käinud pole, kuid on viidatavat näinud; reaalselt indekseeritud lehti on praegu 600 tuhande ringis). Võrgus arvatakse olevat üle miljardi kodulehe. Seega on siis indekseeritud maksimaalselt 60%, kuid see on minu arvates väga optimistlik pakkumine.

## Soovitusi otsijale

* Esita päring võimalikult üksikasjalikult ning paljude asjakohaste märksõnadega.

* Loe otsingumootorite kasutusjuhendeid ja tee selgeks nende kõik erinevad võimalused, sest neid teades võib osa asju, mis muidu kadunuks jääks, lihtsalt kätte leida.

* Kui otsid mingil kitsamal populaarsel teemal, siis on võibolla olemas eraldi otsingumootor või kataloog selle teema kohta. Ülevaateid spetsiifiliste kataloogide ja otsingumootorite kohta leiab näiteks aadressidelt [www.invisibleweb.com](http://www.invisibleweb.com) või
[www.searchengineguide.com](http://www.searchengineguide.com).

Kataloogid on sirvitavad, ämblike koostatud indeksid aga reeglina mitte kuigi ladusalt. Kui otsida näiteks kõiki mingi ühe liigi esindajaid (näiteks mõne geograafilise punkti
teatud valdkonna firmasid), siis on kasulik võtta otsingumootorites paratamatult esineva desinformatsiooni vältimiseks hoopis lahti inimeste koostatud kataloog.

## Näide praktikast

Mina kasutan peamiselt Google'it ja Altavistat. Esimest hindan ma, sest ta on kiirete, lihtsate ning populaarsete otsingute puhul parim, teine lubab seevastu praktiseerida eriti rafineeritud otsimist — nimelt ei nõua see, et päringus esitatud märksõna oleks vastaval leheküljel kindlasti olemas. See kuvab lehed võimalikult suure hulga märksõnade esindatuse järjekorras ning lubab eristada ka märksõnu, mis peavad tingimata leheküljel esinema.

_Artikkel ilmus ajakirja Arvutimaailm [2000. aasta augusti/septembri numbris](https://www.am.ee/archive/200007)._
