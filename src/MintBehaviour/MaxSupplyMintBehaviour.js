const MintBehaviour = require('./MintBehaviour') 

class MaxSupplyMintBehavior extends MintBehaviour{
    constructor(tokenRef, mintBehaviour, maxSupply){
        super(tokenRef)
        this.mintBehaviour = new mintBehaviour(tokenRef)
        this.maxSupply = maxSupply
    }
    performMint (amount, to) {
            if(this.tokenRef.getTotalSupply() + amount > this.getMaxSupply()) 
                throw Error('amount would bring total supply over maximum supply')
            
            this.mintBehaviour.performMint(amount, to)
    }

    getMaxSupply() {
        return this.maxSupply
    }
}

module.exports = MaxSupplyMintBehavior