class WithCollateralAssets {

    constructor(tokenRef, assets) {
        this.tokenRef = tokenRef
        this.assets = assets
        this.assetTracking = []
    }

    getName() {
        return this.tokenRef.getName()
    }

    getSymbol() {
        return this.tokenRef.getSymbol()
    }

    getBalances() {
        return this.tokenRef.getBalances()
    }

    getTotalSupply() {
        return this.tokenRef.getTotalSupply()
    }

    balanceOf(holder) {
        return this.tokenRef.balanceOf(holder)
    }

    getHolders() {
        return this.tokenRef.getHolders()
    }

    setMintBehaviour(mintBehaviour) {
        this.tokenRef.setMintBehaviour(mintBehaviour)
    }

    mint(amount, to, assetName) {
        if(!this.assets.find(a => a.name === assetName)) throw Error('Asset not found')
        this.tokenRef.mint(amount, to)
        const assetIndex = this.assetTracking.findIndex(at => at.assetName === assetName)
        if(assetIndex === -1) {
            this.assetTracking.push({assetName, holderName: to, amount})
        } else {
            this.assetTracking[assetIndex].amount += amount
        }
    }

    setTransferBehaviour(transferBehaviour){
        this.tokenRef.setTransferBehaviour(transferBehaviour)
    }

    transfer(amount, from, to, assetName) {
        if(!this.assets.find(a => a.name === assetName)) throw Error('Asset not found')
        
        const assetFromIndex = this.assetTracking.findIndex(at => at.assetName === assetName)
        if(assetFromIndex === -1 || this.assetTracking[assetFromIndex] < amount) throw 'Sender does not have enough funds'
        this.assetTracking[assetFromIndex].amount -= amount
        
        
        const assetToIndex = this.assetTracking.findIndex(at => at.assetName === assetName)
        if(assetToIndex === -1) {
            this.assetTracking.push({assetName, holderName: to, amount})
        } else {
            this.assetTracking[assetToIndex].amount += amount
        }

        this.tokenRef.transfer(amount, from, to)
    }

    getAssets() {
        return this.assets
    }

}

module.exports = WithCollateralAssets