var app = new Vue({
  el: "#app",
  data:{
    counter: 0,
    nuovoMess: "",
    contatti:[
      {  // --------------------DARTH VADER-----
        nome: "Dart Vader",
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
      console.log(this.counter);
    },
    // newSent(text){ //PER AGGIUNGERE PERSONAGGIO
    //   this.nuovoMess = text;
    //   document.getElementsByClassName('chat-right').innerHTML +=
    //   (`<div class="sent">
    //     <div class="mess-sent">
    //       <p>{{nuovoMess}}</p>
    //       <i class="fas fa-caret-left"></i>
    //     </div>
    //   </div>`)
    // }
  }
})
