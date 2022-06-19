const chai = require('chai')
const expect = chai.expect;

const ERC20 = require('../src/ERC20')
const MaxSupplyMintBehaviour = require('../src/MintBehaviour/MaxSupplyMintBehaviour')
const SimpleMintBehaviour = require('../src/MintBehaviour/SimpleMintBehaviour')


describe('ERC20WithMaxSupply', () => {
    let contract, USERS, ERC20_PROPS, ERC20MaxSupply_PROPS
    
    before(() => {
        ({contract, USERS, ERC20_PROPS, ERC20MaxSupply_PROPS} = makeSut())
    })

    describe('00 - Initial Validation', () => {
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
             it('should have the correct maximum supply', () => {
                expect(contract.mintBehaviour.getMaxSupply()).to.equal(ERC20MaxSupply_PROPS.maxSupply)
             })
        })
    })

    describe('01 - Initial mint', () => {
        describe('Contract', () => {
            describe('mint', () => {
                it('should not allow minting of amount grater than maxSupply', () => {
                    expect(() => contract.mint(ERC20MaxSupply_PROPS.maxSupply + 50, USERS.ALICE)).to.throw('amount would bring total supply over maximum supply')
                })
                it('should allow for minting below maxSupply', () => {
                    contract.mint(ERC20MaxSupply_PROPS.maxSupply, USERS.JAMES)
                })
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

    const ERC20MaxSupply_PROPS = {
        maxSupply: 50
    }

    const contract = new ERC20(ERC20_PROPS.Name, ERC20_PROPS.Symbol)
    contract.setMintBehaviour(new MaxSupplyMintBehaviour(contract, SimpleMintBehaviour, ERC20MaxSupply_PROPS.maxSupply))

    return {USERS, ERC20_PROPS, ERC20MaxSupply_PROPS, contract}
}