const chai = require('chai')
const expect = chai.expect;

const ERC20 = require('../src/ERC20')
const SimpleMintBehaviour = require('../src/MintBehaviour/SimpleMintBehaviour')
const SimpleTransferBehaviour = require('../src/TransferBehaviour/SimpleTransferBehaviour')
const WithCollateralAssets = require('../src/WithCollateralAssets/WithCollateralAssets')
const CollateralAsset = require('../src/WithCollateralAssets/CollateralAsset')

describe('ERC20 Token With Collateral Assets', () => {
    let contract, USERS, ERC20_PROPS, assets
    before(() => {
        ({contract, USERS, ERC20_PROPS, assets} = makeSut())
    });
    describe('00 - Initial validations ', () => {
        describe('Contract', () => {
            it('should have the correct name', () =>{
                expect(contract.getName()).to.equal(ERC20_PROPS.Name)
             })
             it('should have the correct symbol', () =>{
                 expect(contract.getSymbol()).to.equal(ERC20_PROPS.Symbol)
             })

             it('should not have any holders', () => {
                expect(contract.getHolders()).to.eql([])
             })

             it('should have a totalSupply of 0', () => {
                expect(contract.getTotalSupply()).to.equal(0)
             })
             it('should have one initial Asset', () => {
                expect(contract.getAssets()).to.eql(assets)
             })
        })
        describe('James', () => {
            it('should start with 0 balance', () => {
                expect(contract.balanceOf(USERS.JAMES)).to.equal(0)
            })
        })
     })
})

function makeSut() {
    const USERS = {
        JAMES: 'James',
        ALICE: 'Alice'
    }
    const ERC20_PROPS = {
        Name: 'TestContract',
        Symbol: 'TstTkn'
    }

    const assets = [new CollateralAsset('AssetOne', 50)]
    

    const contract = new WithCollateralAssets(new ERC20(ERC20_PROPS.Name, ERC20_PROPS.Symbol), assets)
    contract.setMintBehaviour(new SimpleMintBehaviour(contract))
    contract.setTransferBehaviour(new SimpleTransferBehaviour(contract))

    return {USERS, ERC20_PROPS, contract, assets}
}