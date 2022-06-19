const MintBehaviour = require('./MintBehaviour') 

class SimpleMintBehavior extends MintBehaviour{
    performMint(amount, to) {
            if(amount <=0) throw Error('Must mint a positive amount')
        
            this.tokenRef.balances[to] !== undefined ? this.tokenRef.balances[to] += amount : this.tokenRef.balances[to] = amount
        }
    
}

module.exports = SimpleMintBehavior