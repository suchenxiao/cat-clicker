$(function(){
	var initialCats = [
		{
			index : 0,
			clickCount : 0,
			name : 'Tabby',
			imgSrc : 'images/cat_1.jpg',
			nickname : ['Jan', 'Feb', 'Mar', 'etc']
		},
		{
			index : 1,
			clickCount : 0,
			name : 'Tiger',
			imgSrc : 'images/cat_2.jpg',
			nickname : ['Feb']
		},
		{
			index : 2,
			clickCount : 0,
			name : 'Scaredy',
			imgSrc : 'images/cat_3.jpg',
			nickname : ['Mar']
		},
		{
			index : 3,
			clickCount : 0,
			name : 'Cad',
			imgSrc : 'images/cat_4.jpg',
			nickname : ['etc']
		},
		{
			index : 4,
			clickCount : 0,
			name : 'Esrt',
			imgSrc : 'images/cat_5.jpg',
			nickname : ['zzz']
		}
	];
	var Cat = function(data) {
		//this.index = data.index;
		this.clickCount = ko.observable(data.clickCount);
		this.name = ko.observable(data.name);
		this.imgSrc = ko.observable(data.imgSrc);

		this.level = ko.computed(function(){
			if(this.clickCount()<=5) return 'LEVEL-1';
			else if(this.clickCount()<=10) return 'LEVEL-2';
			else if(this.clickCount()<=15) return 'LEVEL-3';
			else if(this.clickCount()<=20) return 'LEVEL-4';
			else return 'LEVEL-5';
		}, this);

		this.nickname = ko.observableArray(data.nickname);
	};

	var ViewModel = function() {
		var self = this;
		this.catList = ko.observableArray([]);
		initialCats.forEach(function(catItem){
			self.catList.push(new Cat(catItem));			
		});
		this.currentCat = ko.observable(this.catList()[0]);
		this.incrementCounter = function() {
			self.currentCat().clickCount(self.currentCat().clickCount()+1);
		};	
		this.setCat = function(clickedCat) {
			//self.currentCat(self.catList()[this.index]);
			self.currentCat(clickedCat);
		};

	};
	
	ko.applyBindings(new ViewModel());
});