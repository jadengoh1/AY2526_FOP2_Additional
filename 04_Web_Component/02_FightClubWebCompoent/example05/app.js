import "./components/player-status.js";
import "./components/battle-log.js";
import "./components/battle-controls.js";
import "./components/winner-banner.js";
import { createGame } from "./game/setup.js";

let game = createGame();
let autoTimer = null;

function alivePlayers() {
  return game.players.filter(p => p.isAlive());
}

function renderStatuses({ attacker = null, defender = null, winner = null } = {}) {
  const slots = [...document.querySelectorAll("player-status")];

  game.players.forEach((p, i) => {
    const el = slots[i];
    el.setAttribute("name", p.name);
    el.setAttribute("klass", p.playerClass);
    el.setAttribute("hp", p.hp);
    el.setAttribute("alive", String(p.isAlive()));

    // default state
    let state = "normal";

    if (!p.isAlive()) state = "defeated";
    if (p === attacker && p.isAlive()) state = "attacker";
    if (p === defender && p.isAlive()) state = "defender";
    if (p === winner && p.isAlive()) state = "winner";

    el.setAttribute("state", state);
  });
}

function log(msg) {
  document.querySelector("battle-log").add(msg);
}

function checkWinnerAndStopIfNeeded() {
  const alive = alivePlayers();
  if (alive.length !== 1) return false;

  const winner = alive[0];
  document.querySelector("winner-banner").show(`${winner.name} the ${winner.playerClass} wins! 🏆`);

  // highlight final winner green, everyone else grey
  renderStatuses({ winner });

  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
  return true;
}

function pickAttackerDefender() {
  const alive = alivePlayers();
  if (alive.length < 2) return null;

  const attacker = alive[Math.floor(Math.random() * alive.length)];

  // pick defender from alive excluding attacker
  const possibleDefenders = alive.filter(p => p !== attacker);
  const defender = possibleDefenders[Math.floor(Math.random() * possibleDefenders.length)];

  return { attacker, defender };
}

function playRound() {
  if (checkWinnerAndStopIfNeeded()) return;

  const pair = pickAttackerDefender();
  if (!pair) return;

  const { attacker, defender } = pair;

  // show attacker/defender highlights immediately
  renderStatuses({ attacker, defender });

  attacker.attack(defender, log);

  // re-render with defeated grey if someone dropped to 0
  renderStatuses({ attacker, defender });

  // if now only one alive -> winner green, rest grey
  checkWinnerAndStopIfNeeded();
}

function autoBattle() {
  if (autoTimer) return;
  document.querySelector("winner-banner").hide();

  autoTimer = setInterval(() => {
    playRound();
    if (alivePlayers().length === 1) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }, 600);
}

function resetGame() {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  game = createGame();
  document.querySelector("battle-log").clear();
  document.querySelector("winner-banner").hide();

  renderStatuses();
  log("Battle reset. Ready!");
}

document.addEventListener("battle:round", playRound);
document.addEventListener("battle:auto", autoBattle);
document.addEventListener("battle:reset", resetGame);

document.addEventListener("DOMContentLoaded", () => {
  renderStatuses();
  log("Ready. Click 'Play 1 Round' or 'Auto Battle'!");
});
