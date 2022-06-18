const chai = require('chai')
const expect = chai.expect;

const ERC20 = require('../src/ERC20')

describe('ERC20 Token', () => {
    let contract, USERS, ERC20_PROPS
    before(() => {
        ({contract, USERS, ERC20_PROPS} = makeSut())
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
        })
        describe('James', () => {
            it('should start with 0 balance', () => {
                expect(contract.balanceOf(USERS.JAMES)).to.equal(0)
            })
        })
     })

     describe('01 - First minting', () => {
        describe('Contract', () => {
            it('should not mint a negative amount', () => {
                expect(() => contract.mint(-400, USERS.ALICE)).to.throw('Must mint a positive amount')
            })
            it('should mint 100 tokens to James', () => {
                contract.mint(100, USERS.JAMES)
                expect(contract.balanceOf(USERS.JAMES)).to.equal(100)
            })
        })
     })

     describe('02 - First transfer', () => {
        describe('Alice', () => {
            it('should have 0 tokens', () => {
                expect(contract.balanceOf(USERS.ALICE)).to.equal(0)
            })
        })
        describe('Contract', () => {
            it('should not transfer negative tokens', () => {
                expect(()=> contract.transfer(-100, USERS.JAMES, USERS.ALICE)).to.throw('Must attempt to transfer a positive amount')
            })
            it('should transfer 80 tokens from James to Alice', () => {
                contract.transfer(80, USERS.JAMES, USERS.ALICE)
                expect(contract.balanceOf(USERS.ALICE)).to.equal(80)
                expect(contract.balanceOf(USERS.JAMES)).to.equal(20)
            })
        })
     })

     describe('03 - List Holders', () => {
        describe('Contract', () => {
            describe('getHolders', () => {
                it('should return the list of current Holders', () => {
                    expect(contract.getHolders()).to.eql([USERS.JAMES, USERS.ALICE])
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

    const contract = new ERC20(ERC20_PROPS.Name, ERC20_PROPS.Symbol)

    return {USERS, ERC20_PROPS, contract}
}