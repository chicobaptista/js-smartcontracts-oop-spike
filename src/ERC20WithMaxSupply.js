const ERC20 = require ('./ERC20')

class ERC20WithMaxSupply extends ERC20 {
    constructor(name, symbol, maxSupply){
        super(name, symbol)
        this.maxSupply = maxSupply
    }

    getMaxSupply() {
        return this.maxSupply
    }

    mint(amount, to) {
        if(this.getTotalSupply() + amount > this.maxSupply) throw Error('amount would bring total supply over maximum supply')
        super.mint(amount, to)
    }
}

module.exports = ERC20WithMaxSupply