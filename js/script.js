var app = new Vue({
  el: "#app",
  data:{
    counter: 0,
    intervallo: "",
    nuovoMess: "",
    now: "",
    ricerca: "",
    contatti:[
      {  // --------------------DARTH VADER-----
        nome: "Darth Vader",
        src: "img/darth.jpg",
        visible: true,
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
        visible: true,
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
        visible: true,
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
        visible: true,
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
    newSent(nuovoMess, now, contatti, counter){ //PER AGGIUNGERE PERSONAGGIO
      this.contatti[this.counter].mes.push({
        data: '17:30',
        text: this.nuovoMess,
        status: "sent"
      });
      document.getElementById('input').value = '';
      setTimeout( (now, contatti, counter) => {
        this.contatti[this.counter].mes.push({
          data: '17:30',
          text: "ok",
          status: "rec"
        });
      }, 2000);
    },
    adesso(now){
      console.log(this.now);
    },
    filtro(contatti, counter, ricerca) {
      this.contatti.forEach((contatti, counter, ricerca) => {
        (this.contatti[this.counter].nome.includes(this.ricerca)) ? this.contatti[this.counter].visible = false : '';
      });
    }
  }
})
