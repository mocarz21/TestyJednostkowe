import { render, screen, cleanup } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect'; //co ja tu importuję
import { Exception } from 'sass';

  describe('Component ResultBox', () => {

    const testCases = [
        { amount: 100, resultPlnToUsd: 'PLN 100.00 = $28.57', resultUsdToPln:'$100.00 = PLN 350.00', resultPlntoPln: 'PLN 100.00 = PLN 100.00', resultUsdtoUsd:'$100.00 = $100.00' },
        { amount: 20, resultPlnToUsd: 'PLN 20.00 = $5.71', resultUsdToPln:'$20.00 = PLN 70.00', resultPlntoPln: 'PLN 20.00 = PLN 20.00', resultUsdtoUsd:'$20.00 = $20.00'},
        { amount: 200, resultPlnToUsd: 'PLN 200.00 = $57.14', resultUsdToPln:'$200.00 = PLN 700.00', resultPlntoPln: 'PLN 200.00 = PLN 200.00', resultUsdtoUsd:'$200.00 = $200.00'},
        { amount: 345, resultPlnToUsd: 'PLN 345.00 = $98.57', resultUsdToPln:'$345.00 = PLN 1,207.50', resultPlntoPln: 'PLN 345.00 = PLN 345.00', resultUsdtoUsd:'$345.00 = $345.00'},
      ];

    it('should render', () =>{
        render(<ResultBox from="PLN" to="USD" amount={100}/>)
    })

    for(const objTest of testCases){
        it('should render proper info about conversion when PLN -> USD',()=>{
            render(<ResultBox from="PLN" to="USD" amount={objTest.amount} />)

            const amountField = screen.getByTestId('amount');
            expect(amountField).toHaveTextContent(objTest.resultPlnToUsd)
        })
        cleanup()
    } 
    for(const objTestTwo of testCases){
        it('should render proper info about conversion when USD ->PLN',()=>{
            render(<ResultBox from="USD" to="PLN" amount={objTestTwo.amount}/>)
            
            const amountB = screen.getByTestId('amount');
            expect(amountB).toHaveTextContent(objTestTwo.resultUsdToPln) 
        })
        cleanup()
    }
    for(const objTestThere of testCases){
        it('should render proper info about conversion when PLN ->PLN',()=>{
            render(<ResultBox from="PLN" to="PLN" amount={objTestThere.amount}/>)

            const amountC =screen.getByTestId('amount')
            expect(amountC).toHaveTextContent(objTestThere.resultPlntoPln)
        })
        cleanup()
    }
    for(const objTestFour of testCases){
        it('should render proper info about conversion when USD ->USD',()=>{
            render(<ResultBox from="USD" to="USD" amount={objTestFour.amount}/>)

            const amountD = screen.getByTestId('amount')
            expect(amountD).toHaveTextContent(objTestFour.resultUsdtoUsd)
        })
        cleanup()
    }    
    it('should give info about wrong value if input < 0', ()=>{
        render(<ResultBox from="USD" to="USD" amount={-100}/>)

        const amountD = screen.getByTestId('amount')
        expect(amountD).toHaveTextContent('wrong value')
    })
   
});