
import Form from '../../src/Form'
const runWax = require('@wally-ax/wax-dev');
let violations;
describe('Form.cy.jsx', () => {
  
  let waxConfig;
  beforeEach(() => {
    cy.fixture('waxConfig.json').then((config) => {
      waxConfig = config;
    });
  });

  it('should have no accessibility violations', () => {
    cy.mount(<Form />);
    cy.get('body').then(async ($body) => {
      const ele = $body.html();
      
      console.log('ele',ele)
      violations = await runWax(ele, waxConfig);
      console.log('violat', violations)
      expect(violations).to.have.lengthOf(0);
    });
  });
  it('swe',()=>{
    cy.writeFile('violatio.json', violations)
  })

})

















