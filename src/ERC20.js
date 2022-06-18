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

    mint(amount, to) {
        if(amount <=0) throw Error('Must mint a positive amount')
    
        this.balances[to] !== undefined ? this.balances[to] += amount : this.balances[to] = amount
    }
}

module.exports = ERC20