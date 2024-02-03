

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

fetch('https://kaul.inf.h-brs.de/ccm/we/ws23/resources/assets/Plagiatsresolution.html')
    .then(response => response.text()).then(data => {
        // console.log(data)
        const text = data.replace(/<[^>]*>/g, ' ')
        // return data
        const splitText = text.split(/["\s.,;:!?()]+/)
        console.log(splitText.length);

        const wordMap = new Map();
        splitText.forEach(word => {
            if (!stopWords.includes(word)) {
                wordMap.set(word, wordMap.get(word) || 0);
                wordMap.set(word, wordMap.get(word) + 1);
            }
        })
        //ToDo: 
        // splitText.filter(word => !stopWords.includes(word)).map(
        //     wordMap.set(word, wordMap.get(word) || 0);
        // wordMap.set(word, wordMap.get(word) + 1);
        // )

        console.log(wordMap.size)

        const mapSortValues = [...wordMap].sort((b, a) => a[1] - b[1]);

        const top3 = mapSortValues.slice(0, 3)
        console.log(top3)
    }).catch(error => console.log(error))
