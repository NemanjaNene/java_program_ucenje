// Lessons Data Structure
const lessonsData = [
    {
        id: 1,
        module: "Osnove JavaScript-a",
        title: "Šta je JavaScript?",
        duration: "10 min",
        content: `
            <div class="lesson-header">
                <h1>Šta je JavaScript?</h1>
                <p class="lesson-meta">Modul 1 - Osnove • 10 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Dobrodošli u svet JavaScript programiranja!</h2>
                <p>JavaScript je jedan od najpopularnijih programskih jezika na svetu. Svaki put kada vidite interaktivnu web stranicu - animacije, dinamički sadržaj, forme koje reaguju - verovatno je tu JavaScript.</p>

                <h3>Zašto učiti JavaScript?</h3>
                <ul>
                    <li><strong>Svuda prisutan:</strong> Radi u svim browserima bez instaliranja dodatnog softvera</li>
                    <li><strong>Versatilan:</strong> Možete praviti web sajtove, mobilne aplikacije, server aplikacije, igre, i još mnogo toga</li>
                    <li><strong>Početničko prijatan:</strong> Lako ga je početi učiti, ali dovoljno moćan za kompleksne projekte</li>
                    <li><strong>Velika zajednica:</strong> Milioni programera koriste JavaScript, što znači mnogo resursa za učenje</li>
                </ul>

                <h3>Kako JavaScript radi?</h3>
                <p>JavaScript je <strong>interpretirani jezik</strong> - to znači da se kod izvršava red po red, odozgo nadole. Browser čita vaš kod i izvršava ga direktno.</p>

                <div class="example-box">
                    <strong>📝 Primer:</strong>
                    <p>Zamislite da pišete recept. JavaScript je kao kuvar koji čita recept red po red i izvršava svaki korak redom.</p>
                </div>

                <h3>Gde se JavaScript koristi?</h3>
                <ul>
                    <li><strong>Front-end:</strong> Pravljenje interaktivnih korisničkih interfejsa (React, Vue, Angular)</li>
                    <li><strong>Back-end:</strong> Server aplikacije sa Node.js</li>
                    <li><strong>Mobile:</strong> Mobilne aplikacije sa React Native</li>
                    <li><strong>Desktop:</strong> Desktop aplikacije sa Electron</li>
                    <li><strong>IoT:</strong> Programiranje uređaja i senzora</li>
                </ul>

                <div class="tip-box">
                    <strong>💡 Savet:</strong>
                    <p>Ne mešajte JavaScript sa Java programskim jezikom - to su potpuno različiti jezici! JavaScript je dobio ime iz marketing razloga kada je Java bila popularna.</p>
                </div>

                <h3>Vaš prvi JavaScript kod</h3>
                <p>Hajde da napišemo tradicionalni "Hello World" program:</p>
                <pre><code>console.log("Hello World!");</code></pre>
                <p>Ova jedna linija koda ispisuje tekst "Hello World!" u konzolu browsera. <code>console.log()</code> je funkcija koja se koristi za ispis poruka - koristićete je mnogo za testiranje i debug.</p>

                <div class="warning-box">
                    <strong>⚠️ Napomena:</strong>
                    <p>JavaScript razlikuje velika i mala slova! <code>console.log()</code> nije isto što i <code>Console.Log()</code>. Ovo se zove "case sensitivity".</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Ispišite svoje ime",
                task: "Koristite console.log() da ispišete svoje ime.",
                hint: "Tekst (string) mora biti unutar navodnika: \"vaše ime\"",
                solution: 'console.log("Marko");'
            },
            {
                title: "Vežba 2: Ispišite više linija",
                task: "Napišite tri console.log() naredbe koje ispisuju: vaše ime, vaš grad, i vašu omiljenu hranu.",
                hint: "Možete pisati više console.log() naredbi jednu ispod druge. Svaka treba da završi sa ;",
                solution: 'console.log("Ana");\nconsole.log("Beograd");\nconsole.log("Pizza");'
            }
        ]
    },
    {
        id: 2,
        module: "Osnove JavaScript-a",
        title: "Promenljive (Variables)",
        duration: "15 min",
        content: `
            <div class="lesson-header">
                <h1>Promenljive (Variables)</h1>
                <p class="lesson-meta">Modul 1 - Osnove • 15 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su promenljive?</h2>
                <p>Promenljive su kao kutije u kojima čuvamo podatke. Možete u njih staviti brojeve, tekstove, i mnogo drugih stvari. Zatim možete koristiti te podatke kasnije u vašem programu.</p>

                <div class="example-box">
                    <strong>📝 Analogija:</strong>
                    <p>Zamislite promenljive kao etikete na kutijama. Svaka kutija ima ime (etiket) i unutra se nalazi neka vrednost.</p>
                </div>

                <h3>Kreiranje promenljivih</h3>
                <p>U JavaScript-u postoje tri načina da kreirate promenljive:</p>

                <h4>1. let - Za promenljive koje će se menjati</h4>
                <p><strong>Kada koristimo let?</strong> Kada znamo da će se vrednost promeniti tokom programa.</p>
                <pre><code>let ime = "Marko";
let godine = 25;
let grad = "Beograd";

console.log(godine); // 25

// Možemo promeniti vrednost kasnije
godine = 26;  // Sve OK! ✅
console.log(godine); // 26

// Primeri gde koristimo let:
let brojKorisnika = 0;
brojKorisnika = brojKorisnika + 1; // Povećavamo broj
console.log(brojKorisnika); // 1</code></pre>
                
                <div class="tip-box">
                    <strong>💡 Zašto se "let" zove "let"?</strong>
                    <p>Reč "let" na engleskom znači "dozvoliti" ili "neka". Kao da kažete: "Neka ime bude Marko". To je čitljiviji način da kažete da pravite promenljivu.</p>
                </div>

                <h4>2. const - Za konstante koje se NE menjaju</h4>
                <p><strong>Kada koristimo const?</strong> Kada vrednost treba da ostane ista tokom celog programa.</p>
                <pre><code>const PI = 3.14159;
const imeDrzave = "Srbija";
const maxKorisnika = 100;

console.log(PI); // 3.14159

// Ovo će izazvati grešku:
// PI = 3.14; // ❌ TypeError: Assignment to constant variable

// Primeri gde koristimo const:
const brojDanaUNedelji = 7;  // Ovo se nikad ne meni
const godinaRodjenja = 1995; // Ne menjamo godinu rođenja
console.log(brojDanaUNedelji); // 7</code></pre>
                
                <div class="warning-box">
                    <strong>⚠️ Važno pravilo:</strong>
                    <p>Kad god ne znate šta da koristite, počnite sa <code>const</code>. Ako kasnije vidite da vam treba da menjate vrednost, promenite u <code>let</code>. Ovo vas sprečava od slučajnih grešaka!</p>
                </div>

                <h4>3. var - Stari način (NE preporučuje se)</h4>
                <p><strong>Zašto ne koristimo var?</strong> var je stara sintaksa iz 1995. godine i ima komplikovanija pravila koja mogu izazvati greške.</p>
                <pre><code>var x = 10;
// var ima čudna pravila za "scope" (doseg)
// Moderni JavaScript koristi let i const umesto var

// ❌ NE koristite var u novom kodu
// ✅ Koristite let ili const</code></pre>
                
                <div class="example-box">
                    <strong>📝 Praktičan primer - Profil korisnika:</strong>
                    <pre><code>// Stvari koje se NE menjaju - const
const korisnickoIme = "nemanja123";
const datumRegistracije = "2024-01-15";

// Stvari koje MOGU da se menjaju - let
let brojPoena = 0;
let jePrijavljen = false;

console.log("Korisnik:", korisnickoIme);
console.log("Poeni:", brojPoena);

// Tokom programa menjamo stvari koje mogu da se menjaju
jePrijavljen = true;
brojPoena = brojPoena + 10;

console.log("Poeni nakon akcije:", brojPoena); // 10
console.log("Status:", jePrijavljen); // true</code></pre>
                </div>

                <div class="tip-box">
                    <strong>💡 Pravilo:</strong>
                    <p>Uvek koristite <code>const</code> osim ako znate da će se vrednost promeniti - tada koristite <code>let</code>. Izbegavajte <code>var</code>.</p>
                </div>

                <h3>Pravila za imenovanje promenljivih</h3>
                <ul>
                    <li>Mogu sadržati slova, brojeve, $ i _</li>
                    <li>Ne mogu počinjati brojem (❌ <code>1ime</code>)</li>
                    <li>Ne mogu biti rezervisane reči (<code>let</code>, <code>const</code>, <code>if</code>, itd.)</li>
                    <li>JavaScript razlikuje velika/mala slova: <code>ime</code> ≠ <code>Ime</code></li>
                </ul>

                <h3>Konvencije imenovanja (najbolje prakse)</h3>
                <pre><code>// camelCase - preporučeno za promenljive
let korisnickoIme = "marko123";
let brojPoruka = 5;

// UPPERCASE - za konstante
const MAX_VREDNOST = 100;
const API_URL = "https://api.example.com";

// Deskriptivna imena
let x = 25; // ❌ Šta je x?
let godineKorisnika = 25; // ✅ Jasno!</code></pre>

                <h3>Tipovi podataka u promenljivama</h3>
                
                <h4>String (Tekst)</h4>
                <pre><code>let poruka = "Zdravo!";
let ime = 'Ana';
let template = \`Pozdrav od \${ime}\`; // Template string</code></pre>

                <h4>Number (Broj)</h4>
                <pre><code>let godine = 25;
let cena = 99.99;
let temperatura = -5;</code></pre>

                <h4>Boolean (Tačno/Netačno)</h4>
                <pre><code>let jeAktivan = true;
let jePrijavljen = false;</code></pre>

                <h4>Undefined i Null</h4>
                <pre><code>let nesto; // undefined - nije dodeljena vrednost
let prazno = null; // null - eksplicitno prazno</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer:</strong>
                    <pre><code>// Informacije o korisniku
const korisnickoIme = "marko123";
let brojPoena = 0;
let jePremium = false;

console.log("Korisnik: " + korisnickoIme);
console.log("Poeni: " + brojPoena);

// Korisnik osvaja poene
brojPoena = brojPoena + 10;
console.log("Novi poeni: " + brojPoena);</code></pre>
                </div>

                <div class="warning-box">
                    <strong>⚠️ Česta greška:</strong>
                    <p>Pokušaj promene const promenljive:</p>
                    <pre><code>const x = 5;
x = 10; // ❌ TypeError: Assignment to constant variable</code></pre>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Kreirajte promenljive",
                task: "Kreirajte tri promenljive: ime (vaše ime), godine (vaš uzrast), i grad (gde živite). Ispišite ih pomoću console.log().",
                hint: "Koristite let ili const, pa console.log() za svaku promenljivu",
                solution: 'const ime = "Marko";\nconst godine = 25;\nconst grad = "Beograd";\n\nconsole.log(ime);\nconsole.log(godine);\nconsole.log(grad);'
            },
            {
                title: "Vežba 2: Promenite vrednost",
                task: "Kreirajte promenljivu 'brojac' sa vrednošću 0. Zatim je povećajte na 1, pa na 5. Ispišite vrednost nakon svake promene.",
                hint: "Koristite let jer će se vrednost menjati",
                solution: 'let brojac = 0;\nconsole.log(brojac);\n\nbrojac = 1;\nconsole.log(brojac);\n\nbrojac = 5;\nconsole.log(brojac);'
            }
        ]
    },
    {
        id: 3,
        module: "Osnove JavaScript-a",
        title: "Operatori",
        duration: "20 min",
        content: `
            <div class="lesson-header">
                <h1>Operatori u JavaScript-u</h1>
                <p class="lesson-meta">Modul 1 - Osnove • 20 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su operatori?</h2>
                <p>Operatori su simboli koji govore JavaScript-u da izvrši određene operacije nad podacima. Postoje različite vrste operatora za različite potrebe.</p>

                <h3>1. Aritmetički operatori</h3>
                <p>Koriste se za matematičke operacije:</p>
                <pre><code>let a = 10;
let b = 3;

console.log(a + b);  // 13 - Sabiranje
console.log(a - b);  // 7  - Oduzimanje
console.log(a * b);  // 30 - Množenje
console.log(a / b);  // 3.333... - Deljenje
console.log(a % b);  // 1  - Ostatak (modulo)
console.log(a ** b); // 1000 - Stepen (10³)</code></pre>

                <div class="tip-box">
                    <strong>💡 Modulo operator (%):</strong>
                    <p>Vraća ostatak deljenja. Koristan za proveru parnih brojeva: ako je <code>broj % 2 === 0</code>, broj je paran!</p>
                </div>

                <h3>2. Operatori dodele</h3>
                <p>Koriste se za dodelu vrednosti promenljivama:</p>
                <pre><code>let x = 5;     // Osnovna dodela

x += 3;  // x = x + 3  (x je sada 8)
x -= 2;  // x = x - 2  (x je sada 6)
x *= 4;  // x = x * 4  (x je sada 24)
x /= 3;  // x = x / 3  (x je sada 8)
x %= 5;  // x = x % 5  (x je sada 3)</code></pre>

                <h3>3. Inkrement i Dekrement</h3>
                <p>Skraćeni način za povećanje/smanjenje za 1:</p>
                <pre><code>let brojac = 0;

brojac++;  // brojac = brojac + 1  (sada 1)
brojac++;  // brojac = brojac + 1  (sada 2)
brojac--;  // brojac = brojac - 1  (sada 1)

// Pre-inkrement vs Post-inkrement
let a = 5;
let b = ++a;  // a se prvo poveća, pa dodeli (a=6, b=6)

let c = 5;
let d = c++;  // c se prvo dodeli, pa poveća (c=6, d=5)</code></pre>

                <h3>4. Operatori poređenja</h3>
                <p>Porede dve vrednosti i vraćaju true ili false:</p>
                <pre><code>let x = 5;
let y = 10;
let z = "5";

console.log(x == z);   // true  - Jednako (konvertuje tipove)
console.log(x === z);  // false - Striktno jednako (NE konvertuje)
console.log(x != y);   // true  - Različito
console.log(x !== z);  // true  - Striktno različito
console.log(x < y);    // true  - Manje
console.log(x > y);    // false - Veće
console.log(x <= 5);   // true  - Manje ili jednako
console.log(y >= 10);  // true  - Veće ili jednako</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Vazno: == vs ===</strong>
                    <p>Uvek koristite <code>===</code> i <code>!==</code> (striktne operatore). Operator <code>==</code> može dati neočekivane rezultate:</p>
                    <pre><code>console.log(0 == false);    // true 😱
console.log("" == false);   // true 😱
console.log(0 === false);   // false ✅
console.log("" === false);  // false ✅</code></pre>
                </div>

                <h3>5. Logički operatori</h3>
                <p>Koriste se za kombinovanje uslova:</p>
                <pre><code>let godine = 25;
let imaDozvolu = true;

// && (AND) - oba uslova moraju biti true
console.log(godine >= 18 && imaDozvolu);  // true

// || (OR) - bar jedan uslov mora biti true
console.log(godine < 18 || imaDozvolu);   // true

// ! (NOT) - obrće boolean vrednost
console.log(!imaDozvolu);  // false</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer: Sistem dozvola</strong>
                    <pre><code>const godine = 20;
const imaVozacku = true;
const jePijanOsoba = false;

// Provera da li može da vozi
const mozeVoziti = godine >= 18 && 
                   imaVozacku && 
                   !jePijanOsoba;

console.log("Može voziti: " + mozeVoziti); // true</code></pre>
                </div>

                <h3>6. String operatori</h3>
                <p>Operator <code>+</code> spaja stringove (konkatenacija):</p>
                <pre><code>let ime = "Marko";
let prezime = "Marković";

let punoIme = ime + " " + prezime;
console.log(punoIme); // "Marko Marković"

// Template literals (bolji način)
let poruka = \`Zdravo, ja sam \${ime} \${prezime}!\`;
console.log(poruka); // "Zdravo, ja sam Marko Marković!"</code></pre>

                <h3>7. typeof operator</h3>
                <p>Pokazuje tip podatka:</p>
                <pre><code>console.log(typeof 42);           // "number"
console.log(typeof "zdravo");     // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (poznata greška)</code></pre>

                <h3>Prioritet operatora</h3>
                <p>Kao u matematici, operatori imaju prioritet:</p>
                <pre><code>let rezultat = 10 + 5 * 2;  // 20 (prvo *, pa +)
let rezultat2 = (10 + 5) * 2;  // 30 (zagrade menjaju prioritet)

// Prioritet (od viših ka nižim):
// 1. Zagrade ()
// 2. **, *, /, %
// 3. +, -
// 4. <, >, <=, >=
// 5. ==, ===, !=, !==
// 6. &&
// 7. ||</code></pre>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Kalkulator",
                task: "Kreirajte dve promenljive sa brojevima 15 i 4. Ispišite rezultate svih aritmetičkih operacija (+, -, *, /, %, **).",
                hint: "Koristite console.log() za svaku operaciju",
                solution: 'const a = 15;\nconst b = 4;\n\nconsole.log("Sabiranje: " + (a + b));\nconsole.log("Oduzimanje: " + (a - b));\nconsole.log("Množenje: " + (a * b));\nconsole.log("Deljenje: " + (a / b));\nconsole.log("Ostatak: " + (a % b));\nconsole.log("Stepen: " + (a ** b));'
            },
            {
                title: "Vežba 2: Provera uslova",
                task: "Kreirajte promenljive: uzrast = 22, imaKartu = true. Proverite da li osoba može ući u klub (18+ I mora imati kartu).",
                hint: "Koristite && operator i ispisujte rezultat",
                solution: 'const uzrast = 22;\nconst imaKartu = true;\n\nconst mozeUci = uzrast >= 18 && imaKartu;\nconsole.log("Može ući: " + mozeUci);'
            },
            {
                title: "Vežba 3: Template string",
                task: "Kreirajte promenljive za proizvod (ime, cena, količina) i napravite poruku koristeći template string.",
                hint: "Koristite backticks ` i ${promenljiva} sintaksu",
                solution: 'const proizvod = "Laptop";\nconst cena = 45000;\nconst kolicina = 2;\n\nconst poruka = `Proizvod: ${proizvod}, Cena: ${cena} RSD, Količina: ${kolicina}`;\nconsole.log(poruka);'
            }
        ]
    },
    {
        id: 4,
        module: "Kontrola toka",
        title: "If-Else uslovi",
        duration: "18 min",
        content: `
            <div class="lesson-header">
                <h1>If-Else Uslovi</h1>
                <p class="lesson-meta">Modul 2 - Kontrola toka • 18 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su uslovi?</h2>
                <p>Uslovi omogućavaju vašem programu da donosi odluke. Program može izvršiti različit kod zavisno od toga da li je neki uslov ispunjen ili ne.</p>

                <div class="example-box">
                    <strong>📝 Analogija:</strong>
                    <p>Kao kada odlučujete da li da ponesete kišobran: AKO pada kiša, ponesite kišobran, INAČE nemojte.</p>
                </div>

                <h3>Osnovni if statement</h3>
                <pre><code>let temperatura = 25;

if (temperatura > 30) {
    console.log("Veoma je toplo!");
}</code></pre>
                <p>Kod unutar vitičastih zagrada <code>{ }</code> se izvršava SAMO ako je uslov <code>true</code>.</p>

                <h3>If-Else statement</h3>
                <pre><code>let godine = 20;

if (godine >= 18) {
    console.log("Punoletan si!");
} else {
    console.log("Nisi punoletan!");
}</code></pre>
                <p>Ako je uslov <code>true</code>, izvršava se prvi blok. Ako je <code>false</code>, izvršava se <code>else</code> blok.</p>

                <h3>If-Else If-Else (višestruki uslovi)</h3>
                <pre><code>let ocena = 85;

if (ocena >= 90) {
    console.log("Odličan (5)");
} else if (ocena >= 75) {
    console.log("Vrlo dobar (4)");
} else if (ocena >= 60) {
    console.log("Dobar (3)");
} else if (ocena >= 50) {
    console.log("Dovoljan (2)");
} else {
    console.log("Nedovoljan (1)");
}</code></pre>
                <p>JavaScript proverava uslove redom, odozgo nadole. Prvi uslov koji je <code>true</code> se izvršava, ostali se preskaču.</p>

                <div class="tip-box">
                    <strong>💡 Savet:</strong>
                    <p>Redosled uslova je važan! Uvek stavljajte specifičnije uslove pre opštijih.</p>
                </div>

                <h3>Ugnežđeni if statements</h3>
                <pre><code>let jePrijavljen = true;
let jePremium = true;

if (jePrijavljen) {
    console.log("Dobrodošli nazad!");
    
    if (jePremium) {
        console.log("Premium korisnik - pristup svim funkcijama");
    } else {
        console.log("Besplatni korisnik - ograničen pristup");
    }
} else {
    console.log("Molimo vas da se prijavite");
}</code></pre>

                <h3>Logički operatori u uslovima</h3>
                <pre><code>let korisnickoIme = "marko";
let lozinka = "12345";

// && operator - oba uslova moraju biti true
if (korisnickoIme === "marko" && lozinka === "12345") {
    console.log("Uspešna prijava!");
} else {
    console.log("Pogrešni podaci!");
}

// || operator - bar jedan uslov mora biti true
let uloga = "admin";
if (uloga === "admin" || uloga === "moderator") {
    console.log("Imate pristup admin panelu");
}

// ! operator - negacija
let jeBlokiran = false;
if (!jeBlokiran) {
    console.log("Možete pristupiti");
}</code></pre>

                <h3>Skraćeni if (Ternary operator)</h3>
                <p>Za jednostavne uslove, možete koristiti skraćenu sintaksu:</p>
                <pre><code>let godine = 20;

// Klasičan način
let status;
if (godine >= 18) {
    status = "punoletan";
} else {
    status = "maloletan";
}

// Ternary operator (isti rezultat, kraći kod)
let status2 = godine >= 18 ? "punoletan" : "maloletan";

// Sintaksa: uslov ? ako_true : ako_false</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer: Sistem popusta</strong>
                    <pre><code>const cena = 5000;
const jeStudent = true;
const jeVIP = false;

let popust = 0;
let konacnaCena;

if (jeVIP) {
    popust = 20; // 20% popust za VIP
    console.log("VIP popust: 20%");
} else if (jeStudent) {
    popust = 10; // 10% popust za studente
    console.log("Studentski popust: 10%");
} else {
    console.log("Nema popusta");
}

konacnaCena = cena - (cena * popust / 100);
console.log(\`Originalna cena: \${cena} RSD\`);
console.log(\`Konačna cena: \${konacnaCena} RSD\`);</code></pre>
                </div>

                <h3>Truthy i Falsy vrednosti</h3>
                <p>U JavaScript-u, neke vrednosti se tretiraju kao <code>false</code> u uslovima:</p>
                <pre><code>// Falsy vrednosti:
if (false) { }      // false
if (0) { }          // 0
if ("") { }         // prazan string
if (null) { }       // null
if (undefined) { } // undefined
if (NaN) { }        // Not a Number

// Sve ostalo je truthy:
if (true) { }       // ✅
if (1) { }          // ✅
if ("tekst") { }    // ✅
if ([]) { }         // ✅ čak i prazan niz!
if ({}) { }         // ✅ čak i prazan objekat!</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Česta greška:</strong>
                    <p>Dodela umesto poređenja u uslovu:</p>
                    <pre><code>let x = 5;
if (x = 10) {  // ❌ Dodela! Uvek true
    console.log("Izvršiće se");
}

if (x === 10) {  // ✅ Poređenje
    console.log("Ovo je ispravno");
}</code></pre>
                </div>

                <h3>Best practices</h3>
                <ul>
                    <li>Uvek koristite vitičaste zagrade <code>{ }</code>, čak i za jednu liniju</li>
                    <li>Koristite <code>===</code> umesto <code>==</code></li>
                    <li>Držite uslove jednostavnim i čitljivim</li>
                    <li>Ako imate više od 3-4 <code>else if</code>, razmislite o <code>switch</code> statement-u</li>
                    <li>Prvo proveravajte "abnormalne" slučajeve, pa normalne</li>
                </ul>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Provera uzrasta",
                task: "Napišite program koji proverava uzrast osobe i ispisuje poruku: ako je mlađa od 13 -> 'Dete', 13-19 -> 'Tinejdžer', 20-64 -> 'Odrasla osoba', 65+ -> 'Senior'",
                hint: "Koristite if-else if-else strukturu",
                solution: 'const uzrast = 25;\n\nif (uzrast < 13) {\n    console.log("Dete");\n} else if (uzrast <= 19) {\n    console.log("Tinejdžer");\n} else if (uzrast <= 64) {\n    console.log("Odrasla osoba");\n} else {\n    console.log("Senior");\n}'
            },
            {
                title: "Vežba 2: Sistem prijave",
                task: "Napravite jednostavan sistem prijave. Proverite da li je korisničko ime 'admin' I lozinka '123456'. Ispišite odgovarajuću poruku.",
                hint: "Koristite && operator za proveru oba uslova",
                solution: 'const username = "admin";\nconst password = "123456";\n\nif (username === "admin" && password === "123456") {\n    console.log("Uspešna prijava! Dobrodošli admin.");\n} else {\n    console.log("Pogrešno korisničko ime ili lozinka!");\n}'
            },
            {
                title: "Vežba 3: Ocena ispita",
                task: "Kreirajte program koji na osnovu broja poena (0-100) određuje ocenu. Takođe proverite da li su poeni validni (između 0 i 100).",
                hint: "Prvo proverite validnost poena, pa određujte ocenu",
                solution: 'const poeni = 78;\n\nif (poeni < 0 || poeni > 100) {\n    console.log("Nevažeći broj poena!");\n} else if (poeni >= 90) {\n    console.log("Ocena: 5 (Odličan)");\n} else if (poeni >= 75) {\n    console.log("Ocena: 4 (Vrlo dobar)");\n} else if (poeni >= 60) {\n    console.log("Ocena: 3 (Dobar)");\n} else if (poeni >= 50) {\n    console.log("Ocena: 2 (Dovoljan)");\n} else {\n    console.log("Ocena: 1 (Nedovoljan)");\n}'
            }
        ]
    },
    {
        id: 5,
        module: "Kontrola toka",
        title: "Petlje (Loops)",
        duration: "25 min",
        content: `
            <div class="lesson-header">
                <h1>Petlje (Loops)</h1>
                <p class="lesson-meta">Modul 2 - Kontrola toka • 25 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su petlje?</h2>
                <p>Petlje omogućavaju da izvršite isti kod više puta. Umesto da pišete isti kod 100 puta, petlja to uradi za vas!</p>

                <div class="example-box">
                    <strong>📝 Analogija:</strong>
                    <p>Kao kada trčite krugove oko stadiona - ponavljate istu rutu određeni broj puta ili dok ne ispunite neki uslov.</p>
                </div>

                <h3>1. For petlja</h3>
                <p>Najpopularnija petlja, koristi se kada znate koliko puta treba da se izvršava:</p>
                <pre><code>// Sintaksa: for (početak; uslov; korak)
for (let i = 0; i < 5; i++) {
    console.log("Broj: " + i);
}
// Ispisuje: 0, 1, 2, 3, 4</code></pre>

                <p><strong>Kako radi:</strong></p>
                <ul>
                    <li><code>let i = 0</code> - Početna vrednost (izvršava se samo jednom)</li>
                    <li><code>i < 5</code> - Uslov (proverava se pre svake iteracije)</li>
                    <li><code>i++</code> - Korak (izvršava se nakon svake iteracije)</li>
                </ul>

                <div class="tip-box">
                    <strong>💡 Zašto i?</strong>
                    <p>Promenljiva <code>i</code> je konvencija (skraćeno od "index" ili "iterator"). Možete koristiti bilo koje ime, ali <code>i</code>, <code>j</code>, <code>k</code> su uobičajeni.</p>
                </div>

                <h4>Različite varijacije for petlje:</h4>
                <pre><code>// Brojanje unazad
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// Preskakanje brojeva (svaki drugi)
for (let i = 0; i <= 10; i += 2) {
    console.log(i); // 0, 2, 4, 6, 8, 10
}

// Iteracija kroz string
let ime = "Marko";
for (let i = 0; i < ime.length; i++) {
    console.log(ime[i]); // M, a, r, k, o
}</code></pre>

                <h3>2. While petlja</h3>
                <p>Izvršava se DOK je uslov tačan. Koristi se kada ne znate unapred koliko iteracija treba:</p>
                <pre><code>let brojac = 0;

while (brojac < 5) {
    console.log("Brojač: " + brojac);
    brojac++;
}
// Ispisuje: 0, 1, 2, 3, 4</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Opasnost: Beskonačna petlja!</strong>
                    <p>Ako zaboravite da promenite uslov, petlja će se izvršavati beskonačno:</p>
                    <pre><code>let i = 0;
while (i < 5) {
    console.log(i);
    // Zaboravili smo i++
    // ❌ BESKONAČNA PETLJA!
}</code></pre>
                </div>

                <h3>3. Do-While petlja</h3>
                <p>Slična <code>while</code> petlji, ali se izvršava BAR JEDNOM (proverava uslov na kraju):</p>
                <pre><code>let brojac = 0;

do {
    console.log("Brojač: " + brojac);
    brojac++;
} while (brojac < 5);

// Izvršava se bar jednom, čak i ako je uslov odmah false
let x = 10;
do {
    console.log("Ovo će se ispisati jednom");
} while (x < 5);</code></pre>

                <h3>Break i Continue</h3>
                <p>Kontrola toka unutar petlji:</p>

                <h4>break - Prekida petlju</h4>
                <pre><code>for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Petlja se prekida na i=5
    }
    console.log(i);
}
// Ispisuje: 0, 1, 2, 3, 4</code></pre>

                <h4>continue - Preskače trenutnu iteraciju</h4>
                <pre><code>for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Preskače parne brojeve
    }
    console.log(i);
}
// Ispisuje: 1, 3, 5, 7, 9</code></pre>

                <h3>Ugnežđene petlje</h3>
                <p>Petlja unutar petlje:</p>
                <pre><code>// Tabla množenja
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(\`\${i} x \${j} = \${i * j}\`);
    }
    console.log("---");
}

// Output:
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// ---
// 2 x 1 = 2
// 2 x 2 = 4
// ...</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer: Sumiranje brojeva</strong>
                    <pre><code>// Saberi sve brojeve od 1 do 100
let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i;
}

console.log("Suma brojeva 1-100 je: " + suma); // 5050</code></pre>
                </div>

                <div class="example-box">
                    <strong>📝 Praktičan primer: Pronalaženje broja</strong>
                    <pre><code>// Pronađi prvi broj deljiv sa 7 između 100 i 200
let pronadjen = false;

for (let i = 100; i <= 200; i++) {
    if (i % 7 === 0) {
        console.log("Prvi broj deljiv sa 7 je: " + i);
        pronadjen = true;
        break;
    }
}

if (!pronadjen) {
    console.log("Nije pronađen");
}</code></pre>
                </div>

                <h3>For...of petlja (moderna sintaksa)</h3>
                <p>Elegantna petlja za iteraciju kroz nizove:</p>
                <pre><code>let voce = ["jabuka", "banana", "narandža"];

for (let stavka of voce) {
    console.log(stavka);
}
// jabuka
// banana
// narandža

// Može i sa stringovima
for (let slovo of "JavaScript") {
    console.log(slovo);
}</code></pre>

                <h3>Kada koristiti koju petlju?</h3>
                <ul>
                    <li><strong>for:</strong> Kada znate broj iteracija</li>
                    <li><strong>while:</strong> Kada ne znate broj iteracija, uslov određuje kraj</li>
                    <li><strong>do-while:</strong> Kada treba bar jednom da se izvrši</li>
                    <li><strong>for...of:</strong> Za iteraciju kroz nizove/stringove (najčitljiviji)</li>
                </ul>

                <h3>Best practices</h3>
                <ul>
                    <li>Izbegavajte ugnežđene petlje sa više od 2-3 nivoa</li>
                    <li>Pazite na beskonačne petlje</li>
                    <li>Koristite deskriptivna imena promenljivih u kompleksnijim petljama</li>
                    <li>Preferirajte <code>for...of</code> za jednostavne iteracije kroz nizove</li>
                </ul>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Ispiši brojeve",
                task: "Napišite for petlju koja ispisuje sve brojeve od 1 do 20.",
                hint: "for (let i = 1; i <= 20; i++)",
                solution: 'for (let i = 1; i <= 20; i++) {\n    console.log(i);\n}'
            },
            {
                title: "Vežba 2: Suma parnih brojeva",
                task: "Napravite petlju koja sabira sve parne brojeve od 1 do 50 i ispisuje zbir.",
                hint: "Proverite da li je i % 2 === 0",
                solution: 'let suma = 0;\n\nfor (let i = 1; i <= 50; i++) {\n    if (i % 2 === 0) {\n        suma += i;\n    }\n}\n\nconsole.log("Suma parnih brojeva: " + suma);'
            },
            {
                title: "Vežba 3: FizzBuzz",
                task: "Klasična programerska vežba: Za brojeve od 1 do 30, ispišite 'Fizz' za brojeve deljive sa 3, 'Buzz' za brojeve deljive sa 5, 'FizzBuzz' za oba, inače ispišite broj.",
                hint: "Prvo proverite deljivost sa oba (15), pa sa 3, pa sa 5",
                solution: 'for (let i = 1; i <= 30; i++) {\n    if (i % 15 === 0) {\n        console.log("FizzBuzz");\n    } else if (i % 3 === 0) {\n        console.log("Fizz");\n    } else if (i % 5 === 0) {\n        console.log("Buzz");\n    } else {\n        console.log(i);\n    }\n}'
            }
        ]
    },
    {
        id: 6,
        module: "Funkcije",
        title: "Osnove funkcija",
        duration: "20 min",
        content: `
            <div class="lesson-header">
                <h1>Funkcije u JavaScript-u</h1>
                <p class="lesson-meta">Modul 3 - Funkcije • 20 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su funkcije?</h2>
                <p>Funkcije su blokovi koda koji izvršavaju određeni zadatak. Umesto da pišete isti kod više puta, napravite funkciju i pozovite je kada vam treba!</p>

                <div class="example-box">
                    <strong>📝 Analogija:</strong>
                    <p>Funkcija je kao recept. Jednom napišete recept (definišete funkciju), a onda ga možete koristiti koliko god puta želite (pozivati funkciju).</p>
                </div>

                <h3>Kreiranje funkcije</h3>
                <p>Postoje različiti načini da kreirate funkciju:</p>

                <h4>1. Function Declaration (Deklaracija)</h4>
                <pre><code>function pozdrav() {
    console.log("Zdravo!");
}

// Pozivanje funkcije
pozdrav(); // "Zdravo!"</code></pre>

                <h4>2. Function Expression (Izraz)</h4>
                <pre><code>const pozdrav = function() {
    console.log("Zdravo!");
};

pozdrav(); // "Zdravo!"</code></pre>

                <h4>3. Arrow Function (Moderna sintaksa)</h4>
                <pre><code>const pozdrav = () => {
    console.log("Zdravo!");
};

pozdrav(); // "Zdravo!"</code></pre>

                <h3>Parametri i Argumenti</h3>
                <p>Funkcije mogu primati podatke (parametre):</p>
                <pre><code>// Funkcija sa jednim parametrom
function pozdravi(ime) {
    console.log("Zdravo, " + ime + "!");
}

pozdravi("Marko");  // "Zdravo, Marko!"
pozdravi("Ana");    // "Zdravo, Ana!"

// Funkcija sa više parametara
function saberi(a, b) {
    console.log(a + b);
}

saberi(5, 3);  // 8
saberi(10, 20); // 30</code></pre>

                <div class="tip-box">
                    <strong>💡 Terminologija:</strong>
                    <p><strong>Parametri</strong> su imena u definiciji funkcije (<code>a, b</code>).<br>
                    <strong>Argumenti</strong> su stvarne vrednosti koje prosleđujete (<code>5, 3</code>).</p>
                </div>

                <h3>Return statement</h3>
                <p>Funkcije mogu vraćati vrednosti nazad:</p>
                <pre><code>function saberi(a, b) {
    return a + b;
}

let rezultat = saberi(5, 3);
console.log(rezultat); // 8

// Možete koristiti rezultat direktno
console.log(saberi(10, 20)); // 30

// Bez return, funkcija vraća undefined
function nistaNeVraca() {
    console.log("Nešto radim");
}

let x = nistaNeVraca();
console.log(x); // undefined</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Važno:</strong>
                    <p>Kod nakon <code>return</code> se NEĆE izvršiti:</p>
                    <pre><code>function test() {
    return 5;
    console.log("Ovo se neće izvršiti"); // ❌
}</code></pre>
                </div>

                <h3>Default parametri</h3>
                <p>Možete postaviti podrazumevane vrednosti za parametre:</p>
                <pre><code>function pozdravi(ime = "Gost") {
    console.log("Zdravo, " + ime + "!");
}

pozdravi("Marko");  // "Zdravo, Marko!"
pozdravi();         // "Zdravo, Gost!"

function pomnozi(a, b = 1) {
    return a * b;
}

console.log(pomnozi(5, 2)); // 10
console.log(pomnozi(5));    // 5 (koristi b=1)</code></pre>

                <h3>Arrow funkcije (detaljnije)</h3>
                <p>Moderne, skraćene funkcije:</p>
                <pre><code>// Puna sintaksa
const saberi = (a, b) => {
    return a + b;
};

// Skraćeno - bez return (implicitni return)
const saberi2 = (a, b) => a + b;

// Jedan parametar - ne trebaju zagrade
const kvadrat = x => x * x;

// Bez parametara - prazne zagrade
const pozdrav = () => console.log("Zdravo!");

console.log(saberi2(5, 3)); // 8
console.log(kvadrat(4));    // 16</code></pre>

                <h3>Scope (Doseg promenljivih)</h3>
                <p>Promenljive imaju određen doseg gde su dostupne:</p>
                <pre><code>// Globalni scope
let globalnaPromenljiva = "Dostupna svuda";

function mojaFunkcija() {
    // Lokalni scope
    let lokalnaPromenljiva = "Dostupna samo u funkciji";
    
    console.log(globalnaPromenljiva); // ✅ Može pristupiti
    console.log(lokalnaPromenljiva);  // ✅ Može pristupiti
}

mojaFunkcija();
console.log(globalnaPromenljiva);  // ✅ Može pristupiti
console.log(lokalnaPromenljiva);   // ❌ Greška! Nije definisana</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer: Kalkulator</strong>
                    <pre><code>function saberi(a, b) {
    return a + b;
}

function oduzmi(a, b) {
    return a - b;
}

function pomnozi(a, b) {
    return a * b;
}

function podeli(a, b) {
    if (b === 0) {
        return "Greška: Deljenje sa nulom!";
    }
    return a / b;
}

// Korišćenje
console.log("10 + 5 =", saberi(10, 5));
console.log("10 - 5 =", oduzmi(10, 5));
console.log("10 * 5 =", pomnozi(10, 5));
console.log("10 / 5 =", podeli(10, 5));
console.log("10 / 0 =", podeli(10, 0));</code></pre>
                </div>

                <div class="example-box">
                    <strong>📝 Praktičan primer: Provera godina</strong>
                    <pre><code>function jePunoletan(godine) {
    if (godine >= 18) {
        return true;
    } else {
        return false;
    }
}

// Ili kraće:
const jePunoletan2 = godine => godine >= 18;

// Korišćenje
if (jePunoletan(20)) {
    console.log("Možete glasati");
} else {
    console.log("Ne možete glasati");
}</code></pre>
                </div>

                <h3>Callback funkcije</h3>
                <p>Funkcije mogu biti argumenti drugih funkcija:</p>
                <pre><code>function izvrsi(funkcija) {
    funkcija();
}

function pozdravi() {
    console.log("Zdravo!");
}

izvrsi(pozdravi); // Prosleđujemo funkciju kao argument

// Sa arrow funkcijom
izvrsi(() => {
    console.log("Ovo je callback!");
});</code></pre>

                <h3>Best practices</h3>
                <ul>
                    <li>Dajte funkcijama opisna imena koja objašnjavaju šta rade</li>
                    <li>Funkcije treba da rade jednu stvar dobro</li>
                    <li>Izbegavajte funkcije sa više od 3-4 parametra</li>
                    <li>Koristite arrow funkcije za kratke, jednostavne funkcije</li>
                    <li>Koristite function declaration za složenije funkcije</li>
                    <li>Uvek vraćajte istu vrstu podatka iz funkcije</li>
                </ul>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Jednostavna funkcija",
                task: "Napravite funkciju koja prima ime kao parametar i vraća poruku pozdrava (npr. 'Dobrodošao/la, [ime]!').",
                hint: "Koristite return da vratite string",
                solution: 'function pozdrav(ime) {\n    return "Dobrodošao/la, " + ime + "!";\n}\n\nconsole.log(pozdrav("Marko"));\nconsole.log(pozdrav("Ana"));'
            },
            {
                title: "Vežba 2: Maksimum",
                task: "Napravite funkciju koja prima dva broja i vraća veći od njih.",
                hint: "Koristite if-else ili ternary operator",
                solution: 'function max(a, b) {\n    if (a > b) {\n        return a;\n    } else {\n        return b;\n    }\n}\n\n// Ili kraće:\nconst max2 = (a, b) => a > b ? a : b;\n\nconsole.log(max(10, 5));  // 10\nconsole.log(max(3, 8));   // 8'
            },
            {
                title: "Vežba 3: Provera parnosti",
                task: "Napravite funkciju koja proverava da li je broj paran. Funkcija treba da vraća true ili false.",
                hint: "Koristite modulo operator (%)",
                solution: 'function jeParan(broj) {\n    return broj % 2 === 0;\n}\n\nconsole.log(jeParan(4));  // true\nconsole.log(jeParan(7));  // false\nconsole.log(jeParan(10)); // true'
            }
        ]
    }
];

