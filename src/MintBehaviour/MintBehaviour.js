class MintBehaviour {
    constructor(tokenRef) {
        this.tokenRef = tokenRef
    }
    performMint(_amount, _to)  {
        throw Error('Not implemented')
    }
}

module.exports = MintBehaviour