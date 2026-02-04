import "./components/player-status.js";
import "./components/battle-log.js";
import "./components/battle-controls.js";
import "./components/winner-banner.js"; 
import { createGame } from "./game/setup.js";

let game = createGame();

function renderStatus() {
  const { warrior, wizard } = game;

  const w = document.querySelector("#p1");
  w.setAttribute("name", warrior.name);
  w.setAttribute("klass", warrior.playerClass);
  w.setAttribute("hp", warrior.hp);
  w.setAttribute("alive", String(warrior.isAlive()));

  const z = document.querySelector("#p2");
  z.setAttribute("name", wizard.name);
  z.setAttribute("klass", wizard.playerClass);
  z.setAttribute("hp", wizard.hp);
  z.setAttribute("alive", String(wizard.isAlive()));
}

function log(msg) {
  document.querySelector("battle-log").add(msg);
}

function chooseAttackerDefender() {
  const { warrior, wizard } = game;
  const attacker = Math.random() < 0.5 ? warrior : wizard;
  const defender = attacker === warrior ? wizard : warrior;
  return { attacker, defender };
}

// One round = one attack
function playRound() {
  const { warrior, wizard } = game;
  if (!warrior.isAlive() || !wizard.isAlive()) return;

  const { attacker, defender } = chooseAttackerDefender();

  attacker.attack(defender, log);
  
  renderStatus();
  checkWinner();
}

let autoTimer = null;

function autoBattle() {
  if (autoTimer) return; // already running
  autoTimer = setInterval(() => {
    playRound();
    const { warrior, wizard } = game;
    if (!warrior.isAlive() || !wizard.isAlive()) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }, 500);
}

function resetGame() {
  if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }

  game = createGame();
  document.querySelector("battle-log").clear();
  document.querySelector("winner-banner").hide();
  renderStatus();
  log("Battle reset. Ready!");
}

function checkWinner() {
  const { warrior, wizard } = game;
  if (warrior.isAlive() && wizard.isAlive()) return;

  const winner = warrior.isAlive() ? warrior : wizard;
  document.querySelector("winner-banner").show(`${winner.name} the ${winner.playerClass} wins! 🏆`);
}



document.addEventListener("battle:round", playRound);
document.addEventListener("battle:reset", resetGame);
document.addEventListener("battle:auto", autoBattle);

document.addEventListener("DOMContentLoaded", () => {
  renderStatus();
  log("Ready. Click 'Play 1 Round'!");
});
