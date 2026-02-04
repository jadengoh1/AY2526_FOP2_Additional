// Attack class represents a combat move that a player can use
export class Attack {
    // Constructor initializes an attack with name, damage amount, and hit probability
    constructor(name, damage, hitPercentage) {
        this.name = name;                    // Name of the attack (e.g., "Sword Slash", "Fireball")
        this.damage = damage;                // Amount of damage this attack deals
        this.hitPercentage = hitPercentage;  // Probability of hitting (0–100)
    }

    // Determine if the attack hits based on its hit percentage
    // Returns true if the attack hits, false if it misses
    attemptHit() {
        const roll = Math.random() * 100;   // Generate a random number between 0.0 and 99.999...
        return roll <= this.hitPercentage;  // Hit succeeds if roll is within the hit percentage
    }
}

