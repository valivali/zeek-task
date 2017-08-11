/**
 * Created by vali on 2017/08/10.
 */
'use strict';

angular.module('backOfficeApp', ['ngAnimate'])
  
  .controller('backOfficeCtrl', ['$scope', function($scope){
    
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
    
    $scope.voucherList = [
      {sid: 0,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Nike', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'},
      {sid: 1,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Ford', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'},
      {sid: 2,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Apple', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'},
      {sid: 3,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Levi\'s', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'},
      {sid: 4,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'IBM', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'},
      {sid: 5,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Microsoft', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'},
      {sid: 6,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Adidas', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'},
      {sid: 7,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Rolex', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'},
      {sid: 8,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'HP', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'},
      {sid: 9,brandImg: 'https://unsplash.it/45/45/?random='+randomNumber(2), brandName: 'Nikon', sn: randomNumber(16), cvv: randomNumber(5), fVal: randomNumber(3).toString(), askPrice: -1, discount: randomNumber(2), seller: randomName(), created: randomDate(), id: randomId(), notes: '', currency: '$', pVaucher: false, bID: randomBulkId(), invoice: Math.random().toString(10).substring(2,7), orderNum: randomNumber(3), status: 'Active'}
    ];
    
    $scope.chosenVoucher = {};
    
    $scope.calcDiscount = function(face, discount){
      return Math.ceil(discount*100/face);
    };
    
    $scope.imgError = function(img){
      console.log('err with: ', img);
    };
    
    console.log($scope.voucherList);
  }])