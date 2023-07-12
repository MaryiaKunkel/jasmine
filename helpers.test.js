describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
    });
  
    it ('should calculate the sum of payment type', function(){
        allPayments = {
            payment1: { billAmt: 10, tipAmt: 2 },
            payment2: { billAmt: 20, tipAmt: 4 },
            payment3: { billAmt: 30, tipAmt: 6 }
          };

          let tipTotal = sumPaymentTotal('tipAmt');

          expect(tipTotal).toEqual(12);
    });

    it ('should convert the bill and tip amount into a tip percent', function(){
        const result = calculateTipPercent(10, 2);
        console.log(result)
        expect(result).toEqual(20);
    });

    it ('should append a newly created td element from the value', function(){
        // create a tr
        const tr = document.createElement('tr');
        // define the value
        const value = 'jhgf';
        // run the function
        appendTd(tr, value);
        // test if tr had the value of td
        expect(tr.querySelector('td').innerText).toEqual('jhgf');
    });
  
    afterEach(function() {

    });
});
  
  
  
  
  
  