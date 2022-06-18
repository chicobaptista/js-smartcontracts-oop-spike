class ERC20 {

    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
        this.balances = {}
    }

    getName() {
        return this.name
    }

    getSymbol() {
        return this.symbol
    }

    getBalances() {
        return this.balances
    }

    balanceOf(holder) {
        return this.balances[holder] != undefined ? this.balances[holder] : 0
    }

    getHolders() {
        return Object.keys(this.balances) 
    }

}

module.exports = ERC20