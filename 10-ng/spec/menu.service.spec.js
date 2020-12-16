describe('MenuService', function () {

  var menuservice;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });
  it('itemFound should be set to false because its not in the menu', function() {
    $httpBackend.whenGET(ApiPath+"/menu_items/trash.json").respond({'data': 'error'});
    menuservice.getItemByShortName("trash").then(function(response) {
      expect(response.data).toEqual({'data': 'error'});
    });
    $httpBackend.flush();
  });

  it('itemFound should be set to true because the item was in the menu', function() {
    $httpBackend.whenGET(ApiPath+"/menu_items/A2.json").respond({"id":2,"short_name":"A2","name":"Egg Drop Soup","description":"chicken broth with egg drop","price_small":2.25,"price_large":4.5,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2020-12-11T04:45:05.777Z","updated_at":"2020-12-11T04:45:05.777Z","category_short_name":"A","image_present":true});
    menuservice.getItemByShortName("A2").then(function(response) {
      expect(response.data).toEqual({"id":2,"short_name":"A2","name":"Egg Drop Soup","description":"chicken broth with egg drop","price_small":2.25,"price_large":4.5,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2020-12-11T04:45:05.777Z","updated_at":"2020-12-11T04:45:05.777Z","category_short_name":"A","image_present":true});
    });
    $httpBackend.flush();
  });

})();