import { Attack } from "./Attack.js";
import { Player } from "./Player.js";

export function createGame() {
  // attacks
  const swordSlash = new Attack("Sword Slash", 20, 80);
  const shieldBash = new Attack("Shield Bash", 10, 60);
  const fireball   = new Attack("Fireball", 30, 70);
  const lightning  = new Attack("Lightning Strike", 40, 50);
  const daggers    = new Attack("Twin Daggers", 15, 85);
  const poison     = new Attack("Poison Sting", 12, 75);
  const smash      = new Attack("Hammer Smash", 25, 65);
  const roar       = new Attack("Battle Roar", 5, 95);

  // players (4)
  const players = [
    new Player("Arthas", 100, "Warrior", [swordSlash, shieldBash]),
    new Player("Merlin",  80, "Wizard",  [fireball, lightning]),
    new Player("Nyx",     90, "Rogue",   [daggers, poison]),
    new Player("Brutus", 110, "Berserker", [smash, roar]),
  ];

  // store initial hp for reset
  //const initialHp = players.map(p => p.hp);
  return { players };

//  return { players, initialHp };
}
