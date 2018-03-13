$(function(){
	var initialCats = [
		{
			clickCount : 0,
			name : 'Tabby',
			imgSrc : 'images/cat_1.jpg',
			nickname : ['Jan', 'Feb', 'Mar', 'etc']
		},
		{
			clickCount : 0,
			name : 'Tiger',
			imgSrc : 'images/cat_2.jpg',
			nickname : ['Feb']
		},
		{
			clickCount : 0,
			name : 'Scaredy',
			imgSrc : 'images/cat_3.jpg',
			nickname : ['Mar']
		},
		{
			clickCount : 0,
			name : 'Cad',
			imgSrc : 'images/cat_4.jpg',
			nickname : ['etc']
		},
		{
			clickCount : 0,
			name : 'Esrt',
			imgSrc : 'images/cat_5.jpg',
			nickname : ['zzz']
		}
	];
	var Cat = function(data) {
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

	};
	
	ko.applyBindings(new ViewModel());
});