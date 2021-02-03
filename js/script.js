var app = new Vue({
  el: "#app",
  data:{
    counter: 0,
    intervallo: "",
    nuovoMess: "",
    now: "",
    contatti:[
      {  // --------------------DARTH VADER-----
        nome: "Darth Vader",
        src: "img/darth.jpg",
        mes: [
          {
            data: "12/3/1970 12:30",
            text: "See come no...",
            status: "sent"
          },
          {
            data: "4/9/1972 21:45",
            text: "Sono tuo padre",
            status: "rec"
          }
        ]
      },
      { // --------------------YODA-----
        nome: "Yoda",
        src: "img/yoda.jpeg",
        mes: [
          {
            data: "12/3/1970 12:30",
            text: "Scusa devo salvare Leila",
            status: "sent"
          },
          {
            data: "4/9/1972 21:45",
            text: "Tu ad allenarti venire devi!!",
            status: "rec"
          }
        ]
      },
      { // --------------------CHEWBECA-----
        nome: "Chewbecca",
        src: "img/chewbe.png",
        mes: [
          {
            data: "12/3/1970 12:30",
            text: "Si, lo so!!",
            status: "sent"
          },
          {
            data: "4/9/1972 21:45",
            text: "AAAAAAAAAA",
            status: "rec"
          }
        ]
      },
      {  // --------------------OBI WAN KENOBI-----
        nome: "Obi Wan Kenobi",
        src: "img/obi.jpg",
        mes: [
          {
            data: "12/3/1970 12:30",
            text: "Ci provo...",
            status: "sent"
          },
          {
            data: "4/9/1972 21:45",
            text: "Usa la forza Luke!",
            status: "rec"
          }
        ]
      }
    ]
  },
  methods: {
    questo(index){
      this.counter = index;
    },
    newSent(nuovoMess, now){ //PER AGGIUNGERE PERSONAGGIO
      document.getElementById('chat-right').innerHTML +=
      `
        <div class="sent">
          <div class="mess-sent">
            <p>${nuovoMess}</p>
            <i class="fas fa-caret-left"></i>
            <span>${now}</span>
          </div>
        </div>
      `;
      document.getElementById('input').value = "";
      setTimeout( (now) => {
        document.getElementById('chat-right').innerHTML +=
        `
        <div class="rec">
          <div class="mess-rec">
            <p>ok</p>
            <i class="fas fa-caret-right"></i>
            <span>${now}</span>
          </div>
        </div>
        `;
      }, 2000);
    },
    adesso(now){
      this.now = window.dayjs_locale_zh_cn;
      console.log(this.now);
    }
  }
})
