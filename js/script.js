/*
Descrizione:

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Vi ricordo le funzionalità minime:

-Deve vedersi un'immagine grande che è l'immagine principale
-Devono vedersi i thumbnails
-Il thumbnails che corrisponde all'immagine grande deve essere graficamente messo in risalto 
con una classe active
-Deve essere possibile cambiare l'immagine principale con le freccette prev e next
-Bisogna fare in modo che il carosello sia "infinito": se clicco sul next e sono all'ultima immagine, ricomincio dalla prima; se sono alla prima immagine e clicco sul prev vado all'ultima.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
*/

//------------------------------------------------------------------------------

// creo app

const app = Vue.createApp({
  name: "Carousel",
  data() {
    return {
      currentIndex: 0,
      pictures: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morales",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  methods: {
    // function for prev button
    goToPrev() {
      this.currentIndex--;
      // infinite loop for prev
      if (this.currentIndex < 0) this.currentIndex = this.pictures.length - 1;
    },
    // function for next button
    goToNext() {
      this.currentIndex++;
      // infite loop for next
      if (this.currentIndex === this.pictures.length) this.currentIndex = 0;
    },
    // function for thumbnails
    goToI(target) {
      this.currentIndex = target;
    },
  },
});

app.mount("#root");
