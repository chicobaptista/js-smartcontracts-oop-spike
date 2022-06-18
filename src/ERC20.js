class ERC20 {

    constructor(name, symbol, transferBehaviour, mintBehaviour) {
        this.name = name
        this.symbol = symbol

    }

    getName() {
        return this.name
    }

    getSymbol() {
        return this.symbol
    }

}

module.exports = ERC20