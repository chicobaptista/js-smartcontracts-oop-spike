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

    setMintBehaviour(mintBehaviour) {
        this.mintBehaviour = mintBehaviour
    }

    mint(amount, to) {
        this.mintBehaviour.performMint(amount, to)
    }

    setTransferBehaviour(transferBehaviour){
        this.transferBehaviour = transferBehaviour
    }

    transfer(amount, from, to) {
        this.transferBehaviour.performTransfer(amount, from, to)
    }
}

module.exports = ERC20