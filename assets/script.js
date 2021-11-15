const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Variables===================================================================
const playBtn = $(".play-btn");
const nextBtn = $(".next-btn");
const prevBtn = $(".prev-btn");
const title = $(".header__title");
const author = $(".header__song-author");
const audio = $(".audio");
const player = $(".player");
const message = $(".message");
const cdImg = $(".cd-img");
const replayBtn = $(".replay-btn");
const progress = $("#progress");

// ===========================================================================

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Lần cuối",
      author: "Ngọt",
      path: "./assets/musics/Lan Cuoi.mp3",
      message: "Nhớ ăn uống đầy đủ nheee emmm <3",
      imgPath: "./assets/images/lancuoi.jpg",
    },
    {
      name: "Here Without You",
      author: "3 Doors Down",
      path: "./assets/musics/Here without you.mp3",
      message: "Hát đám cưới nhe kkk ^^",
      imgPath: "./assets/images/here without u.jpg",
    },
    {
      name: "Tình đắng như ly Cafe",
      author: "nân. x Ngơ",
      path: "./assets/musics/Tình đắng như ly cafe.mp3",
      message: "Luv Ya So <33",
      imgPath: "./assets/images/tinh dang nhu ly cafe.jpg",
    },
    {
      name: "Bước qua mùa cô đơn",
      author: "Vũ",
      path: "./assets/musics/buoc qua mua co don.mp3",
      message: "Ngủ nhiều nhe, ngủ nhiều anh mới thương (◠‿◠)",
      imgPath: "./assets/images/buoc qua mua co don.jpg",
    },
    {
      name: "Đi qua mùa hạ",
      author: "Thái Đinh",
      path: "./assets/musics/di qua mua ha.mp3",
      message: "Iu cô bé mặt măm (っ◔◡◔)っ ♥ ",
      imgPath: "./assets/images/di qua mua ha.jpg",
    },
    {
      name: "Mascara",
      author: "Chilles",
      path: "./assets/musics/mascara.mp3",
      message: "Love u til i die  ｡◕‿◕｡",
      imgPath: "./assets/images/mascara.jpg",
    },
    {
      name: "Đợi",
      author: "Vũ",
      path: "./assets/musics/doi.mp3",
      message: "Iu cụt cút thúi um  (⊃｡•́‿•̀｡)⊃",
      imgPath: "./assets/images/doi-vu.jpg",
    },
    {
      name: "Đông kiếm em",
      author: "Vũ",
      path: "./assets/musics/dong kiem em.mp3",
      message: "Đông kiếm Vy °‿‿° ",
      imgPath: "./assets/images/dong kiem em.jpg",
    },
    {
      name: "Hành tinh song song",
      author: "Vũ",
      path: "./assets/musics/hanh tinh song song.mp3",
      message: "Chọn bài này cho tui phải hơm ( ˘ ³˘)♥ ",
      imgPath: "./assets/images/hanh tinh song song.jpg",
    },
    {
      name: "Mùa mưa ngâu nằm cạnh",
      author: "Vũ",
      path: "./assets/musics/mua mua ngau nam canh.mp3",
      message: "Mùa mưa ngâu chui xuống nách nằm (๑•́ ₃ •̀๑)",
      imgPath: "./assets/images/mua mua ngau nam canh.jpg",
    },
  ],
  getCurrentSong: function () {
    return this.songs[this.currentIndex];
  },

  // Next song Function ===========================================================
  nextSong: function () {
    if (this.currentIndex >= this.songs.length - 1) {
      this.currentIndex = 0;
      this.render();
    } else {
      this.currentIndex++;
      this.render();
    }
  },

  // Prev song Function========================================================
  prevSong: function () {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
    } else if (this.currentIndex == 0) {
      this.currentIndex = this.songs.length - 1;
      this.render();
    }
  },

  // Handle Events=================================================================
  handleEvents: function () {
    const _this = this;
    let isPlay = false;
    let isRepeat = false;

    // Next song========================================================================
    nextBtn.onclick = function () {
      _this.nextSong();
      audio.play();
    };

    // Prev song========================================================================
    prevBtn.onclick = function () {
      _this.prevSong();
      audio.play();
    };

    //Play song========================================================================
    playBtn.onclick = function () {
      console.log(progress);
      if (isPlay) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Repeat song========================================================================
    replayBtn.onclick = function () {
      if (isRepeat) {
        isRepeat = false;
        replayBtn.classList.toggle("pressed");
      } else {
        isRepeat = true;
        replayBtn.classList.toggle("pressed");
      }
    };

    // Seek=========================================================================
    progress.onchange = function (e) {
      audio.currentTime = (audio.duration / 100) * e.target.value;
    };

    //Audio Status===============================================================
    audio.onpause = function () {
      isPlay = false;
      player.classList.remove("playing");
    };

    audio.onplay = function () {
      isPlay = true;
      player.classList.add("playing");
    };

    audio.onended = function () {
      if (isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    audio.ontimeupdate = function () {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      progress.value = currentProgress;
    };
  },

  // Render songs ================================================================
  render: function () {
    title.textContent = this.songs[this.currentIndex].name;
    author.textContent = this.songs[this.currentIndex].author;
    audio.src = this.songs[this.currentIndex].path;
    message.textContent = this.songs[this.currentIndex].message;
    cdImg.src = this.songs[this.currentIndex].imgPath;
  },
  // Start======================================================================
  start: function () {
    this.render();
    this.handleEvents();
  },
};

app.start();
