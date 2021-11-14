const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playBtn = $(".play-btn");
const nextBtn = $(".next-btn");
const prevBtn = $(".prev-btn");
const title = $(".header__title");
const author = $(".header__song-author");
const audio = $(".audio");
const player = $(".player");
const message = $(".message");

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Lần cuối",
      author: "Ngọt",
      path: "./assets/musics/Lan Cuoi.mp3",
      message: "Nhớ ăn uống đầy đủ nheee emmm <3",
    },
    {
      name: "Here Without You",
      author: "3 Doors Down",
      path: "./assets/musics/Here without you.mp3",
      message: "Hát đám cưới nhe kkk ^^",
    },
    {
      name: "Tình đắng như ly Cafe",
      author: "nân. x Ngơ",
      path: "./assets/musics/Tình đắng như ly cafe.mp3",
      message: "Luv Ya So <33",
    },
    {
      name: "Bước qua mùa cô đơn",
      author: "Vũ",
      path: "./assets/musics/buoc qua mua co don.mp3",
      message: "Ngủ nhiều nhe, ngủ nhiều anh mới thương (◠‿◠)",
    },
    {
      name: "Đi qua mùa hạ",
      author: "Thái Đinh",
      path: "./assets/musics/di qua mua ha.mp3",
      message: "Iu cô bé mặt măm (っ◔◡◔)っ ♥ ",
    },
    {
      name: "Mascara",
      author: "Chilles",
      path: "./assets/musics/mascara.mp3",
      message: "Love u til i die  ｡◕‿◕｡",
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
    let isPlay = false;

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

    //Play song
    playBtn.onclick = function () {
      if (isPlay) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    //Audio Status
    audio.onpause = function () {
      isPlay = false;
      player.classList.remove("playing");
    };
    audio.onplay = function () {
      isPlay = true;
      player.classList.add("playing");
    };
  },

  render: function () {
    title.textContent = this.songs[this.currentIndex].name;
    author.textContent = this.songs[this.currentIndex].author;
    audio.src = this.songs[this.currentIndex].path;
    message.textContent = this.songs[this.currentIndex].message;
  },

  start: function () {
    this.render();
    this.handleEvents();
  },
};

app.start();
