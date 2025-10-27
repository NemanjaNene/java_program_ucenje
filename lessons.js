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
    },
    {
        id: 7,
        module: "Rad sa Podacima",
        title: "Nizovi (Arrays)",
        duration: "25 min",
        content: `
            <div class="lesson-header">
                <h1>Nizovi (Arrays)</h1>
                <p class="lesson-meta">Modul 4 - Rad sa Podacima • 25 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su nizovi?</h2>
                <p>Nizovi (Arrays) su liste vrednosti. Umesto da pravite 10 promenljivih za 10 imena, napravite jedan niz koji drži svih 10 imena!</p>

                <div class="example-box">
                    <strong>📝 Analogija:</strong>
                    <p>Niz je kao korpa sa voćem. Umesto da držite svako voće u ruci, stavite ih sve u jednu korpu i možete ih koristiti jednu po jednu.</p>
                </div>

                <h3>Kreiranje nizova</h3>
                <pre><code>// Prazan niz
let lista = [];

// Niz sa vrednostima
let voce = ["jabuka", "banana", "narandža"];
let brojevi = [1, 2, 3, 4, 5];
let mesano = [1, "dva", true, null];  // Može različite tipove

console.log(voce);  // ["jabuka", "banana", "narandža"]</code></pre>

                <h3>Pristupanje elementima</h3>
                <p>Elementi u nizu se broje od 0 (nulti index)!</p>
                <pre><code>let voce = ["jabuka", "banana", "narandža"];

console.log(voce[0]);  // "jabuka" - prvi element
console.log(voce[1]);  // "banana" - drugi element
console.log(voce[2]);  // "narandža" - treći element

// Poslednji element
console.log(voce[voce.length - 1]);  // "narandža"</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Važno!</strong>
                    <p>Nizovi počinju od 0! Prvi element je na poziciji 0, drugi na poziciji 1, itd.</p>
                </div>

                <h3>Dužina niza</h3>
                <pre><code>let voce = ["jabuka", "banana", "narandža"];

console.log(voce.length);  // 3 - broj elemenata

// Promena elementa
voce[1] = "šljiva";
console.log(voce);  // ["jabuka", "šljiva", "narandža"]</code></pre>

                <h3>Dodavanje elemenata</h3>
                <pre><code>let voce = ["jabuka", "banana"];

// push() - dodaje na kraj
voce.push("narandža");
console.log(voce);  // ["jabuka", "banana", "narandža"]

// unshift() - dodaje na početak
voce.unshift("šljiva");
console.log(voce);  // ["šljiva", "jabuka", "banana", "narandža"]</code></pre>

                <h3>Uklanjanje elemenata</h3>
                <pre><code>let voce = ["jabuka", "banana", "narandža"];

// pop() - uklanja sa kraja
let poslednje = voce.pop();
console.log(poslednje);  // "narandža"
console.log(voce);       // ["jabuka", "banana"]

// shift() - uklanja sa početka
let prvo = voce.shift();
console.log(prvo);   // "jabuka"
console.log(voce);   // ["banana"]</code></pre>

                <h3>Prolazak kroz niz</h3>
                <pre><code>let voce = ["jabuka", "banana", "narandža"];

// For petlja
for (let i = 0; i < voce.length; i++) {
    console.log(voce[i]);
}

// For...of petlja (lakši način)
for (let element of voce) {
    console.log(element);
}

// forEach metoda (modern način)
voce.forEach(function(element) {
    console.log(element);
});

// forEach sa arrow funkcijom
voce.forEach(element => console.log(element));</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Lista kupovine:</strong>
                    <pre><code>let listaKupovine = [];

// Dodavanje stavki
listaKupovine.push("mleko");
listaKupovine.push("hleb");
listaKupovine.push("jaja");

console.log("Lista kupovine:");
listaKupovine.forEach((stavka, index) => {
    console.log(\`\${index + 1}. \${stavka}\`);
});

// Output:
// Lista kupovine:
// 1. mleko
// 2. hleb
// 3. jaja</code></pre>
                </div>

                <h3>Korisne metode</h3>
                <pre><code>let brojevi = [1, 2, 3, 4, 5];

// includes() - provera da li element postoji
console.log(brojevi.includes(3));  // true
console.log(brojevi.includes(10)); // false

// indexOf() - pozicija elementa
console.log(brojevi.indexOf(3));   // 2
console.log(brojevi.indexOf(10));  // -1 (ne postoji)

// slice() - kopiraj deo niza
let deo = brojevi.slice(1, 4);
console.log(deo);  // [2, 3, 4]

// splice() - ukloni/dodaj elemente
brojevi.splice(2, 1);  // Ukloni 1 element od pozicije 2
console.log(brojevi);  // [1, 2, 4, 5]</code></pre>

                <h3>Spajanje nizova</h3>
                <pre><code>let nizA = [1, 2, 3];
let nizB = [4, 5, 6];

// concat() - spoji nizove
let spojeno = nizA.concat(nizB);
console.log(spojeno);  // [1, 2, 3, 4, 5, 6]

// Spread operator (...) - moderan način
let spojeno2 = [...nizA, ...nizB];
console.log(spojeno2);  // [1, 2, 3, 4, 5, 6]</code></pre>

                <div class="tip-box">
                    <strong>💡 Česta greška:</strong>
                    <p>Zaboravljanje da nizovi počinju od 0! Ako niz ima 5 elemenata, indeksi su 0, 1, 2, 3, 4 (ne 1, 2, 3, 4, 5)!</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Kreiranje niza",
                task: "Napravite niz sa 5 vašaih omiljenih filmova i ispišite ga.",
                hint: "Koristite [] zagrade i navedite filmove u navodnicima",
                solution: 'const filmovi = ["Inception", "Matrix", "Interstellar", "Avatar", "Gladiator"];\nconsole.log(filmovi);'
            },
            {
                title: "Vežba 2: Pristup elementima",
                task: "Iz niza [10, 20, 30, 40, 50] ispišite prvi i poslednji element.",
                hint: "Prvi je [0], poslednji je [niz.length - 1]",
                solution: 'const brojevi = [10, 20, 30, 40, 50];\nconsole.log(brojevi[0]);  // Prvi\nconsole.log(brojevi[brojevi.length - 1]);  // Poslednji'
            },
            {
                title: "Vežba 3: Dodavanje i uklanjanje",
                task: "Napravite prazan niz, dodajte 3 imena sa push(), pa uklonite prvo ime sa shift().",
                hint: "push() dodaje, shift() uklanja prvi element",
                solution: 'const imena = [];\nimena.push("Ana");\nimena.push("Marko");\nimena.push("Jovana");\nconsole.log(imena);\n\nimena.shift();\nconsole.log(imena);'
            }
        ]
    },
    {
        id: 8,
        module: "Rad sa Podacima",
        title: "Array Metode",
        duration: "30 min",
        content: `
            <div class="lesson-header">
                <h1>Napredne Array Metode</h1>
                <p class="lesson-meta">Modul 4 - Rad sa Podacima • 30 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Moćne Array metode</h2>
                <p>JavaScript ima neverovatne metode za rad sa nizovima koje vas čine mnogo produktivnijim!</p>

                <h3>1. map() - Transformacija svakog elementa</h3>
                <p><strong>Kada koristimo?</strong> Kada želimo da promenimo svaki element u nizu.</p>
                <pre><code>let brojevi = [1, 2, 3, 4, 5];

// Pomnožimo svaki broj sa 2
let duplirani = brojevi.map(broj => broj * 2);
console.log(duplirani);  // [2, 4, 6, 8, 10]

// Originalani niz ostaje isti
console.log(brojevi);    // [1, 2, 3, 4, 5]

// Sa imenima
let imena = ["ana", "marko", "jovana"];
let velikaSlova = imena.map(ime => ime.toUpperCase());
console.log(velikaSlova);  // ["ANA", "MARKO", "JOVANA"]</code></pre>

                <div class="tip-box">
                    <strong>💡 map() kreira NOVI niz!</strong>
                    <p>Originalni niz ostaje nepromenjen. map() vraća novi niz sa transformisanim vrednostima.</p>
                </div>

                <h3>2. filter() - Filtriranje elemenata</h3>
                <p><strong>Kada koristimo?</strong> Kada želimo samo elemente koji zadovoljavaju neki uslov.</p>
                <pre><code>let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Samo parni brojevi
let parni = brojevi.filter(broj => broj % 2 === 0);
console.log(parni);  // [2, 4, 6, 8, 10]

// Samo brojevi veći od 5
let veci = brojevi.filter(broj => broj > 5);
console.log(veci);  // [6, 7, 8, 9, 10]

// Sa objektima
let ljudi = [
    { ime: "Ana", godine: 25 },
    { ime: "Marko", godine: 17 },
    { ime: "Jovana", godine: 30 }
];

let punoletan = ljudi.filter(osoba => osoba.godine >= 18);
console.log(punoletan);
// [{ ime: "Ana", godine: 25 }, { ime: "Jovana", godine: 30 }]</code></pre>

                <h3>3. forEach() - Prolazak kroz svaki element</h3>
                <p><strong>Kada koristimo?</strong> Kada želimo nešto da uradimo sa svakim elementom.</p>
                <pre><code>let voce = ["jabuka", "banana", "narandža"];

// Ispiši svaki element
voce.forEach(element => {
    console.log(element);
});

// Sa indeksom
voce.forEach((element, index) => {
    console.log(\`\${index + 1}. \${element}\`);
});

// Output:
// 1. jabuka
// 2. banana
// 3. narandža</code></pre>

                <div class="warning-box">
                    <strong>⚠️ forEach() vs map():</strong>
                    <p><code>forEach()</code> - koristi se za akcije, ne vraća novi niz<br>
                    <code>map()</code> - koristi se za transformaciju, vraća novi niz</p>
                </div>

                <h3>4. find() - Pronađi prvi element</h3>
                <pre><code>let brojevi = [5, 12, 8, 130, 44];

// Pronađi prvi broj veći od 10
let rezultat = brojevi.find(broj => broj > 10);
console.log(rezultat);  // 12

let korisnici = [
    { id: 1, ime: "Ana" },
    { id: 2, ime: "Marko" },
    { id: 3, ime: "Jovana" }
];

// Pronađi korisnika sa id = 2
let korisnik = korisnici.find(k => k.id === 2);
console.log(korisnik);  // { id: 2, ime: "Marko" }</code></pre>

                <h3>5. reduce() - Sažmi niz u jednu vrednost</h3>
                <p><strong>Kada koristimo?</strong> Za sabiranje, računanje proseka, itd.</p>
                <pre><code>let brojevi = [1, 2, 3, 4, 5];

// Sabiranje svih brojeva
let suma = brojevi.reduce((ukupno, broj) => {
    return ukupno + broj;
}, 0);  // 0 je početna vrednost
console.log(suma);  // 15

// Kraće:
let suma2 = brojevi.reduce((ukupno, broj) => ukupno + broj, 0);

// Prosek
let prosek = brojevi.reduce((ukupno, broj) => ukupno + broj, 0) / brojevi.length;
console.log(prosek);  // 3</code></pre>

                <h3>6. some() i every()</h3>
                <pre><code>let brojevi = [1, 2, 3, 4, 5];

// some() - DA LI BAR JEDAN zadovoljava uslov?
let imaParnih = brojevi.some(broj => broj % 2 === 0);
console.log(imaParnih);  // true (ima 2 i 4)

// every() - DA LI SVI zadovoljavaju uslov?
let sviParni = brojevi.every(broj => broj % 2 === 0);
console.log(sviParni);  // false (nisu svi parni)</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Prodavnica:</strong>
                    <pre><code>let proizvodi = [
    { naziv: "Laptop", cena: 50000, naStanju: true },
    { naziv: "Miš", cena: 1500, naStanju: true },
    { naziv: "Tastatura", cena: 3000, naStanju: false },
    { naziv: "Monitor", cena: 20000, naStanju: true }
];

// 1. Proizvodi na stanju
let dostupni = proizvodi.filter(p => p.naStanju);
console.log("Na stanju:", dostupni.map(p => p.naziv));

// 2. Primeni popust od 10%
let saPopustom = proizvodi.map(p => ({
    ...p,
    cena: p.cena * 0.9
}));

// 3. Ukupna vrednost svih proizvoda
let ukupno = proizvodi.reduce((suma, p) => suma + p.cena, 0);
console.log("Ukupna vrednost:", ukupno);  // 74500

// 4. Proveri da li ima jeftinijih od 2000
let imaJeftinih = proizvodi.some(p => p.cena < 2000);
console.log("Ima jeftinijih:", imaJeftinih);  // true</code></pre>
                </div>

                <h3>Kombinovanje metoda (Chaining)</h3>
                <pre><code>let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Nađi parne brojeve, pomnožyi ih sa 2, i saberi
let rezultat = brojevi
    .filter(broj => broj % 2 === 0)  // [2, 4, 6, 8, 10]
    .map(broj => broj * 2)            // [4, 8, 12, 16, 20]
    .reduce((suma, broj) => suma + broj, 0);  // 60

console.log(rezultat);  // 60</code></pre>

                <div class="tip-box">
                    <strong>💡 Best Practice:</strong>
                    <p>Koristite ove metode umesto for petlji kad god možete - kod je čitljiviji i kraći!</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: map()",
                task: "Iz niza [1, 2, 3, 4, 5] napravite novi niz gde je svaki broj uvećan za 10.",
                hint: "Koristite map() i dodajte 10 svakom broju",
                solution: 'const brojevi = [1, 2, 3, 4, 5];\nconst rezultat = brojevi.map(broj => broj + 10);\nconsole.log(rezultat);'
            },
            {
                title: "Vežba 2: filter()",
                task: "Iz niza [10, 15, 20, 25, 30, 35, 40] filtrirajte samo brojeve veće od 25.",
                hint: "Koristite filter() i uslov broj > 25",
                solution: 'const brojevi = [10, 15, 20, 25, 30, 35, 40];\nconst veci = brojevi.filter(broj => broj > 25);\nconsole.log(veci);'
            },
            {
                title: "Vežba 3: reduce()",
                task: "Saberite sve brojeve u nizu [5, 10, 15, 20] koristeći reduce().",
                hint: "reduce((ukupno, broj) => ukupno + broj, 0)",
                solution: 'const brojevi = [5, 10, 15, 20];\nconst suma = brojevi.reduce((ukupno, broj) => ukupno + broj, 0);\nconsole.log(suma);'
            }
        ]
    },
    {
        id: 9,
        module: "Rad sa Podacima",
        title: "Objekti (Objects)",
        duration: "30 min",
        content: `
            <div class="lesson-header">
                <h1>Objekti (Objects)</h1>
                <p class="lesson-meta">Modul 4 - Rad sa Podacima • 30 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su objekti?</h2>
                <p>Objekti su kolekcije podataka i funkcionalnosti. Objekti grupišu povezane podatke zajedno. Dok nizovi drže listu vrednosti, objekti drže parove ključ-vrednost.</p>

                <div class="example-box">
                    <strong>📝 Analogija:</strong>
                    <p>Objekat je kao karton sa pacijentom u bolnici. Ima polja: ime, prezime, godine, krvna grupa - sve povezano sa jednom osobom.</p>
                </div>

                <h3>Kreiranje objekata</h3>
                <pre><code>// Prazan objekat
let osoba = {};

// Objekat sa svojstvima (properties)
let korisnik = {
    ime: "Marko",
    prezime: "Marković",
    godine: 25,
    grad: "Beograd",
    aktivan: true
};

console.log(korisnik);
// { ime: "Marko", prezime: "Marković", godine: 25, grad: "Beograd", aktivan: true }</code></pre>

                <h3>Pristupanje svojstvima</h3>
                <p>Dva načina da pristupite svojstvima objekta:</p>
                <pre><code>let korisnik = {
    ime: "Ana",
    godine: 30,
    email: "ana@example.com"
};

// 1. Dot notation (tačka notacija) - najčešće
console.log(korisnik.ime);      // "Ana"
console.log(korisnik.godine);   // 30

// 2. Bracket notation (uglaste zagrade)
console.log(korisnik["email"]); // "ana@example.com"

// Bracket notation koristimo kada:
let svojstvo = "ime";
console.log(korisnik[svojstvo]); // "Ana"</code></pre>

                <h3>Dodavanje i menjanje svojstava</h3>
                <pre><code>let korisnik = {
    ime: "Marko",
    godine: 25
};

// Dodavanje novog svojstva
korisnik.grad = "Niš";
korisnik["zanimanje"] = "Developer";

console.log(korisnik);
// { ime: "Marko", godine: 25, grad: "Niš", zanimanje: "Developer" }

// Menjanje postojećeg svojstva
korisnik.godine = 26;
console.log(korisnik.godine); // 26</code></pre>

                <h3>Brisanje svojstava</h3>
                <pre><code>let korisnik = {
    ime: "Ana",
    godine: 28,
    privremeno: true
};

// Brisanje svojstva
delete korisnik.privremeno;

console.log(korisnik);
// { ime: "Ana", godine: 28 }</code></pre>

                <h3>Metode u objektima</h3>
                <p>Objekti mogu imati funkcije kao svojstva - to zovemo <strong>metode</strong>:</p>
                <pre><code>let korisnik = {
    ime: "Marko",
    godine: 25,
    
    // Metoda
    pozdravi: function() {
        console.log("Zdravo, ja sam " + this.ime);
    },
    
    // Kraća sintaksa (ES6)
    predstaviSe() {
        console.log(\`Ja sam \${this.ime}, imam \${this.godine} godina.\`);
    }
};

korisnik.pozdravi();        // "Zdravo, ja sam Marko"
korisnik.predstaviSe();     // "Ja sam Marko, imam 25 godina."</code></pre>

                <div class="tip-box">
                    <strong>💡 this keyword:</strong>
                    <p><code>this</code> se odnosi na trenutni objekat. Kada kažemo <code>this.ime</code> unutar objekta, pristupamo <code>ime</code> svojstvu tog objekta.</p>
                </div>

                <h3>Prolazak kroz objekat</h3>
                <pre><code>let osoba = {
    ime: "Ana",
    godine: 30,
    grad: "Beograd"
};

// for...in petlja
for (let kljuc in osoba) {
    console.log(kljuc + ": " + osoba[kljuc]);
}
// Output:
// ime: Ana
// godine: 30
// grad: Beograd

// Object.keys() - niz svih ključeva
let kljucevi = Object.keys(osoba);
console.log(kljucevi); // ["ime", "godine", "grad"]

// Object.values() - niz svih vrednosti
let vrednosti = Object.values(osoba);
console.log(vrednosti); // ["Ana", 30, "Beograd"]

// Object.entries() - niz parova [ključ, vrednost]
let parovi = Object.entries(osoba);
console.log(parovi);
// [["ime", "Ana"], ["godine", 30], ["grad", "Beograd"]]</code></pre>

                <h3>Ugnežđeni objekti</h3>
                <pre><code>let korisnik = {
    ime: "Marko",
    godine: 25,
    adresa: {
        ulica: "Knez Mihailova 15",
        grad: "Beograd",
        postanskiBroj: 11000
    },
    hobi: ["programiranje", "fudbal", "gitara"]
};

// Pristupanje ugnežđenim podacima
console.log(korisnik.adresa.grad);        // "Beograd"
console.log(korisnik.hobi[0]);            // "programiranje"</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Proizvod:</strong>
                    <pre><code>let proizvod = {
    naziv: "Laptop",
    cena: 50000,
    naStanju: true,
    kategorija: "elektronika",
    specifikacije: {
        procesor: "Intel i5",
        ram: "16GB",
        disk: "512GB SSD"
    },
    
    prikaziInfo() {
        console.log(\`\${this.naziv} - \${this.cena} RSD\`);
    },
    
    primeniPopust(procenat) {
        this.cena = this.cena * (1 - procenat / 100);
        console.log(\`Nova cena: \${this.cena} RSD\`);
    }
};

proizvod.prikaziInfo();      // "Laptop - 50000 RSD"
proizvod.primeniPopust(10);  // "Nova cena: 45000 RSD"
console.log(proizvod.specifikacije.ram); // "16GB"</code></pre>
                </div>

                <h3>Kopiranje objekata</h3>
                <pre><code>let original = { ime: "Ana", godine: 25 };

// ❌ Ovo NE kopira - deli referencu!
let kopija1 = original;
kopija1.godine = 30;
console.log(original.godine); // 30 (promenilo se!)

// ✅ Pravo kopiranje - Object.assign()
let kopija2 = Object.assign({}, original);

// ✅ Spread operator (najlakše)
let kopija3 = { ...original };
kopija3.godine = 35;
console.log(original.godine); // 25 (originalni netaknut)</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Važno!</strong>
                    <p>Objekti se dodeljuju po referenci! Ako napravite <code>let b = a</code>, oba pokazuju na isti objekat. Koristite spread operator <code>{...objekat}</code> za kopiranje.</p>
                </div>

                <h3>Provera svojstava</h3>
                <pre><code>let korisnik = {
    ime: "Marko",
    godine: 25
};

// Provera da li svojstvo postoji
console.log("ime" in korisnik);     // true
console.log("email" in korisnik);   // false

// hasOwnProperty metoda
console.log(korisnik.hasOwnProperty("ime"));  // true</code></pre>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Kreiranje objekta",
                task: "Napravite objekat 'auto' sa svojstvima: marka, model, godina, boja. Ispišite marku i godinu.",
                hint: "Koristite {} i ime: vrednost format",
                solution: 'const auto = {\n    marka: "Toyota",\n    model: "Corolla",\n    godina: 2020,\n    boja: "crna"\n};\n\nconsole.log(auto.marka);\nconsole.log(auto.godina);'
            },
            {
                title: "Vežba 2: Metode",
                task: "Napravite objekat 'kalkulator' sa metodama saberi(a, b) i pomnozi(a, b). Testirajte ih.",
                hint: "Metode su funkcije unutar objekta",
                solution: 'const kalkulator = {\n    saberi(a, b) {\n        return a + b;\n    },\n    pomnozi(a, b) {\n        return a * b;\n    }\n};\n\nconsole.log(kalkulator.saberi(5, 3));\nconsole.log(kalkulator.pomnozi(4, 7));'
            },
            {
                title: "Vežba 3: Prolazak kroz objekat",
                task: "Napravite objekat sa 3-4 svojstva, pa ispišite sve ključeve i vrednosti koristeći for...in petlju.",
                hint: "for (let key in objekat)",
                solution: 'const osoba = {\n    ime: "Ana",\n    godine: 28,\n    grad: "Novi Sad"\n};\n\nfor (let kljuc in osoba) {\n    console.log(kljuc + ": " + osoba[kljuc]);\n}'
            }
        ]
    },
    {
        id: 10,
        module: "Rad sa Tekstom",
        title: "String Metode",
        duration: "25 min",
        content: `
            <div class="lesson-header">
                <h1>String Metode</h1>
                <p class="lesson-meta">Modul 5 - Rad sa Tekstom • 25 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Rad sa tekstom u JavaScript-u</h2>
                <p>String-ovi (tekstovi) imaju mnoštvo korisnih metoda koje olakšavaju rad sa tekstom.</p>

                <h3>Dužina string-a</h3>
                <pre><code>let tekst = "Zdravo Svete";
console.log(tekst.length);  // 12 (broj karaktera)

let prazan = "";
console.log(prazan.length); // 0</code></pre>

                <h3>Pristupanje karakterima</h3>
                <pre><code>let tekst = "JavaScript";

// Pristup kao nizu
console.log(tekst[0]);      // "J"
console.log(tekst[4]);      // "S"

// charAt() metoda
console.log(tekst.charAt(0));   // "J"
console.log(tekst.charAt(9));   // "t"

// Poslednji karakter
console.log(tekst[tekst.length - 1]);  // "t"</code></pre>

                <h3>Velika i mala slova</h3>
                <pre><code>let tekst = "JavaScript je Odličan";

// Pretvori u velika slova
console.log(tekst.toUpperCase());  // "JAVASCRIPT JE ODLIČAN"

// Pretvori u mala slova
console.log(tekst.toLowerCase());  // "javascript je odličan"

// Originalni tekst ostaje nepromenjen
console.log(tekst);  // "JavaScript je Odličan"</code></pre>

                <div class="tip-box">
                    <strong>💡 String metode NE menjaju originalni string!</strong>
                    <p>String-ovi su immutable (nepromenjivi). Metode vraćaju NOVI string.</p>
                </div>

                <h3>Traženje u tekstu</h3>
                <pre><code>let tekst = "JavaScript je odličan jezik";

// indexOf() - pozicija prve pojave
console.log(tekst.indexOf("je"));        // 11
console.log(tekst.indexOf("odličan"));   // 14
console.log(tekst.indexOf("Python"));    // -1 (ne postoji)

// lastIndexOf() - pozicija poslednje pojave
console.log(tekst.lastIndexOf("a"));     // 22

// includes() - da li sadrži (vraća true/false)
console.log(tekst.includes("JavaScript")); // true
console.log(tekst.includes("python"));     // false

// startsWith() i endsWith()
console.log(tekst.startsWith("Java"));  // true
console.log(tekst.endsWith("jezik"));   // true</code></pre>

                <h3>Isecanje string-a</h3>
                <pre><code>let tekst = "JavaScript";

// slice(start, end) - kopira deo
console.log(tekst.slice(0, 4));   // "Java"
console.log(tekst.slice(4));      // "Script"
console.log(tekst.slice(-6));     // "Script" (od kraja)

// substring(start, end) - slično kao slice
console.log(tekst.substring(0, 4)); // "Java"

// substr(start, length) - ZASTARELO, koristite slice
console.log(tekst.substr(4, 6));    // "Script"</code></pre>

                <h3>Zamena teksta</h3>
                <pre><code>let tekst = "Volim JavaScript. JavaScript je super!";

// replace() - zameni PRVU pojavu
let novo = tekst.replace("JavaScript", "Python");
console.log(novo);  // "Volim Python. JavaScript je super!"

// replaceAll() - zameni SVE pojave
let novo2 = tekst.replaceAll("JavaScript", "Python");
console.log(novo2); // "Volim Python. Python je super!"

// Case-insensitive zamena (regex)
let tekst2 = "Hello HELLO hello";
let zamenjeno = tekst2.replaceAll(/hello/gi, "Hi");
console.log(zamenjeno); // "Hi Hi Hi"</code></pre>

                <h3>Uklanjanje razmaka</h3>
                <pre><code>let tekst = "   Zdravo Svete   ";

// trim() - ukloni sa oba kraja
console.log(tekst.trim());        // "Zdravo Svete"

// trimStart() - ukloni sa početka
console.log(tekst.trimStart());   // "Zdravo Svete   "

// trimEnd() - ukloni sa kraja
console.log(tekst.trimEnd());     // "   Zdravo Svete"</code></pre>

                <h3>Deljenje string-a</h3>
                <pre><code>let tekst = "jabuka,banana,narandža,kruška";

// split() - podeli u niz
let voce = tekst.split(",");
console.log(voce);  // ["jabuka", "banana", "narandža", "kruška"]

// Podela na karaktere
let rec = "Hello";
let slova = rec.split("");
console.log(slova);  // ["H", "e", "l", "l", "o"]

// Podela na reči
let recenica = "Učim JavaScript svaki dan";
let reci = recenica.split(" ");
console.log(reci);  // ["Učim", "JavaScript", "svaki", "dan"]</code></pre>

                <h3>Spajanje string-ova</h3>
                <pre><code>let ime = "Marko";
let prezime = "Marković";

// concat() metoda
let punoIme = ime.concat(" ", prezime);
console.log(punoIme);  // "Marko Marković"

// + operator (lakše)
let punoIme2 = ime + " " + prezime;
console.log(punoIme2);  // "Marko Marković"

// Template literals (najbolje)
let punoIme3 = \`\${ime} \${prezime}\`;
console.log(punoIme3);  // "Marko Marković"</code></pre>

                <h3>Ponavljanje string-a</h3>
                <pre><code>let tekst = "Ha";

// repeat() - ponovi N puta
console.log(tekst.repeat(3));   // "HaHaHa"
console.log("=".repeat(20));    // "===================="</code></pre>

                <h3>Padding (dopunjavanje)</h3>
                <pre><code>let broj = "5";

// padStart() - dodaj na početak
console.log(broj.padStart(3, "0"));  // "005"

// padEnd() - dodaj na kraj
console.log(broj.padEnd(3, "0"));    // "500"

// Primer: formatiranje vremena
let sati = "9";
let minuti = "5";
let vreme = sati.padStart(2, "0") + ":" + minuti.padStart(2, "0");
console.log(vreme);  // "09:05"</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Validacija email-a:</strong>
                    <pre><code>function validirajEmail(email) {
    // Ukloni razmake
    email = email.trim();
    
    // Proveri da li sadrži @
    if (!email.includes("@")) {
        return "Email mora sadržati @";
    }
    
    // Proveri da li počinje sa slovom
    if (!email[0].match(/[a-zA-Z]/)) {
        return "Email mora početi sa slovom";
    }
    
    // Proveri da li se završava sa .com, .rs, .net
    let validniKrajevi = [".com", ".rs", ".net", ".org"];
    let validan = validniKrajevi.some(kraj => email.endsWith(kraj));
    
    if (!validan) {
        return "Email mora se završiti sa .com, .rs, .net ili .org";
    }
    
    return "Email je validan!";
}

console.log(validirajEmail("  marko@gmail.com  "));  // "Email je validan!"
console.log(validirajEmail("markogmail.com"));       // "Email mora sadržati @"
console.log(validirajEmail("marko@gmail.xyz"));      // "Email mora se završiti..."</code></pre>
                </div>

                <div class="example-box">
                    <strong>📝 Praktičan primer - URL slug:</strong>
                    <pre><code>function napraviSlug(naslov) {
    return naslov
        .toLowerCase()                    // mala slova
        .trim()                           // ukloni razmake
        .replace(/\s+/g, "-")             // razmake u crtice
        .replace(/[^\w\-]+/g, "")         // ukloni spec. karaktere
        .replace(/\-\-+/g, "-");          // duplirane crtice u jednu
}

console.log(napraviSlug("Učim JavaScript Programiranje!"));
// "ucim-javascript-programiranje"

console.log(napraviSlug("   Hello   World!!!   "));
// "hello-world"</code></pre>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Velika/mala slova",
                task: "Napravite funkciju koja prima ime i vraća ga sa prvim slovom velikim, ostala mala (npr. 'MARKO' -> 'Marko').",
                hint: "Koristite charAt(0).toUpperCase() i slice(1).toLowerCase()",
                solution: 'function formatirajIme(ime) {\n    return ime.charAt(0).toUpperCase() + ime.slice(1).toLowerCase();\n}\n\nconsole.log(formatirajIme("MARKO"));  // "Marko"\nconsole.log(formatirajIme("ana"));    // "Ana"'
            },
            {
                title: "Vežba 2: Provera",
                task: "Napravite funkciju koja proverava da li tekst sadrži reč 'JavaScript' (case-insensitive).",
                hint: "Koristite toLowerCase() i includes()",
                solution: 'function sadrziJavaScript(tekst) {\n    return tekst.toLowerCase().includes("javascript");\n}\n\nconsole.log(sadrziJavaScript("Volim JavaScript"));  // true\nconsole.log(sadrziJavaScript("Volim JAVASCRIPT"));  // true\nconsole.log(sadrziJavaScript("Volim Python"));      // false'
            },
            {
                title: "Vežba 3: Brojanje reči",
                task: "Napravite funkciju koja broji koliko reči ima u rečenici.",
                hint: "Koristite trim() i split(' '), pa length",
                solution: 'function brojReci(recenica) {\n    return recenica.trim().split(" ").length;\n}\n\nconsole.log(brojReci("Učim JavaScript svaki dan"));  // 4\nconsole.log(brojReci("Hello World"));                // 2'
            }
        ]
    },
    {
        id: 11,
        module: "Napredni Koncepti",
        title: "Switch Statement",
        duration: "15 min",
        content: `
            <div class="lesson-header">
                <h1>Switch Statement</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 15 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Switch - Izbor između više opcija</h2>
                <p>Switch statement je alternativa za višestruke if-else provere. Koristi se kada imate mnogo mogućih vrednosti.</p>

                <h3>Osnovna sintaksa</h3>
                <pre><code>let dan = 3;

switch (dan) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Četvrtak");
        break;
    case 5:
        console.log("Petak");
        break;
    case 6:
        console.log("Subota");
        break;
    case 7:
        console.log("Nedelja");
        break;
    default:
        console.log("Nevažeći dan");
}
// Output: "Sreda"</code></pre>

                <div class="warning-box">
                    <strong>⚠️ NE ZABORAVITE break!</strong>
                    <p>Bez <code>break</code>, izvršavanje nastavlja sa sledećim case-om (fall-through)!</p>
                </div>

                <h3>Grupisanje case-ova</h3>
                <pre><code>let dan = "subota";

switch (dan) {
    case "ponedeljak":
    case "utorak":
    case "sreda":
    case "četvrtak":
    case "petak":
        console.log("Radni dan");
        break;
    case "subota":
    case "nedelja":
        console.log("Vikend");
        break;
    default:
        console.log("Nevažeći dan");
}
// Output: "Vikend"</code></pre>

                <h3>Switch vs If-Else</h3>
                <pre><code>// Sa if-else (manje čitljivo)
let ocena = "B";
if (ocena === "A") {
    console.log("Odličan");
} else if (ocena === "B") {
    console.log("Vrlo dobar");
} else if (ocena === "C") {
    console.log("Dobar");
} else if (ocena === "D") {
    console.log("Dovoljan");
} else {
    console.log("Nedovoljan");
}

// Sa switch (čitljivije)
switch (ocena) {
    case "A":
        console.log("Odličan");
        break;
    case "B":
        console.log("Vrlo dobar");
        break;
    case "C":
        console.log("Dobar");
        break;
    case "D":
        console.log("Dovoljan");
        break;
    default:
        console.log("Nedovoljan");
}</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Kalkulator:</strong>
                    <pre><code>function kalkulator(a, b, operacija) {
    let rezultat;
    
    switch (operacija) {
        case "+":
            rezultat = a + b;
            break;
        case "-":
            rezultat = a - b;
            break;
        case "*":
            rezultat = a * b;
            break;
        case "/":
            if (b === 0) {
                return "Greška: Deljenje sa nulom";
            }
            rezultat = a / b;
            break;
        default:
            return "Nepoznata operacija";
    }
    
    return rezultat;
}

console.log(kalkulator(10, 5, "+"));  // 15
console.log(kalkulator(10, 5, "*"));  // 50
console.log(kalkulator(10, 0, "/"));  // "Greška: Deljenje sa nulom"</code></pre>
                </div>

                <div class="tip-box">
                    <strong>💡 Kada koristiti switch?</strong>
                    <p>Koristite switch kada:<br>
                    - Imate 3+ vrednosti za proveru<br>
                    - Proveravate tačnu jednakost (===)<br>
                    - Vrednosti su jasne i konačne<br><br>
                    Koristite if-else kada:<br>
                    - Imate složene uslove (>, <, &&, ||)<br>
                    - Imate samo 1-2 provere</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Meseci",
                task: "Napravite switch koji prima broj meseca (1-12) i ispisuje naziv meseca.",
                hint: "case 1: console.log('Januar'); break;",
                solution: 'const mesec = 6;\n\nswitch (mesec) {\n    case 1: console.log("Januar"); break;\n    case 2: console.log("Februar"); break;\n    case 3: console.log("Mart"); break;\n    case 4: console.log("April"); break;\n    case 5: console.log("Maj"); break;\n    case 6: console.log("Jun"); break;\n    case 7: console.log("Jul"); break;\n    case 8: console.log("Avgust"); break;\n    case 9: console.log("Septembar"); break;\n    case 10: console.log("Oktobar"); break;\n    case 11: console.log("Novembar"); break;\n    case 12: console.log("Decembar"); break;\n    default: console.log("Nevažeći mesec");\n}'
            }
        ]
    },
    {
        id: 12,
        module: "Napredni Koncepti",
        title: "Math i Brojevi",
        duration: "20 min",
        content: `
            <div class="lesson-header">
                <h1>Math i Rad sa Brojevima</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 20 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Math objekat</h2>
                <p>JavaScript ima ugrađeni Math objekat sa korisnim matematičkim metodama i konstantama.</p>

                <h3>Math konstante</h3>
                <pre><code>console.log(Math.PI);     // 3.141592653589793
console.log(Math.E);      // 2.718281828459045</code></pre>

                <h3>Zaokruživanje brojeva</h3>
                <pre><code>let broj = 4.7;

console.log(Math.round(broj));   // 5 (najbliži)
console.log(Math.floor(broj));   // 4 (nadole)
console.log(Math.ceil(broj));    // 5 (nagore)
console.log(Math.trunc(broj));   // 4 (ukloni decimale)

// Sa negativnim brojevima
console.log(Math.floor(-4.7));   // -5
console.log(Math.ceil(-4.7));    // -4</code></pre>

                <h3>Min, Max, Abs</h3>
                <pre><code>// Minimum i maximum
console.log(Math.min(5, 10, 3, 8));   // 3
console.log(Math.max(5, 10, 3, 8));   // 10

// Apsolutna vrednost (bez znaka)
console.log(Math.abs(-10));  // 10
console.log(Math.abs(10));   // 10</code></pre>

                <h3>Stepen i koren</h3>
                <pre><code>// Stepen
console.log(Math.pow(2, 3));   // 8 (2³)
console.log(Math.pow(5, 2));   // 25 (5²)

// Kvadratni koren
console.log(Math.sqrt(16));    // 4
console.log(Math.sqrt(25));    // 5

// Kubni koren
console.log(Math.cbrt(27));    // 3</code></pre>

                <h3>Slučajni brojevi</h3>
                <pre><code>// Random broj između 0 i 1 (ne uključuje 1)
console.log(Math.random());  // npr. 0.6374523

// Random broj između 0 i 10
console.log(Math.random() * 10);

// Random CELI broj između 0 i 10
console.log(Math.floor(Math.random() * 11));  // 0-10

// Random broj između min i max
function randomBroj(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBroj(1, 100));  // npr. 47</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Bacanje kockice:</strong>
                    <pre><code>function bacajKockicu() {
    return Math.floor(Math.random() * 6) + 1;  // 1-6
}

console.log("Bacili ste: " + bacajKockicu());

// Bacanje dve kockice
function bacajDveKockice() {
    let kockica1 = bacajKockicu();
    let kockica2 = bacajKockicu();
    let zbir = kockica1 + kockica2;
    
    console.log(\`Kockice: \${kockica1} + \${kockica2} = \${zbir}\`);
    return zbir;
}

bacajDveKockice();</code></pre>
                </div>

                <h3>Konverzija u brojeve</h3>
                <pre><code>// parseInt - pretvori u ceo broj
console.log(parseInt("42"));       // 42
console.log(parseInt("42.5"));     // 42
console.log(parseInt("42px"));     // 42

// parseFloat - pretvori u decimalni
console.log(parseFloat("3.14"));   // 3.14
console.log(parseFloat("3.14abc")); // 3.14

// Number() - pretvori u broj
console.log(Number("42"));         // 42
console.log(Number("3.14"));       // 3.14
console.log(Number("abc"));        // NaN (Not a Number)

// Provera da li je broj
console.log(isNaN("abc"));         // true
console.log(isNaN(42));            // false
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(3.14)); // false</code></pre>

                <h3>Formatiranje brojeva</h3>
                <pre><code>let broj = 123.456789;

// toFixed - fiksiran broj decimala (vraća string)
console.log(broj.toFixed(2));     // "123.46"
console.log(broj.toFixed(0));     // "123"

// toPrecision - ukupan broj cifara
console.log(broj.toPrecision(5)); // "123.46"

// Formatiranje sa hiljadama
let veliki = 1234567;
console.log(veliki.toLocaleString()); // "1,234,567"</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Cena sa popustom:</strong>
                    <pre><code>function izracunajCenu(osnovna, popust) {
    let cena = osnovna * (1 - popust / 100);
    return Math.round(cena * 100) / 100;  // Zaokruži na 2 decimale
}

let osnovna = 1299.99;
let popust = 15;  // 15%

let novaCena = izracunajCenu(osnovna, popust);
console.log(\`Originalna cena: \${osnovna} RSD\`);
console.log(\`Popust: \${popust}%\`);
console.log(\`Nova cena: \${novaCena.toFixed(2)} RSD\`);</code></pre>
                </div>

                <div class="tip-box">
                    <strong>💡 Rad sa decimalama:</strong>
                    <p>JavaScript ima probleme sa preciznim decimalnim brojevima:<br>
                    <code>0.1 + 0.2 = 0.30000000000000004</code><br><br>
                    Rešenje: Zaokružite rezultate sa <code>toFixed()</code> ili množite/delite sa 100 za rad sa centi/parama.</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Random broj",
                task: "Napravite funkciju koja vraća slučajan broj između 50 i 100.",
                hint: "Math.floor(Math.random() * (max - min + 1)) + min",
                solution: 'function randomIzmedjuPedesetISto() {\n    return Math.floor(Math.random() * 51) + 50;\n}\n\nconsole.log(randomIzmedjuPedesetISto());'
            },
            {
                title: "Vežba 2: Zaokruživanje",
                task: "Broj 15.678 zaokružite na 2 decimale.",
                hint: "Koristite toFixed(2) ili Math.round() sa * 100 / 100",
                solution: 'const broj = 15.678;\nconsole.log(broj.toFixed(2));\n// ili\nconsole.log(Math.round(broj * 100) / 100);'
            }
        ]
    },
    {
        id: 13,
        module: "Napredni Koncepti",
        title: "Destrukturiranje",
        duration: "20 min",
        content: `
            <div class="lesson-header">
                <h1>Destrukturiranje (Destructuring)</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 20 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta je destrukturiranje?</h2>
                <p>Destrukturiranje je moderan način da izvučete vrednosti iz nizova ili objekata u odvojene promenljive. To čini kod čitljivijim i kraćim.</p>

                <h3>Destrukturiranje nizova</h3>
                <pre><code>// Stari način
let brojevi = [1, 2, 3];
let prvi = brojevi[0];
let drugi = brojevi[1];

// Novi način (destrukturiranje)
let [a, b, c] = [1, 2, 3];
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3

// Preskakanje elemenata
let [prvi, , treci] = [10, 20, 30];
console.log(prvi);   // 10
console.log(treci);  // 30

// Ostatak niza (rest operator)
let [glava, ...rep] = [1, 2, 3, 4, 5];
console.log(glava);  // 1
console.log(rep);    // [2, 3, 4, 5]</code></pre>

                <h3>Default vrednosti</h3>
                <pre><code>let [a = 5, b = 10] = [1];
console.log(a);  // 1 (ima vrednost)
console.log(b);  // 10 (default)</code></pre>

                <h3>Zamena promenljivih</h3>
                <pre><code>let a = 1;
let b = 2;

// Zamena bez treće promenljive!
[a, b] = [b, a];
console.log(a);  // 2
console.log(b);  // 1</code></pre>

                <h3>Destrukturiranje objekata</h3>
                <pre><code>// Stari način
let osoba = {
    ime: "Marko",
    godine: 25,
    grad: "Beograd"
};
let ime = osoba.ime;
let godine = osoba.godine;

// Novi način (destrukturiranje)
let { ime, godine, grad } = osoba;
console.log(ime);     // "Marko"
console.log(godine);  // 25
console.log(grad);    // "Beograd"

// Redosled nije bitan!
let { grad: city, ime: name } = osoba;
console.log(city);  // "Beograd"
console.log(name);  // "Marko"</code></pre>

                <h3>Novo ime promenljive</h3>
                <pre><code>let korisnik = {
    ime: "Ana",
    godine: 30
};

// Preimenovanje
let { ime: korisnickoIme, godine: uzrast } = korisnik;
console.log(korisnickoIme);  // "Ana"
console.log(uzrast);         // 30</code></pre>

                <h3>Default vrednosti u objektima</h3>
                <pre><code>let { ime, godine, grad = "Nepoznat" } = {
    ime: "Petar",
    godine: 28
};

console.log(ime);   // "Petar"
console.log(godine);// 28
console.log(grad);  // "Nepoznat" (default)</code></pre>

                <h3>Ugnežđeno destrukturiranje</h3>
                <pre><code>let korisnik = {
    ime: "Marko",
    adresa: {
        grad: "Beograd",
        ulica: "Knez Mihailova 15"
    }
};

// Izvuci ugnežđene vrednosti
let { adresa: { grad, ulica } } = korisnik;
console.log(grad);   // "Beograd"
console.log(ulica);  // "Knez Mihailova 15"</code></pre>

                <h3>Destrukturiranje u funkcijama</h3>
                <pre><code>// Parametri kao objekat
function prikaziKorisnika({ ime, godine, grad }) {
    console.log(\`\${ime}, \${godine} god, \${grad}\`);
}

prikaziKorisnika({
    ime: "Ana",
    godine: 28,
    grad: "Niš"
});
// Output: "Ana, 28 god, Niš"

// Return više vrednosti
function getKoordinate() {
    return [45.25, 19.84];
}

let [latitude, longitude] = getKoordinate();
console.log(latitude);   // 45.25
console.log(longitude);  // 19.84</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - API odgovor:</strong>
                    <pre><code>// Simulacija API odgovora
let apiOdgovor = {
    status: 200,
    data: {
        korisnik: {
            id: 1,
            ime: "Marko",
            email: "marko@example.com"
        },
        token: "abc123xyz"
    },
    timestamp: "2024-01-15"
};

// Izvuci samo potrebne podatke
let {
    status,
    data: {
        korisnik: { ime, email },
        token
    }
} = apiOdgovor;

console.log("Status:", status);  // 200
console.log("Ime:", ime);        // "Marko"
console.log("Email:", email);    // "marko@example.com"
console.log("Token:", token);    // "abc123xyz"</code></pre>
                </div>

                <div class="tip-box">
                    <strong>💡 Kada koristiti?</strong>
                    <p>Destrukturiranje je odlično za:<br>
                    - Izvlačenje vrednosti iz objekata/nizova<br>
                    - Parametre funkcija<br>
                    - API odgovore<br>
                    - React props (ako kasnije učite React)</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Niz",
                task: "Iz niza [100, 200, 300, 400] izvucite prve dve vrednosti u promenljive a i b.",
                hint: "let [a, b] = niz;",
                solution: 'const brojevi = [100, 200, 300, 400];\nconst [a, b] = brojevi;\nconsole.log(a);  // 100\nconsole.log(b);  // 200'
            },
            {
                title: "Vežba 2: Objekat",
                task: "Iz objekta {naziv: 'Laptop', cena: 50000} izvucite naziv i cenu.",
                hint: "let {naziv, cena} = objekat;",
                solution: 'const proizvod = {naziv: "Laptop", cena: 50000};\nconst {naziv, cena} = proizvod;\nconsole.log(naziv);  // "Laptop"\nconsole.log(cena);   // 50000'
            }
        ]
    },
    {
        id: 14,
        module: "Napredni Koncepti",
        title: "Spread & Rest Operatori",
        duration: "20 min",
        content: `
            <div class="lesson-header">
                <h1>Spread & Rest Operatori</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 20 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Tri tačke (...)</h2>
                <p>Operator <code>...</code> (tri tačke) ima dva različita načina upotrebe: <strong>spread</strong> i <strong>rest</strong>. Oba koriste istu sintaksu ali u različitim kontekstima.</p>

                <h3>Spread operator - Širenje niza</h3>
                <pre><code>let brojevi = [1, 2, 3];

// Širenje niza u listu vrednosti
console.log(...brojevi);  // 1 2 3

// Kopiranje niza
let kopija = [...brojevi];
console.log(kopija);  // [1, 2, 3]

// Spajanje nizova
let niz1 = [1, 2, 3];
let niz2 = [4, 5, 6];
let spojeno = [...niz1, ...niz2];
console.log(spojeno);  // [1, 2, 3, 4, 5, 6]

// Dodavanje elemenata
let prosireno = [0, ...brojevi, 4, 5];
console.log(prosireno);  // [0, 1, 2, 3, 4, 5]</code></pre>

                <h3>Spread sa objektima</h3>
                <pre><code>let osoba = {
    ime: "Marko",
    godine: 25
};

// Kopiranje objekta
let kopija = { ...osoba };
console.log(kopija);  // { ime: "Marko", godine: 25 }

// Spajanje objekata
let lokacija = {
    grad: "Beograd",
    drzava: "Srbija"
};

let kompletan = { ...osoba, ...lokacija };
console.log(kompletan);
// { ime: "Marko", godine: 25, grad: "Beograd", drzava: "Srbija" }

// Izmena svojstava
let izmenjeno = {
    ...osoba,
    godine: 26,  // Override postojeće
    email: "marko@example.com"  // Dodaj novo
};
console.log(izmenjeno);
// { ime: "Marko", godine: 26, email: "marko@example.com" }</code></pre>

                <h3>Rest operator - Sakupljanje argumenata</h3>
                <pre><code>// U funkcijama - neograničen broj argumenata
function saberi(...brojevi) {
    let suma = 0;
    for (let broj of brojevi) {
        suma += broj;
    }
    return suma;
}

console.log(saberi(1, 2, 3));           // 6
console.log(saberi(1, 2, 3, 4, 5));     // 15
console.log(saberi(10, 20, 30, 40));    // 100

// Rest mora biti poslednji parametar
function predstaviSe(ime, prezime, ...hobiji) {
    console.log(\`Ja sam \${ime} \${prezime}\`);
    console.log("Hobiji:", hobiji);
}

predstaviSe("Marko", "Marković", "programiranje", "fudbal", "gitara");
// Ja sam Marko Marković
// Hobiji: ["programiranje", "fudbal", "gitara"]</code></pre>

                <h3>Rest u destrukturiranju</h3>
                <pre><code>// Sa nizovima
let [prvi, drugi, ...ostali] = [1, 2, 3, 4, 5];
console.log(prvi);    // 1
console.log(drugi);   // 2
console.log(ostali);  // [3, 4, 5]

// Sa objektima
let korisnik = {
    ime: "Ana",
    godine: 30,
    grad: "Niš",
    email: "ana@example.com"
};

let { ime, godine, ...info } = korisnik;
console.log(ime);    // "Ana"
console.log(godine); // 30
console.log(info);   // { grad: "Niš", email: "ana@example.com" }</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Max broj sa spread:</strong>
                    <pre><code>let brojevi = [5, 12, 8, 130, 44];

// Stari način
let max1 = Math.max.apply(null, brojevi);

// Novi način sa spread
let max2 = Math.max(...brojevi);
console.log(max2);  // 130

// Isto sa min
let min = Math.min(...brojevi);
console.log(min);  // 5</code></pre>
                </div>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Immutabilnost:</strong>
                    <pre><code>// Dodavanje u niz bez mutacije
let lista = [1, 2, 3];

// ❌ Mutira originalni niz
lista.push(4);

// ✅ Kreira novi niz
let novaLista = [...lista, 4];

// Izmena objekta bez mutacije
let korisnik = { ime: "Marko", godine: 25 };

// ❌ Mutira originalni objekat
korisnik.godine = 26;

// ✅ Kreira novi objekat
let noviKorisnik = { ...korisnik, godine: 26 };</code></pre>
                </div>

                <div class="tip-box">
                    <strong>💡 Spread vs Rest:</strong>
                    <p><strong>Spread</strong> = "Raširi" niz/objekat na pojedinačne elemente<br>
                    <strong>Rest</strong> = "Sakupi" preostale elemente u niz<br><br>
                    Isti simbol (...), različita upotreba!</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Spoj nizove",
                task: "Spojite nizove [1, 2] i [3, 4] koristeći spread operator.",
                hint: "let spojeno = [...niz1, ...niz2];",
                solution: 'const niz1 = [1, 2];\nconst niz2 = [3, 4];\nconst spojeno = [...niz1, ...niz2];\nconsole.log(spojeno);  // [1, 2, 3, 4]'
            },
            {
                title: "Vežba 2: Funkcija sa rest",
                task: "Napravite funkciju 'pomnozi' koja prima neograničen broj argumenata i vraća njihov proizvod.",
                hint: "function pomnozi(...brojevi) { ... }",
                solution: 'function pomnozi(...brojevi) {\n    let proizvod = 1;\n    for (let broj of brojevi) {\n        proizvod *= broj;\n    }\n    return proizvod;\n}\n\nconsole.log(pomnozi(2, 3, 4));  // 24'
            }
        ]
    },
    {
        id: 15,
        module: "Napredni Koncepti",
        title: "JSON Format",
        duration: "20 min",
        content: `
            <div class="lesson-header">
                <h1>JSON (JavaScript Object Notation)</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 20 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta je JSON?</h2>
                <p>JSON je format za čuvanje i prenos podataka. Izgleda kao JavaScript objekat, ali je zapravo tekst. Koristi se za API-je, konfiguraciju, i čuvanje podataka.</p>

                <h3>JSON sintaksa</h3>
                <pre><code>// JavaScript objekat
let korisnik = {
    ime: "Marko",
    godine: 25,
    aktivan: true
};

// JSON string (tekst)
let jsonString = '{"ime":"Marko","godine":25,"aktivan":true}';</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Pravila JSON sintakse:</strong>
                    <p>- Ključevi MORAJU biti u dvostrukim navodnicima<br>
                    - Stringovi MORAJU biti u dvostrukim navodnicima<br>
                    - Nema function, undefined, ili Date objekata<br>
                    - Nema komentara</p>
                </div>

                <h3>JSON.stringify() - Objekat u JSON</h3>
                <pre><code>let osoba = {
    ime: "Ana",
    godine: 28,
    grad: "Beograd",
    hobiji: ["čitanje", "trčanje"]
};

// Konvertuj u JSON string
let json = JSON.stringify(osoba);
console.log(json);
// '{"ime":"Ana","godine":28,"grad":"Beograd","hobiji":["čitanje","trčanje"]}'

console.log(typeof json);  // "string"

// Sa formatiranjem (prettier)
let formatiran = JSON.stringify(osoba, null, 2);
console.log(formatiran);
/*
{
  "ime": "Ana",
  "godine": 28,
  "grad": "Beograd",
  "hobiji": [
    "čitanje",
    "trčanje"
  ]
}
*/</code></pre>

                <h3>JSON.parse() - JSON u Objekat</h3>
                <pre><code>let jsonString = '{"ime":"Marko","godine":25,"grad":"Niš"}';

// Konvertuj JSON string u objekat
let objekat = JSON.parse(jsonString);
console.log(objekat);
// { ime: "Marko", godine: 25, grad: "Niš" }

console.log(typeof objekat);  // "object"
console.log(objekat.ime);     // "Marko"</code></pre>

                <h3>Rad sa nizovima</h3>
                <pre><code>let proizvodi = [
    { id: 1, naziv: "Laptop", cena: 50000 },
    { id: 2, naziv: "Miš", cena: 1500 },
    { id: 3, naziv: "Tastatura", cena: 3000 }
];

// U JSON
let json = JSON.stringify(proizvodi);
console.log(json);

// Iz JSON-a
let nazad = JSON.parse(json);
console.log(nazad[0].naziv);  // "Laptop"</code></pre>

                <h3>Greške pri parsiranju</h3>
                <pre><code>// Nevažeći JSON
let losJSON = "{ime: 'Marko'}";  // ❌ Nema navodnika oko ključa

try {
    let objekat = JSON.parse(losJSON);
} catch (error) {
    console.log("Greška:", error.message);
    // "Unexpected token i in JSON at position 1"
}

// Važeći JSON
let dobarJSON = '{"ime":"Marko"}';  // ✅
let objekat = JSON.parse(dobarJSON);
console.log(objekat.ime);  // "Marko"</code></pre>

                <h3>LocalStorage sa JSON</h3>
                <pre><code>// LocalStorage čuva samo stringove
// Koristimo JSON za čuvanje objekata

let korisnik = {
    ime: "Marko",
    poeni: 150,
    nivo: 5
};

// Čuvanje
localStorage.setItem('korisnik', JSON.stringify(korisnik));

// Učitavanje
let ucitano = localStorage.getItem('korisnik');
let korisnikObjekat = JSON.parse(ucitano);

console.log(korisnikObjekat.ime);   // "Marko"
console.log(korisnikObjekat.poeni); // 150</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Čuvanje liste zadataka:</strong>
                    <pre><code>// To-Do aplikacija
let zadaci = [
    { id: 1, tekst: "Učiti JavaScript", zavrsen: false },
    { id: 2, tekst: "Vežbati kod", zavrsen: true },
    { id: 3, tekst: "Napraviti projekat", zavrsen: false }
];

// Sačuvaj u localStorage
function sačuvajZadatke() {
    localStorage.setItem('zadaci', JSON.stringify(zadaci));
}

// Učitaj iz localStorage
function ucitajZadatke() {
    let json = localStorage.getItem('zadaci');
    if (json) {
        return JSON.parse(json);
    }
    return [];  // Prazan niz ako nema podataka
}

// Korišćenje
sačuvajZadatke();
let ucitaniZadaci = ucitajZadatke();
console.log(ucitaniZadaci);</code></pre>
                </div>

                <div class="tip-box">
                    <strong>💡 Česta upotreba JSON-a:</strong>
                    <p>- API komunikacija (slanje/primanje podataka)<br>
                    - LocalStorage (čuvanje objekata)<br>
                    - Konfiguracioni fajlovi (package.json)<br>
                    - Data export/import</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Stringify",
                task: "Kreirajte objekat sa vašim imenom, godinama i gradom, pa ga konvertujte u JSON string.",
                hint: "JSON.stringify(objekat)",
                solution: 'const ja = {\n    ime: "Nemanja",\n    godine: 25,\n    grad: "Beograd"\n};\n\nconst json = JSON.stringify(ja);\nconsole.log(json);'
            },
            {
                title: "Vežba 2: Parse",
                task: "Parsujte JSON string '{\"broj\":42,\"tekst\":\"Hello\"}' i ispišite vrednost 'broj'.",
                hint: "JSON.parse(string)",
                solution: 'const jsonString = \'{"broj":42,"tekst":"Hello"}\';\nconst objekat = JSON.parse(jsonString);\nconsole.log(objekat.broj);  // 42'
            }
        ]
    },
    {
        id: 16,
        module: "Napredni Koncepti",
        title: "Arrow Functions",
        duration: "20 min",
        content: `
            <div class="lesson-header">
                <h1>Arrow Functions (Strelaste Funkcije)</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 20 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su Arrow Functions?</h2>
                <p>Arrow funkcije su kraća sintaksa za pisanje funkcija, uvedene u ES6. Koriste <code>=></code> simbol (strelicu).</p>

                <h3>Osnovna sintaksa</h3>
                <pre><code>// Obična funkcija
function saberi(a, b) {
    return a + b;
}

// Arrow funkcija
const saberi = (a, b) => {
    return a + b;
};

// Još kraća (implicitni return)
const saberi = (a, b) => a + b;

console.log(saberi(5, 3));  // 8</code></pre>

                <h3>Različite varijante</h3>
                <pre><code>// Bez parametara
const pozdrav = () => console.log("Zdravo!");
pozdrav();  // "Zdravo!"

// Jedan parametar (bez zagrada)
const kvadrat = x => x * x;
console.log(kvadrat(5));  // 25

// Dva ili više parametara (sa zagradama)
const saberi = (a, b) => a + b;
console.log(saberi(10, 20));  // 30

// Više linija koda (sa vitičastim zagradama)
const proveriGodine = godine => {
    if (godine >= 18) {
        return "Punoletan";
    } else {
        return "Maloletan";
    }
};
console.log(proveriGodine(25));  // "Punoletan"

// Vraćanje objekta (mora u zagrade!)
const napraviOsobu = (ime, godine) => ({ ime: ime, godine: godine });
console.log(napraviOsobu("Marko", 25));  // { ime: "Marko", godine: 25 }</code></pre>

                <h3>Sa nizovima - čitljivije!</h3>
                <pre><code>let brojevi = [1, 2, 3, 4, 5];

// Obične funkcije
brojevi.map(function(x) { return x * 2; });
brojevi.filter(function(x) { return x > 2; });

// Arrow funkcije (mnogo kraće!)
brojevi.map(x => x * 2);         // [2, 4, 6, 8, 10]
brojevi.filter(x => x > 2);      // [3, 4, 5]
brojevi.reduce((a, b) => a + b); // 15

// Kombinacija
let rezultat = brojevi
    .filter(x => x % 2 === 0)  // Parni
    .map(x => x * 3);           // Pomnoženi sa 3
console.log(rezultat);  // [6, 12]</code></pre>

                <h3>this kontekst - važna razlika!</h3>
                <pre><code>// Obična funkcija - ima svoj 'this'
let osoba1 = {
    ime: "Marko",
    godine: 25,
    predstaviSeObicno: function() {
        setTimeout(function() {
            console.log("Ja sam " + this.ime);  // ❌ undefined
        }, 1000);
    }
};

// Arrow funkcija - NE menja 'this'
let osoba2 = {
    ime: "Ana",
    godine: 28,
    predstaviSeArrow: function() {
        setTimeout(() => {
            console.log("Ja sam " + this.ime);  // ✅ "Ana"
        }, 1000);
    }
};

osoba2.predstaviSeArrow();  // "Ja sam Ana" (posle 1s)</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Kada NE koristiti arrow funkcije:</strong>
                    <p>- Kao metode objekta (gube this kontekst)<br>
                    - Kada vam treba arguments objekat<br>
                    - Kao konstruktor funkcije (ne mogu se koristiti sa new)</p>
                </div>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Filtriranje korisnika:</strong>
                    <pre><code>let korisnici = [
    { ime: "Marko", godine: 17, aktivan: true },
    { ime: "Ana", godine: 25, aktivan: false },
    { ime: "Petar", godine: 30, aktivan: true },
    { ime: "Jovana", godine: 22, aktivan: true }
];

// Filtriraj punolente i aktivne
let aktivniPunoleti = korisnici
    .filter(k => k.godine >= 18)
    .filter(k => k.aktivan)
    .map(k => k.ime);

console.log(aktivniPunoleti);  // ["Ana", "Petar", "Jovana"]

// Prosečne godine aktivnih
let prosek = korisnici
    .filter(k => k.aktivan)
    .map(k => k.godine)
    .reduce((suma, g) => suma + g, 0) / 
    korisnici.filter(k => k.aktivan).length;

console.log(prosek);  // 23</code></pre>
                </div>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Sortiranje proizvoda:</strong>
                    <pre><code>let proizvodi = [
    { naziv: "Laptop", cena: 50000 },
    { naziv: "Miš", cena: 1500 },
    { naziv: "Tastatura", cena: 3000 },
    { naziv: "Monitor", cena: 20000 }
];

// Sortiraj po ceni (rastuće)
proizvodi.sort((a, b) => a.cena - b.cena);

// Proizvodi jeftiniji od 10000 RSD
let jeftini = proizvodi.filter(p => p.cena < 10000);
console.log(jeftini.map(p => p.naziv));  // ["Miš", "Tastatura"]

// Dodaj PDV (20%)
let saPDV = proizvodi.map(p => ({
    ...p,
    cenaSaPDV: p.cena * 1.2
}));
console.log(saPDV);</code></pre>
                </div>

                <div class="tip-box">
                    <strong>💡 Best practices:</strong>
                    <p>- Koristite arrow funkcije za callback-ove (map, filter, forEach)<br>
                    - Koristite obične funkcije za metode objekata<br>
                    - Budite konzistentni u stilu pisanja<br>
                    - Kraće nije uvek bolje - čitljivost je važna!</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Konverzija",
                task: "Konvertujte funkciju 'function pomnozi(a, b) { return a * b; }' u arrow funkciju.",
                hint: "const pomnozi = (a, b) => a * b;",
                solution: 'const pomnozi = (a, b) => a * b;\nconsole.log(pomnozi(5, 4));  // 20'
            },
            {
                title: "Vežba 2: Filtriranje",
                task: "Iz niza [10, 15, 20, 25, 30] filtrirajte brojeve veće od 20 koristeći arrow funkciju.",
                hint: "niz.filter(x => x > 20)",
                solution: 'const brojevi = [10, 15, 20, 25, 30];\nconst veci = brojevi.filter(x => x > 20);\nconsole.log(veci);  // [25, 30]'
            }
        ]
    },
    {
        id: 17,
        module: "Napredni Koncepti",
        title: "Ternary Operator",
        duration: "15 min",
        content: `
            <div class="lesson-header">
                <h1>Ternary Operator (Uslovni Operator)</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 15 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta je Ternary operator?</h2>
                <p>Ternary operator je kraći način pisanja if-else naredbe. Koristi <code>?</code> i <code>:</code> za uslovnu logiku u jednoj liniji.</p>

                <h3>Osnovna sintaksa</h3>
                <pre><code>// Klasičan if-else
let godine = 20;
let status;
if (godine >= 18) {
    status = "Punoletan";
} else {
    status = "Maloletan";
}

// Ternary operator (kraće)
let status = godine >= 18 ? "Punoletan" : "Maloletan";

// Sintaksa: uslov ? vrednostAkoJeTacno : vrednostAkoJeNetacno</code></pre>

                <h3>Primeri upotrebe</h3>
                <pre><code>let broj = 10;

// Parnost
let parnost = broj % 2 === 0 ? "Paran" : "Neparan";
console.log(parnost);  // "Paran"

// Poruka
let poeni = 85;
let poruka = poeni >= 50 ? "Položio" : "Pao";
console.log(poruka);  // "Položio"

//Max broj
let a = 15, b = 20;
let max = a > b ? a : b;
console.log(max);  // 20

// Validacija
let korisnickoIme = "Marko";
let validno = korisnickoIme.length >= 3 ? true : false;
console.log(validno);  // true</code></pre>

                <h3>Ugnežđeni ternary (pažljivo!)</h3>
                <pre><code>let ocena = 85;

// Ugnežđeni ternary
let rezultat = ocena >= 90 ? "A" :
               ocena >= 80 ? "B" :
               ocena >= 70 ? "C" :
               ocena >= 60 ? "D" : "F";

console.log(rezultat);  // "B"

// Ali čitljivije je sa if-else ili switch!
if (ocena >= 90) rezultat = "A";
else if (ocena >= 80) rezultat = "B";
else if (ocena >= 70) rezultat = "C";
else if (ocena >= 60) rezultat = "D";
else rezultat = "F";</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Ne preterivati!</strong>
                    <p>Ugnežđeni ternary operatori mogu biti teški za čitanje. Ako imate više od 1-2 nivoa, koristite if-else.</p>
                </div>

                <h3>Sa funkcijama</h3>
                <pre><code>// Uslovni return
const apsolutnaVrednost = n => n >= 0 ? n : -n;
console.log(apsolutnaVrednost(-5));  // 5

// Uslovni poziv funkcije
const broj = 10;
broj % 2 === 0 ? console.log("Paran") : console.log("Neparan");

// Dodela vrednosti
const popust = cena > 10000 ? cena * 0.1 : 0;
console.log(\`Popust: \${popust} RSD\`);</code></pre>

                <h3>Sa React/JSX (budućnost!)</h3>
                <pre><code>// Časot se koristi u React-u
const prikaziDugme = ulogovan ? 
    "<button>Odjavi se</button>" : 
    "<button>Prijavi se</button>";

// Uslovni className
const klasa = aktivan ? "btn btn-active" : "btn btn-inactive";</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Status narudžbine:</strong>
                    <pre><code>function getStatusPoruka(status) {
    return status === "pending" ? "⏳ Čeka se..." :
           status === "shipped" ? "🚚 Poslato" :
           status === "delivered" ? "✅ Dostavljeno" :
           "❌ Nepoznat status";
}

console.log(getStatusPoruka("shipped"));    // "🚚 Poslato"
console.log(getStatusPoruka("delivered"));  // "✅ Dostavljeno"</code></pre>
                </div>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Formatiranje vremena:</strong>
                    <pre><code>function formatirajVreme(sati, minuti) {
    let period = sati >= 12 ? "PM" : "AM";
    let sati12 = sati > 12 ? sati - 12 : (sati === 0 ? 12 : sati);
    let minStr = minuti < 10 ? "0" + minuti : minuti;
    
    return \`\${sati12}:\${minStr} \${period}\`;
}

console.log(formatirajVreme(14, 5));   // "2:05 PM"
console.log(formatirajVreme(9, 30));   // "9:30 AM"
console.log(formatirajVreme(0, 15));   // "12:15 AM"</code></pre>
                </div>

                <h3>Ternary vs if-else</h3>
                <pre><code>// ✅ DOBRO - jednostavan uslov
const popust = cena > 5000 ? 10 : 0;

// ✅ DOBRO - dodela vrednosti
const poruka = greska ? "Greška!" : "Uspeh!";

// ❌ LOŠE - previše komplikovano
const rezultat = a > b ? (c > d ? e : f) : (g > h ? i : j);

// ✅ BOLJE - koristite if-else
let rezultat;
if (a > b) {
    rezultat = c > d ? e : f;
} else {
    rezultat = g > h ? i : j;
}</code></pre>

                <div class="tip-box">
                    <strong>💡 Kada koristiti ternary?</strong>
                    <p>- Za jednostavne if-else situacije<br>
                    - Kad dodeljujete vrednost promenljivoj<br>
                    - Kad vraćate vrednost iz funkcije<br>
                    - Za JSX u React-u<br><br>
                    NE koristite za složenu logiku ili side-effects!</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Par/Nepar",
                task: "Napišite ternary operator koji proverava da li je broj 15 paran ili neparan.",
                hint: "broj % 2 === 0 ? 'Paran' : 'Neparan'",
                solution: 'const broj = 15;\nconst parnost = broj % 2 === 0 ? "Paran" : "Neparan";\nconsole.log(parnost);  // "Neparan"'
            },
            {
                title: "Vežba 2: Popust",
                task: "Napravite funkciju koja vraća cenu sa popustom: 10% ako je cena > 10000, inače 0%.",
                hint: "cena > 10000 ? cena * 0.9 : cena",
                solution: 'const izracunajCenu = cena => cena > 10000 ? cena * 0.9 : cena;\n\nconsole.log(izracunajCenu(15000));  // 13500\nconsole.log(izracunajCenu(5000));   // 5000'
            }
        ]
    },
    {
        id: 18,
        module: "Napredni Koncepti",
        title: "Template Literals",
        duration: "15 min",
        content: `
            <div class="lesson-header">
                <h1>Template Literals (Template Strings)</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 15 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su Template Literals?</h2>
                <p>Template literals su moderni način pisanja stringova u JavaScript-u. Koriste <strong>backtick</strong> znake (\`) umesto navodnika i omogućavaju interpolaciju promenljivih i višelinijski tekst.</p>

                <h3>Osnovna upotreba</h3>
                <pre><code>// Obični stringovi
let ime = "Marko";
let poruka1 = "Zdravo, " + ime + "!";

// Template literals
let poruka2 = \`Zdravo, \${ime}!\`;

console.log(poruka2);  // "Zdravo, Marko!"</code></pre>

                <h3>Interpolacija promenljivih</h3>
                <pre><code>let ime = "Ana";
let godine = 25;
let grad = "Beograd";

// Stari način
let opis1 = "Ja sam " + ime + ", imam " + godine + " godina i živim u " + grad + ".";

// Template literals (mnogo čitljivije!)
let opis2 = \`Ja sam \${ime}, imam \${godine} godina i živim u \${grad}.\`;

console.log(opis2);
// "Ja sam Ana, imam 25 godina i živim u Beograd."</code></pre>

                <h3>Izrazi u template literals</h3>
                <pre><code>let a = 10;
let b = 20;

// Možete izvršavati izraze
console.log(\`Zbir: \${a + b}\`);              // "Zbir: 30"
console.log(\`Proizvod: \${a * b}\`);          // "Proizvod: 200"
console.log(\`Veći broj: \${a > b ? a : b}\`); // "Veći broj: 20"

// Poziv funkcije
function pozdrav(ime) {
    return \`Zdravo, \${ime}!\`;
}
console.log(\`Poruka: \${pozdrav("Marko")}\`);
// "Poruka: Zdravo, Marko!"</code></pre>

                <h3>Višelinijski stringovi</h3>
                <pre><code>// Stari način (sa \n)
let tekst1 = "Prva linija\nDruga linija\nTreća linija";

// Template literals (prirodno!)
let tekst2 = \`Prva linija
Druga linija
Treća linija\`;

console.log(tekst2);
/*
Prva linija
Druga linija
Treća linija
*/</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - HTML template:</strong>
                    <pre><code>function napraviKarticu(naziv, cena, opis) {
    return \`
        <div class="kartica">
            <h2>\${naziv}</h2>
            <p class="cena">\${cena} RSD</p>
            <p class="opis">\${opis}</p>
            <button>Dodaj u korpu</button>
        </div>
    \`;
}

let kartica = napraviKarticu("Laptop", 50000, "Dell XPS 13");
console.log(kartica);</code></pre>
                </div>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Formatiranje poruke:</strong>
                    <pre><code>let narudzbina = {
    id: 1234,
    proizvod: "Laptop",
    kolicina: 2,
    cena: 50000,
    status: "shipped"
};

let poruka = \`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 NARUDŽBINA #\${narudzbina.id}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Proizvod: \${narudzbina.proizvod}
Količina: \${narudzbina.kolicina}x
Cena: \${narudzbina.cena * narudzbina.kolicina} RSD
Status: \${narudzbina.status === "shipped" ? "🚚 Poslato" : "⏳ U procesu"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\`;

console.log(poruka);</code></pre>
                </div>

                <h3>Tagged templates (naprednije)</h3>
                <pre><code>// Funkcija koja procesira template
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
    }, '');
}

let ime = "Marko";
let grad = "Beograd";
let rezultat = highlight\`Živim u \${grad}, zovem se \${ime}.\`;

console.log(rezultat);
// "Živim u <mark>Beograd</mark>, zovem se <mark>Marko</mark>."</code></pre>

                <h3>Escape backtick</h3>
                <pre><code>// Ako vam treba backtick u template literal-u
let tekst = \`Ovo je backtick: \\\`\`;
console.log(tekst);  // "Ovo je backtick: \`"</code></pre>

                <div class="tip-box">
                    <strong>💡 Prednosti Template Literals:</strong>
                    <p>- ✅ Čitljiviji kod<br>
                    - ✅ Interpolacija promenljivih<br>
                    - ✅ Višelinijski stringovi<br>
                    - ✅ Izvršavanje izraza<br>
                    - ✅ Dinamički HTML<br><br>
                    UVEK koristite template literals umesto konkatenacije stringova!</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Interpolacija",
                task: "Napravite promenljive ime='Petar', godine=30, grad='Niš' i napišite template literal koji ih ispisuje u rečenici.",
                hint: "`Ja sam ${ime}, imam ${godine} godina.`",
                solution: 'const ime = "Petar";\nconst godine = 30;\nconst grad = "Niš";\n\nconst recenica = \`Ja sam \${ime}, imam \${godine} godina i živim u \${grad}.\`;\nconsole.log(recenica);'
            },
            {
                title: "Vežba 2: Račun",
                task: "Napravite funkciju koja prima količinu i cenu, pa vraća poruku: 'Ukupno: X RSD (Y kom x Z RSD)'",
                hint: "return `Ukupno: ${kolicina * cena} RSD (${kolicina} kom x ${cena} RSD)`;",
                solution: 'function racun(kolicina, cena) {\n    return \`Ukupno: \${kolicina * cena} RSD (\${kolicina} kom x \${cena} RSD)\`;\n}\n\nconsole.log(racun(3, 500));  // "Ukupno: 1500 RSD (3 kom x 500 RSD)"'
            }
        ]
    },
    {
        id: 19,
        module: "Napredni Koncepti",
        title: "setTimeout & setInterval",
        duration: "20 min",
        content: `
            <div class="lesson-header">
                <h1>setTimeout & setInterval (Tajmeri)</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 20 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Asinhrono izvršavanje koda</h2>
                <p>JavaScript ima funkcije za izvršavanje koda sa vremenskim kašnjenjem ili u intervalima.</p>

                <h3>setTimeout() - Jednokratno izvršavanje</h3>
                <pre><code>// Osnovna sintaksa
setTimeout(funkcija, vreme_u_milisekundama);

// Primer
console.log("Start");

setTimeout(() => {
    console.log("Ovo se izvršava posle 2 sekunde");
}, 2000);

console.log("Kraj");

// Output:
// Start
// Kraj
// Ovo se izvršava posle 2 sekunde (posle 2s)</code></pre>

                <h3>setTimeout sa parametrima</h3>
                <pre><code>function pozdrav(ime, grad) {
    console.log(\`Zdravo \${ime} iz \${grad}!\`);
}

// Parametri posle vremena
setTimeout(pozdrav, 1000, "Marko", "Beograd");
// Posle 1s: "Zdravo Marko iz Beograd!"</code></pre>

                <h3>Zaustavljanje setTimeout</h3>
                <pre><code>// Čuvanje timeout ID-a
let timeoutId = setTimeout(() => {
    console.log("Ovo se neće izvršiti");
}, 3000);

// Zaustavljanje
clearTimeout(timeoutId);
console.log("Timeout zaustavljen!");</code></pre>

                <h3>setInterval() - Ponavljano izvršavanje</h3>
                <pre><code>// Izvršava se svakih N milisekundi
let brojac = 0;

let intervalId = setInterval(() => {
    brojac++;
    console.log(\`Prošlo je \${brojac} sekundi\`);
}, 1000);

// Output (svakih 1s):
// Prošlo je 1 sekundi
// Prošlo je 2 sekundi
// Prošlo je 3 sekundi
// ...</code></pre>

                <h3>Zaustavljanje setInterval</h3>
                <pre><code>let brojac = 0;

let intervalId = setInterval(() => {
    brojac++;
    console.log(brojac);
    
    // Zaustavi posle 5 sekundi
    if (brojac === 5) {
        clearInterval(intervalId);
        console.log("Interval zaustavljen!");
    }
}, 1000);</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Countdown tajmer:</strong>
                    <pre><code>function countdown(sekunde) {
    console.log(\`Start: \${sekunde}s\`);
    
    let intervalId = setInterval(() => {
        sekunde--;
        
        if (sekunde > 0) {
            console.log(\`\${sekunde}s...\`);
        } else {
            console.log("⏰ Vreme je isteklo!");
            clearInterval(intervalId);
        }
    }, 1000);
}

countdown(5);
// Start: 5s
// 4s...
// 3s...
// 2s...
// 1s...
// ⏰ Vreme je isteklo!</code></pre>
                </div>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Digitalni sat:</strong>
                    <pre><code>function digitalniSat() {
    setInterval(() => {
        let sada = new Date();
        let sati = String(sada.getHours()).padStart(2, '0');
        let minuti = String(sada.getMinutes()).padStart(2, '0');
        let sekunde = String(sada.getSeconds()).padStart(2, '0');
        
        console.log(\`\${sati}:\${minuti}:\${sekunde}\`);
    }, 1000);
}

digitalniSat();
// 14:23:45
// 14:23:46
// 14:23:47
// ...</code></pre>
                </div>

                <h3>Razlika: setTimeout vs setInterval</h3>
                <pre><code>// setTimeout - JEDNOM posle kašnjenja
setTimeout(() => console.log("Ovo se izvršava samo JEDNOM"), 1000);

// setInterval - STALNO na svakih N ms
let id = setInterval(() => console.log("Ovo se ponavlja"), 1000);
// Treba ručno zaustaviti sa clearInterval(id)</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Animacija loading-a:</strong>
                    <pre><code>function loading() {
    let dots = '';
    let brojac = 0;
    
    let intervalId = setInterval(() => {
        brojac++;
        dots += '.';
        
        if (dots.length > 3) dots = '';
        
        console.clear();  // Očisti konzolu
        console.log(\`Loading\${dots}\`);
        
        // Zaustavi posle 10s
        if (brojac >= 10) {
            clearInterval(intervalId);
            console.log("✅ Učitano!");
        }
    }, 500);
}

loading();
// Loading.
// Loading..
// Loading...
// Loading
// ... (10s)
// ✅ Učitano!</code></pre>
                </div>

                <h3>Asinhronost - Važno!</h3>
                <pre><code>console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);  // Čak i sa 0ms!

console.log("3");

// Output:
// 1
// 3
// 2

// Zašto? setTimeout je UVEK asinhroni,
// čak i sa 0ms odložio izvršavanje!</code></pre>

                <div class="warning-box">
                    <strong>⚠️ Česte greške:</strong>
                    <p>- Zaboravljanje clearInterval (beskonačno izvršavanje!)<br>
                    - Korišćenje \`setInterval(() => { ... }, 1000)()\` - NE pozivajte funkciju!<br>
                    - Memorijske curenje ako ne očistite intervale pri unmount-u komponente</p>
                </div>

                <div class="tip-box">
                    <strong>💡 Kada koristiti?</strong>
                    <p><strong>setTimeout</strong>:<br>
                    - Kašnjenje izvršavanja koda<br>
                    - Debouncing (odloženo pretraživanje)<br>
                    - Animacije sa vremenskim razmakom<br><br>
                    <strong>setInterval</strong>:<br>
                    - Satovi, tajmeri<br>
                    - Polling (provera servera)<br>
                    - Animacije (ali requestAnimationFrame je bolje!)</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Timeout",
                task: "Napravite setTimeout koji posle 3 sekunde ispisuje 'Prošle su 3 sekunde'.",
                hint: "setTimeout(() => { ... }, 3000);",
                solution: 'setTimeout(() => {\n    console.log("Prošle su 3 sekunde");\n}, 3000);'
            },
            {
                title: "Vežba 2: Interval sa zaustavljanjem",
                task: "Napravite interval koji broji od 1 do 5 (svakih 1s), pa se zaustavlja.",
                hint: "setInterval + if (broj === 5) clearInterval(id)",
                solution: 'let broj = 0;\nconst id = setInterval(() => {\n    broj++;\n    console.log(broj);\n    \n    if (broj === 5) {\n        clearInterval(id);\n        console.log("Gotovo!");\n    }\n}, 1000);'
            }
        ]
    },
    {
        id: 20,
        module: "Napredni Koncepti",
        title: "Callback Functions",
        duration: "25 min",
        content: `
            <div class="lesson-header">
                <h1>Callback Functions</h1>
                <p class="lesson-meta">Modul 6 - Napredni Koncepti • 25 minuta</p>
            </div>
            <div class="lesson-content">
                <h2>Šta su Callback funkcije?</h2>
                <p>Callback je funkcija koja se prosleđuje drugoj funkciji kao argument, i izvršava se KASNIJE. Ovo je osnova asinhronog programiranja u JavaScript-u.</p>

                <h3>Osnovna ideja</h3>
                <pre><code>// Obična funkcija
function pozdrav(ime) {
    console.log(\`Zdravo, \${ime}!\`);
}

// Funkcija koja prima callback
function izvrsiCallback(callback) {
    let ime = "Marko";
    callback(ime);  // Poziv callback funkcije
}

izvrsiCallback(pozdrav);  // "Zdravo, Marko!"</code></pre>

                <h3>Inline callback funkcije</h3>
                <pre><code>function izvrsiCallback(callback) {
    callback("Ana");
}

// Callback kao anonimna funkcija
izvrsiCallback(function(ime) {
    console.log(\`Ćao, \${ime}!\`);
});

// Callback kao arrow funkcija
izvrsiCallback(ime => {
    console.log(\`Hej, \${ime}!\`);
});</code></pre>

                <h3>Callback sa array metodama</h3>
                <pre><code>let brojevi = [1, 2, 3, 4, 5];

// forEach prima callback
brojevi.forEach(function(broj) {
    console.log(broj * 2);
});

// map prima callback
let kvadrati = brojevi.map(broj => broj * broj);
console.log(kvadrati);  // [1, 4, 9, 16, 25]

// filter prima callback
let parni = brojevi.filter(broj => broj % 2 === 0);
console.log(parni);  // [2, 4]</code></pre>

                <h3>Callback sa više argumenata</h3>
                <pre><code>function obradiKorisnike(korisnici, callback) {
    korisnici.forEach((korisnik, index) => {
        callback(korisnik, index);
    });
}

let korisnici = ["Marko", "Ana", "Petar"];

obradiKorisnike(korisnici, (ime, pozicija) => {
    console.log(\`\${pozicija + 1}. \${ime}\`);
});
// 1. Marko
// 2. Ana
// 3. Petar</code></pre>

                <h3>Asinhroni callback-ovi</h3>
                <pre><code>// setTimeout sa callback-om
function pozdraviPosle(ime, callback) {
    console.log("Priprema...");
    
    setTimeout(() => {
        callback(ime);
    }, 2000);
}

pozdraviPosle("Marko", ime => {
    console.log(\`Zdravo, \${ime}!\`);
});

// Output:
// Priprema... (odmah)
// Zdravo, Marko! (posle 2s)</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Filtriranje i formatiranje:</strong>
                    <pre><code>let proizvodi = [
    { naziv: "Laptop", cena: 50000, aktivan: true },
    { naziv: "Miš", cena: 1500, aktivan: false },
    { naziv: "Tastatura", cena: 3000, aktivan: true }
];

function obradiProizvode(lista, filter, formatter) {
    return lista
        .filter(filter)        // Callback 1
        .map(formatter);       // Callback 2
}

let rezultat = obradiProizvode(
    proizvodi,
    p => p.aktivan,                    // Filter callback
    p => \`\${p.naziv}: \${p.cena} RSD\`  // Format callback
);

console.log(rezultat);
// ["Laptop: 50000 RSD", "Tastatura: 3000 RSD"]</code></pre>
                </div>

                <h3>Callback Hell (problem!)</h3>
                <pre><code>// ❌ Loše - ugnežđeni callback-ovi
function prviKorak(callback) {
    setTimeout(() => {
        console.log("Korak 1");
        callback();
    }, 1000);
}

prviKorak(() => {
    setTimeout(() => {
        console.log("Korak 2");
        setTimeout(() => {
            console.log("Korak 3");
            setTimeout(() => {
                console.log("Korak 4");
            }, 1000);
        }, 1000);
    }, 1000);
});

// Ovo se zove "Callback Hell" ili "Pyramid of Doom"
// Rešenje: Promises ili async/await (sledeća lekcija!)</code></pre>

                <div class="example-box">
                    <strong>📝 Praktičan primer - Validacija forme:</strong>
                    <pre><code>function validirajFormu(podaci, successCallback, errorCallback) {
    let greske = [];
    
    if (!podaci.ime || podaci.ime.length < 3) {
        greske.push("Ime mora imati najmanje 3 karaktera");
    }
    
    if (!podaci.email.includes("@")) {
        greske.push("Email mora sadržati @");
    }
    
    if (podaci.godine < 18) {
        greske.push("Morate biti punoleti");
    }
    
    if (greske.length === 0) {
        successCallback(podaci);
    } else {
        errorCallback(greske);
    }
}

// Upotreba
let formData = {
    ime: "Marko",
    email: "marko@example.com",
    godine: 25
};

validirajFormu(
    formData,
    podaci => {
        console.log("✅ Uspešno!", podaci);
    },
    greske => {
        console.log("❌ Greške:");
        greske.forEach(g => console.log("  - " + g));
    }
);</code></pre>
                </div>

                <h3>Error-first callbacks (Node.js stil)</h3>
                <pre><code>// Konvencija: prvi parametar je greška
function ucitajPodatke(callback) {
    let uspelo = Math.random() > 0.5;
    
    setTimeout(() => {
        if (uspelo) {
            callback(null, { ime: "Marko", godine: 25 });
        } else {
            callback(new Error("Neuspelo učitavanje"), null);
        }
    }, 1000);
}

ucitajPodatke((error, podaci) => {
    if (error) {
        console.log("Greška:", error.message);
    } else {
        console.log("Podaci:", podaci);
    }
});</code></pre>

                <div class="tip-box">
                    <strong>💡 Best Practices:</strong>
                    <p>- Imenujte callback funkcije (lakše debugging)<br>
                    - Izbegavajte duboko ugnežđavanje (callback hell)<br>
                    - Proveravajte da li je callback funkcija pre poziva<br>
                    - Koristite arrow funkcije za kraće callback-ove<br>
                    - Za složenije async operacije koristite Promises ili async/await</p>
                </div>

                <div class="warning-box">
                    <strong>⚠️ Česte greške:</strong>
                    <p>- Pozivanje callback-a umesto prosleđivanja: <code>funkcija(callback())</code> ❌<br>
                    - Pravilno: <code>funkcija(callback)</code> ✅<br>
                    - Zaboravljanje provere da li je callback funkcija:<br>
                    <code>if (typeof callback === 'function') callback();</code></p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Vežba 1: Osnovni callback",
                task: "Napravite funkciju 'izvrsi' koja prima broj i callback, pa poziva callback sa tim brojem.",
                hint: "function izvrsi(broj, callback) { callback(broj); }",
                solution: 'function izvrsi(broj, callback) {\n    callback(broj);\n}\n\nizvrsi(10, broj => {\n    console.log("Broj je: " + broj);\n});'
            },
            {
                title: "Vežba 2: Filter callback",
                task: "Napravite funkciju koja prima niz i callback, pa vraća filtrirane elemente.",
                hint: "return niz.filter(callback);",
                solution: 'function filtriraj(niz, callback) {\n    return niz.filter(callback);\n}\n\nconst brojevi = [1, 2, 3, 4, 5];\nconst parni = filtriraj(brojevi, n => n % 2 === 0);\nconsole.log(parni);  // [2, 4]'
            }
        ]
    }
];

