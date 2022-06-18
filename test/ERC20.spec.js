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
        })
     })

})

function makeSut() {

    const ERC20_PROPS = {
        Name: 'TestContract',
        Symbol: 'TstTkn'
    }

    const contract = new ERC20(ERC20_PROPS.Name, ERC20_PROPS.Symbol)

    return {ERC20_PROPS, contract}
}