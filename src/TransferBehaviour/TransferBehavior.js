class TransferBehaviour {
    constructor(tokenRef) {
        this.tokenRef = tokenRef
    }
    performTransfer(_amount, _from, _to)  {
        throw Error('Not implemented')
    }
}

module.exports = TransferBehaviour