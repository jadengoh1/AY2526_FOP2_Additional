import { Attack } from "./Attack.js";
import { Player } from "./Player.js";

export function createGame() {
  const swordSlash = new Attack("Sword Slash", 20, 80);
  const shieldBash = new Attack("Shield Bash", 10, 60);
  const fireball   = new Attack("Fireball", 30, 70);
  const lightning  = new Attack("Lightning Strike", 40, 50);

  const warrior = new Player("Arthas", 100, "Warrior", [swordSlash, shieldBash]);
  const wizard  = new Player("Merlin",  80, "Wizard",  [fireball, lightning]);

  return { warrior, wizard};
}
