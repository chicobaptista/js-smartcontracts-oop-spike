const MintBehaviour = require('./MintBehaviour') 

class MaxSupplyMintBehavior extends MintBehaviour{
    constructor(tokenRef, maxSupply){
        super(tokenRef)
        this.maxSupply = maxSupply
    }
    performMint(amount, to) {
            if(amount <=0) throw Error('Must mint a positive amount')
            if(this.tokenRef.getTotalSupply() + amount > this.getMaxSupply()) throw Error('amount would bring total supply over maximum supply')
        
            this.tokenRef.balances[to] !== undefined ? this.tokenRef.balances[to] += amount : this.tokenRef.balances[to] = amount
        
    }

    getMaxSupply() {
        return this.maxSupply
    }
}

module.exports = MaxSupplyMintBehavior