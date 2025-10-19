// Import images
import karateImage from '../assets/activities/karate.jpg';
import hantverkImage from '../assets/activities/hantverk.jpg';
import arabiskaImage from '../assets/activities/arabiska.jpg';
import syverkstadImage from '../assets/activities/syverkstad.jpg';
import engelskaImage from '../assets/activities/engelska.jpg';
import spejareImage from '../assets/activities/spejare.jpg';
import pingisImage from '../assets/activities/pingis.jpg';
const activities = [
  {
    id: '1',
    slug: 'karate',
    name: 'Karate',
    day: 'Tisdag & Fredag',
    time: 'Tis 18:00–20:00, Fre 19:00–21:00',
    location: 'Östergårdshallen',
    age: '10–20 år',
    description: 'Karateträning för barn och ungdomar i åldern 10–20 år.',
    details: 'Vi erbjuder karateträning för barn och ungdomar i åldern 10–20 år med fokus på självförsvar, disciplin, kroppskontroll och fysisk styrka. Deltagarna utvecklar samtidigt sitt självförtroende och sin uthållighet. Karaten bidrar till sunda vanor och en meningsfull fritid.',
    imageUrl: karateImage
  },
  {
    id: '2',
    slug: 'hantverk',
    name: 'Hantverk',
    day: 'Lördag',
    time: '16:00–17:30',
    location: 'Föreningen',
    age: '7–10 år',
    description: 'Kreativt hantverk för barn 7–10 år.',
    details: 'Barnen får utforska sin kreativitet genom att skapa dekorationer, målningar och andra hantverksarbeten. Hantverkspassen hjälper barnen att utveckla tålamod, koncentration och finmotorik – samtidigt som de har roligt tillsammans.',
    imageUrl: hantverkImage
  },
  {
    id: '3',
    slug: 'arabiska',
    name: 'Arabiska',
    day: 'Måndag',
    time: '18:00–19:30',
    location: 'Föreningen',
    age: '6–16 år (två grupper)',
    description: 'Arabiska som hemspråk för barn och ungdomar i två åldersgrupper.',
    details: 'Kurser i arabiska som hemspråk för barn och ungdomar. Vi stärker deltagarnas läs- och skrivförmåga samt muntliga kommunikation på modersmålet. Bidrar till bevarad kulturell identitet och bättre språkförståelse. Två grupper anpassade efter ålder och nivå.',
    imageUrl: arabiskaImage
  },
  {
    id: '4',
    slug: 'syverkstad',
    name: 'Syverkstad',
    day: 'Måndag–Torsdag',
    time: '17:30–19:45',
    location: 'Föreningen',
    age: 'Alla åldrar',
    description: 'Grunder i sömnad – kläder, kuddar och väskor.',
    details: 'Deltagarna lär sig grunder i sömnad genom att sy kläder och enkla saker som kuddar och väskor. Praktiska färdigheter som kan användas hemma eller i framtiden, i en lugn och social gruppmiljö.',
    imageUrl: syverkstadImage
  },
  {
    id: '5',
    slug: 'engelska',
    name: 'Engelska',
    day: 'Måndag–Torsdag',
    time: '17:30–20:45',
    location: 'Föreningen',
    age: '7–10 år',
    description: 'Engelska för barn 7–10 år med fokus på vardaglig engelska.',
    details: 'Engelska för barn som vill förbättra språket. Fokus på vardaglig engelska, uttal, läsning och skrivövningar. Kursen ger ett viktigt stöd i skolarbetet och stärker språket.',
    imageUrl: engelskaImage
  },
  {
    id: '6',
    slug: 'spejare',
    name: 'Spejare',
    day: 'Tisdag',
    time: '16:30–19:00',
    location: 'Föreningen',
    age: '6–10 år',
    description: 'Utflykter och upptäcktsaktiviteter för barn 6–10 år.',
    details: 'Regelbundna utflykter och upptäcktsaktiviteter. Barnen får utforska natur och närmiljö och samtidigt stärka sitt ordförråd kopplat till arabiska lektioner. Roligt, lärorikt och språkutvecklande.',
    imageUrl: spejareImage
  },
  {
    id: '7',
    slug: 'valfardsaktiviteter',
    name: 'Välfärdsaktiviteter',
    day: 'Lördag',
    time: '18:00–20:00',
    location: 'Föreningen',
    age: 'Ungdomar & vuxna',
    description: 'Pingis, spel och tävlingar.',
    details: 'Bordtennis, kortspel, bingo och tävlingar. Vi skapar en trygg, social miljö där ungdomar och vuxna kan umgås, leka och ha roligt. En meningsfull fritid som stärker gemenskapen.',
    imageUrl: pingisImage
  }
];

export default activities;