/**
 * Created by vali on 2017/08/10.
 */
'use strict';

angular.module('backOfficeApp', ['ngAnimate', 'ui.bootstrap'])
  
  .controller('backOfficeCtrl', ['$scope', '$uibModal', function($scope, $uibModal){
    
    //--------- HELPER FUNCTIONS TO GENERATE DATA ---------//
    var randomNumber = function(numOfChars){
      return Math.floor(Math.random()*(Math.pow(10,numOfChars)-Math.pow(10,numOfChars-1)+1)+Math.pow(10,numOfChars-1));
    };
    
    var randomDate = function() {
      var start = new Date(2012, 1, 1);
      var end = Date.now();
      var randDate = new Date(+start + Math.random() * (end - start));
      return randDate.toLocaleDateString("en-GB") + ', ' + randDate.toISOString().slice(11,16);
    };
        
    var malename = [
      "Allen","Bob","Carlton",
      "David","Ernie","Foster",
      "George","Howard","Ian",
      "Jeffery","Kenneth","Lawrence",
      "Michael","Nathen","Orson",
      "Peter","Quinten","Reginald",
      "Stephen","Thomas","Morris",
      "Victor","Walter","Xavier",
      "Charles","Anthony","Gordon",
      "Percy","Conrad","Quincey",
      "Armand","Jamal","Andrew",
      "Matthew","Mark","Gerald"
    ];
    var femalename = [
      "Alice","Bonnie","Cassie",
      "Donna","Ethel","Grace",
      "Heather","Jan","Katherine",
      "Julie","Marcia","Patricia",
      "Mabel","Jennifer","Dorthey",
      "Mary Ellen","Jacki","Jean",
      "Betty","Diane","Annette",
      "Dawn","Jody","Karen",
      "Mary Jane","Shannon","Stephanie",
      "Kathleen","Emily","Tiffany",
      "Angela","Christine","Debbie",
      "Karla","Sandy","Marilyn",
      "Brenda","Hayley","Linda"
    ];
    var lastname = [
      "Adams","Bowden","Conway",
      "Darden","Edwards","Flynn",
      "Gilliam","Holiday","Ingram",
      "Johnson","Kraemer","Hunter",
      "McDonald","Nichols","Pierce",
      "Sawyer","Saunders","Schmidt",
      "Schroeder","Smith","Douglas",
      "Ward","Watson","Williams",
      "Winters","Yeager","Ford",
      "Forman","Dixon","Clark",
      "Churchill","Brown","Blum",
      "Anderson","Black","Cavenaugh",
      "Hampton","Jenkins","Prichard"
    ];
    var r = 0;
    var i = 0;
    var randomName = function(){
      r = Math.floor(Math.random() * lastname.length);
      if(Math.random()>0.5) {
        i = Math.floor(Math.random() * femalename.length);
        return femalename[i] + ' ' + lastname[r];
      }
      else {
        i = Math.floor(Math.random() * malename.length);
        return malename[i] + ' ' + lastname[r];
      }
    };
    
    var randomId = function(){
      var num = Math.random().toString(10).substr(2,19)+''+Math.random().toString(10).substr(2,19);
      return "v::"+num.substring(0,1)+"-"+num.substring(1,14)+"-"+num.substring(14,20);
    };
    var randomBulkId = function(){
      return Math.random().toString(36).substring(2,10)+'-'+
        Math.random().toString(36).substring(2,6)+'-'+
        Math.random().toString(36).substring(2,6)+'-'+
        Math.random().toString(36).substring(2,6)+'-'+
        Math.random().toString(36).substring(2,14);
    };
    //--------- END OF HELPER FUNCTIONS TO GENERATE DATA ---------//
    
    $scope.voucherList = [
      {sid: 0,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Nike', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 1,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Ford', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '£', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 2,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Apple', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '€', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 3,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Levi\'s', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 4,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'IBM', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '£', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 5,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Microsoft', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '€', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 6,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Adidas', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 7,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Rolex', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '£', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 8,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'HP', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '€', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 9,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Calvin Klein', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 10,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Yamaha', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '£', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 11,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Bosch', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '€', pVoucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'},
      {sid: 12,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Nikon', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), prevOwner: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVoucher: true, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Undecided'}
    ];
    
    var copyList = [];
    $scope.chosenVoucher = {};
    $scope.findSeller = {};
    $scope.statusFilter = 'all';
    
    $scope.editVoucher = function(voucher,e){
      e.preventDefault();
      var edited = $uibModal.open({
        templateUrl: 'editVoucher.html',
        controller: 'editVoucherCtrl',
        windowClass: 'editVoucherModal',
        resolve: {
          editedItem: function(){
            return voucher;
          }
        }
      });
      edited.result.then(function(res){
        if ($scope.voucherList.length===1)
          $scope.voucherList[0] = res;
        else $scope.voucherList[res.sid] = res;
      });
    };
    
    $scope.calcDiscount = function(face, discount){
      return Math.ceil(discount*100/face);
    };
    
    $scope.action = function(vouch, val, e){
      e.preventDefault();
      vouch.status=val;
    };
    
    $scope.countStatus = function(status){
      var count = 0;
      $scope.voucherList.forEach(function(item){
        if (item.status === status)
          count++;
      });
      return count;
    };
    
    $scope.onSelect = function(found){
      $scope.findSeller.found = found.seller;
      copyList = angular.copy($scope.voucherList);
      $scope.voucherList = [];
      $scope.voucherList.push(found);
    };
    
    $scope.clearSearch = function(){
      if ($scope.voucherList.length===1){
        $scope.findSeller.found = '';
        copyList[$scope.voucherList[0].sid] = $scope.voucherList[0];
        $scope.voucherList = angular.copy(copyList);
      }
    };
    
  }])
  
  .controller('editVoucherCtrl', ['$scope', '$uibModalInstance', 'editedItem',
    function($scope, $uibModalInstance, editedItem){
    
      // $scope.vouch = angular.copy(editedItem);
      $scope.vouch = editedItem;
      $scope.vouch.status === 'Undecided' ? $scope.vouch.status = 'Active' : $scope.vouch.status;
      
      $scope.approve = function () {
        // $scope.vouch.status === 'Active' ? $scope.vouch.status = 'Undecided' : $scope.vouch.status;
        // $uibModalInstance.close($scope.vouch);
        $scope.vouch.status = 'Approved';
      };
      
      $scope.decline = function () {
        // $uibModalInstance.dismiss();
        $scope.vouch.status = 'Declined';
      };
    }
  ])
  
  //------- Copy to clipboard -------//
  .service('ngCopy', ['$window', function ($window) {
    var body = angular.element($window.document.body);
    var textarea = angular.element('<textarea/>');
    textarea.css({
      position: 'fixed',
      opacity: '0'
    });
    return function (toCopy) {
      textarea.val(toCopy);
      body.append(textarea);
      textarea[0].select();
      try {
        var successful = document.execCommand('copy');
        if (!successful) throw successful;
      } catch (err) {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", toCopy);
      }
      textarea.remove();
    }
  }])
  
  .directive('ngClickCopy', ['ngCopy', function (ngCopy) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function (e) {
          e.preventDefault();
          ngCopy(attrs.ngClickCopy);
        });
      }
    }
  }])
  //------- End of copy to clipboard -------//
  
  .directive('numbersOnly', function(){
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, modelCtrl) {
        modelCtrl.$parsers.push(function (inputValue) {
          // this next if is necessary for when using ng-required on your input.
          // In such cases, when a letter is typed first, this parser will be called
          // again, and the 2nd time, the value will be undefined
          if (inputValue == undefined) return '';
          var transformedInput = inputValue.replace(/[^0-9]/g, '');
          if (transformedInput!=inputValue) {
            modelCtrl.$setViewValue(transformedInput);
            modelCtrl.$render();
          }
          return transformedInput;
        });
      }
    };
  });