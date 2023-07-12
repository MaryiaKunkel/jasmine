describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
    });
  
    it ('should increment paymentId by 1', function(){
        billAmtInput.value='10';
        tipAmtInput.value='2';
        submitPaymentInfo();
        expect(paymentId).toEqual(1);
    });

    it ('should return correct tipPercent when billAmt and tipAmt are greater than 0', function() {
        billAmtInput.value='10';
        tipAmtInput.value='2';
        const curPayment = createCurPayment();
        expect(curPayment.tipPercent).toEqual(20);
    });

    it ('should append a new row with payment details to the table', function(){
        const curPayment = {
            billAmt: 10,
            tipAmt: 2,
            tipPercent: 20
        };
        appendPaymentTable(curPayment);
        const newTd = document.querySelectorAll('td');
        // console.log(newTd[0])
        expect(newTd[0].innerText).toEqual('$10');
        expect(newTd[1].innerText).toEqual('$2');
        expect(newTd[2].innerText).toEqual('20%');
    });

    it ('should ', function(){
        const paymentTotal = 100;
        const numberOfPayments = 10;
        const tipPercentAvg = document.querySelector('#summaryTable tbody tr td:nth-child(3)');
        console.log(tipPercentAvg.innerHTML)
        expect(tipPercentAvg.innerHTML).toEqual('10%');
    });
  
    afterEach(function() {

    });
});
  
  
  
  
  
  