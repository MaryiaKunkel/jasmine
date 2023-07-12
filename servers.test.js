describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('shouldn not run if the serverName is empty', function(){
    submitServerInfo();
    expect(Object.keys(allServers).length).not.toEqual(0);
  });

  it('should have a current servers name in the table', function(){

    // act
    updateServerTable();

    // assert
    let cell=document.querySelector('td');
    console.log(cell.innerText)
    expect(cell.innerText).toEqual('Alice');
  });

  afterEach(function() {
    serverNameInput.value = '';
  });
});





