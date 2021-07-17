function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      winner: null,
      round: 0,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value > 100) {
        this.playerHealth = 100;
      } else if (value <= 0) {
        this.playerHealth = 0;
        if (this.monsterHealth > 0) {
          this.winner = "monster";
        } else {
          this.winner = "draw";
        }
      }
    },
    monsterHealth(value) {
      if (value > 100) {
        this.monsterHealth = 100;
      } else if (value <= 0) {
        this.monsterHealth = 0;
        if (this.playerHealth > 0) {
          this.winner = "player";
        } else {
          this.winner = "draw";
        }
      }
    },
  },
  computed: {
    mayUseSpecialAttack() {
      return this.round % 3 !== 0;
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.round = 0;
      this.logMessages = [];
    },
    attackMonster() {
      this.round++;
      const attackValue = randomNumber(6, 12);
      this.monsterHealth -= attackValue
      this.addLogMessage('player', 'attack', attackValue)
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = randomNumber(8, 16);
      this.playerHealth -= attackValue
      this.addLogMessage('monster', 'attack', attackValue)
    },
    specialAttack() {
      this.round++;
      const attackValue = randomNumber(15, 20);
      this.monsterHealth -= attackValue
      this.addLogMessage('player', 'attack', attackValue)
      this.attackPlayer();
    },
    healPlayer() {
      this.round++;
      const healValue = randomNumber(3, 25);
      this.playerHealth += healValue
      this.addLogMessage('player', 'heal', healValue)
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      })
    },
  },
});

app.mount("#game");
