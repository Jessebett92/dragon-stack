const Dragon = require("./dragon.js");
const { REFREASH_RATE, SECONDS } = require("./config.js");

const refreashRate = REFREASH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreashRate / 2));

    const msUntilExpiration =
      Math.random() < 0.5
        ? refreashRate - expirationPeriod
        : refreashRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  newDragon() {
    if (Date.now() > this.expiration) {
      throw new Error(`this generation expired on ${this.expiration}`);
    }
    return new Dragon();
  }
}

module.exports = Generation;
