var app = new Vue({
  el: "#app",
  data:{
    counter: 0,
    intervallo: "",
    nuovoMess: "",
    now: "",
    ricerca: "",
    ricercaToUpper: "",
    nomeToUpper: "",
    tendina: {
      index: false
    },
    contatti:[
      {  // --------------------DARTH VADER-----
        nome: "Darth Vader",
        src: "img/darth.jpg",
        visible: true,
        mes: [
          {
            data: "4/9/1972 21:45",
            text: "Sono tuo padre",
            status: "rec"
          },
          {
            data: "12/3/1970 12:30",
            text: "See come no...",
            status: "sent"
          }
        ]
      },
      { // --------------------YODA-----
        nome: "Yoda",
        src: "img/yoda.jpeg",
        visible: true,
        mes: [
          {
            data: "4/9/1972 21:45",
            text: "Tu ad allenarti venire devi!!",
            status: "rec"
          },
          {
            data: "12/3/1970 12:30",
            text: "Scusa devo salvare Leila",
            status: "sent"
          }
        ]
      },
      { // --------------------CHEWBECA-----
        nome: "Chewbecca",
        src: "img/chewbe.png",
        visible: true,
        mes: [
          {
            data: "4/9/1972 21:45",
            text: "AAAAAAAAAA",
            status: "rec"
          },
          {
            data: "12/3/1970 12:30",
            text: "Si, lo so!!",
            status: "sent"
          }
        ]
      },
      {  // --------------------OBI WAN KENOBI-----
        nome: "Obi Wan Kenobi",
        src: "img/obi.jpg",
        visible: true,
        mes: [
          {
            data: "4/9/1972 21:45",
            text: "Usa la forza Luke!",
            status: "rec"
          },
          {
            data: "12/3/1970 12:30",
            text: "Ci provo...",
            status: "sent"
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
      this.nuovoMess = '';
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
    filtro() {
      this.ricercaToUpper = this.ricerca.toUpperCase();
      this.contatti.forEach((items, counter, ricerca) => {
        this.nomeToUpper = items.nome.toUpperCase();
        (this.nomeToUpper.includes(this.ricercaToUpper)) ? items.visible = true : items.visible = false;
      });
    },
    attivaTendina(indice){
      this.tendina.index = indice;
    },
    eliminaMes(indice){
      this.contatti[this.counter].mes.splice(indice,1);
      this.tendina.index = false;
    }
  }
})
