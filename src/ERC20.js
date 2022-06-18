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

    getTotalSupply() {
        return this.getHolders().reduce((totalBalance, holder) => totalBalance += this.balanceOf(holder), 0)
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

    transfer(amount, from, to) {
        if(amount <= 0) throw Error('Must attempt to transfer a positive amount')
        if(this.balanceOf(from) < amount) throw Error('Sender does not have enough funds')
        
        this.balances[from] -= amount
        this.balances[to] ? this.balances[to] += amount : this.balances[to] = amount
    }
}

module.exports = ERC20