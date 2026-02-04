// Player class represents a character in the fight club game
export class Player {
    // Constructor initializes a player with name, health points, class, and available attacks
    constructor(name, hp, playerClass, attacks = []) {
        this.name = name;                  // Player's name
        this.hp = hp;                      // Player's health points
        this.playerClass = playerClass;    // Player's class (e.g., warrior, mage)
        this.attacks = attacks;            // Array of Attack objects the player can use
    }

    // Check if the player is still alive (has health points remaining)
    isAlive() {
        return this.hp > 0;
    }

    // Select a random attack from the player's available attacks
    getRandomAttack() {
        const index = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[index];
    }

    // Execute an attack on the target player
    attack(targetPlayer, log) {
        // Check if this player is still alive
        if (!this.isAlive()) {
            log(`${this.name} is defeated and cannot attack.`);
            return;
        }

        // Check if the target player is still alive
        if (!targetPlayer.isAlive()) {
            log(`${targetPlayer.name} is already defeated.`);
            return;
        }

        // Select a random attack to use
        const attack = this.getRandomAttack();

        // Determine if the attack hits (based on attack's hit chance)
        if (attack.attemptHit()) {
            // Apply damage to the target player
            const oldHp = targetPlayer.hp;
            targetPlayer.hp -= attack.damage;
            // Ensure HP doesn't go below 0
            if (targetPlayer.hp < 0) targetPlayer.hp = 0;

            log(`${this.name} uses ${attack.name} ✅ HIT (${attack.damage}). ${targetPlayer.name}: ${oldHp} → ${targetPlayer.hp}`);
        } else {
            // Attack missed            
            log(`${this.name} uses ${attack.name} ❌ MISS. ${targetPlayer.name} takes 0.`);            
        }
    }
}