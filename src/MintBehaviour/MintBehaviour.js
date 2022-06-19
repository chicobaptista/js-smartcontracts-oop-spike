class MintBehaviour {
    constructor(tokenRef) {
        this.tokenRef = tokenRef
    }
    performMint(amount, to)  {
        throw Error('Not implemented')
    }
}

module.exports = MintBehaviour