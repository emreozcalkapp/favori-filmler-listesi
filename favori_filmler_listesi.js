// Kullanıcıdan favori filmlerini al ve bir array'de tut.
// Filmleri alfabetik sıraya dizip ekrana yazdır.

let filmAdet = Number(prompt("Kaç adet film girmek istiyorunuz ?"));

let favoriFilmler = [];

for (let index = 0; index < filmAdet; index++) {
    const film = prompt(`${index + 1}. filmi giriniz`);
    favoriFilmler.push(film);
}
favoriFilmler.sort();
console.log(favoriFilmler.toString());