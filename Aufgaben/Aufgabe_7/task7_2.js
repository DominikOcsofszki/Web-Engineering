
const text = `Plagiatsresolution und -maßnahmen

Resolution zum akademischen Ethos und zu den akademischen Standards

In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die Hochschule Bonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmen einzuleiten.

1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.

2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohl über den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- und Denkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.

3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.

Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.

Eckpunkte zur Plagiatsprüfung

Der Senat empfiehlt:

1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss fester Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.

2. Alle Abschlussarbeiten werden auf Plagiate geprüft.

3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.

4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.

5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.

6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.

7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule stichprobenartige Plagiatsprüfungen vor.

Selbstverpflichtungserklärung der Studierenden:

Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.

"Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin."";
`;

const htmlList = `
a
abbr
address
area
article
aside
audio
b
bdi
bdo
blockquote
body
br
button
canvas
caption
cite
code
col
colgroup
command
datalist
dd
del
details
dfn
div
dl
dt
em
embed
fieldset
figcaption
figure
footer
form
h1
h2
h3
h4
h5
h6
header
hr
html
i
iframe
img
input
ins
kbd
keygen
label
legend
li
main
map
mark
menu
meter
nav
object
ol
optgroup
option
output
p
param
pre
progress
q
rp
rt
ruby
s
samp
section
select
small
source
span
strong
sub
summary
sup
table
tbody
td
textarea
tfoot
th
thead
time
tr
track
u
ul
var
video
wbr
`
const stopWord = `aber
    als
    am
    an
    auch
    auf
    aus
    bei
    bin
    bis
    bist
    da
    dadurch
    daher
    darum
    das
    daß
    dass
    dein
    deine
    dem
    den
    der
    des
    dessen
    deshalb
    die
    dies
    dieser
    dieses
    doch
    dort
    du
    durch
    ein
    eine
    einem
    einen
    einer
    eines
    er
    es
    euer
    eure
    für
    hatte
    hatten
    hattest
    hattet
    hier
    hinter
    ich
    ihr
    ihre
    im
    in
    ist
    ja
    jede
    jedem
    jeden
    jeder
    jedes
    jener
    jenes
    jetzt
    kann
    kannst
    können
    könnt
    machen
    mein
    meine
    mit
    muß
    mußt
    musst
    müssen
    müßt
    nach
    nachdem
    nein
    nicht
    nun
    oder
    seid
    sein
    seine
    sich
    sie
    sind
    soll
    sollen
    sollst
    sollt
    sonst
    soweit
    sowie
    und
    unser
    unsere
    unter
    vom
    von
    vor
    wann
    warum
    was
    weiter
    weitere
    wenn
    wer
    werde
    werden
    werdet
    weshalb
    wie
    wieder
    wieso
    wir
    wird
    wirst
    wo
    woher
    wohin
    zu
    zum
    zur
    über`
// const splitText = text.split(/["\s.,;:!?()]+/).forEach(word => {
//     console.log(word);
// });

const stopWords = stopWord.split(/\n/).map(word => word.trim())
const htmlWords = htmlList.split(/\n/).map(word => word.trim())


// console.log(stopWords)
// console.log(htmlWords)
stopWords.concat(htmlWords)
console.log(stopWords)

const splitText = text.split(/["\s.,;:!?()]+/)
console.log(splitText.length);

const wordMap = new Map();
splitText.forEach(word => {
    if (!stopWords.includes(word)) {
        wordMap.set(word, wordMap.get(word) || 0);
        wordMap.set(word, wordMap.get(word) + 1);
    }
})
console.log(wordMap.size)

const mapSortValues = [...wordMap].sort((b, a) => a[1] - b[1]);

const top3 = mapSortValues.slice(0, 3)
console.log(top3)