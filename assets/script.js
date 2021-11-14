const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playBtn = $(".play-btn");
const nextBtn = $(".next-btn");
const prevBtn = $(".prev-btn");
const title = $(".header__title");
const author = $(".header__song-author");
const audio = $(".audio");

const app = {
  currentIndex: 0,
  songs: [
    { name: "Lần cuối", author: "Ngọt", path: "./assets/musics/Lan Cuoi.mp3" },
    {
      name: "Here Without You",
      author: "3 Doors Down",
      path: "./assets/musics/Here without you.mp3",
    },
    {
      name: "Tình đắng như ly Cafe",
      author: "nân. x Ngơ",
      path: "./assets/musics/Tình đắng như ly cafe.mp3",
    },
  ],
  getCurrentSong: function () {
    return this.songs[this.currentIndex];
  },

  nextSong: function () {
    if (this.currentIndex >= this.songs.length - 1) {
      this.currentIndex = 0;
      this.render();
    } else {
      this.currentIndex++;
      this.render();
    }
  },

  prevSong: function () {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
    } else if (this.currentIndex == 0) {
      this.currentIndex = this.songs.length - 1;
      this.render();
    }
  },

  handleEvents: function () {
    const _this = this;

    // Next song
    nextBtn.onclick = function () {
      console.log(_this.currentIndex, _this.songs.length);
      _this.nextSong();
      audio.play();
    };

    // Prev song
    prevBtn.onclick = function () {
      _this.prevSong();
      audio.play();
    };
  },

  render: function () {
    title.textContent = this.songs[this.currentIndex].name;
    author.textContent = this.songs[this.currentIndex].author;

    audio.src = this.songs[this.currentIndex].path;
  },

  start: function () {
    this.render();
    this.handleEvents();
  },
};

app.start();
