const TransferBehaviour = require('./TransferBehavior') 

class SimpleTransferBehavior extends TransferBehaviour{
    performTransfer(amount, from, to) {
        if(amount <= 0) throw Error('Must attempt to transfer a positive amount')
        if(this.tokenRef.balanceOf(from) < amount) throw Error('Sender does not have enough funds')
        
        this.tokenRef.balances[from] -= amount
        this.tokenRef.balances[to] ? this.tokenRef.balances[to] += amount : this.tokenRef.balances[to] = amount
    }
    
}

module.exports = SimpleTransferBehavior