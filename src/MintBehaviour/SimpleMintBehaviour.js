const MintBehaviour = require('./MintBehaviour') 

class SimpleMintBehavior extends MintBehaviour{
    performMint() {
        return function (amount, to) {
            if(amount <=0) throw Error('Must mint a positive amount')
        
            this.balances[to] !== undefined ? this.balances[to] += amount : this.balances[to] = amount
        }
    }
}

module.exports = SimpleMintBehavior