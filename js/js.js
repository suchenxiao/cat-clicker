$(function(){
	var Cat = function() {
		this.clickCount = ko.observable(0);
		this.name = ko.observable('Tabby');
		this.imgSrc = ko.observable('images/cat_1.jpg');

		this.level = ko.computed(function(){
			if(this.clickCount()<=5) return 'LEVEL-1';
			else if(this.clickCount()<=10) return 'LEVEL-2';
			else if(this.clickCount()<=15) return 'LEVEL-3';
			else if(this.clickCount()<=20) return 'LEVEL-4';
			else return 'LEVEL-5';
		}, this);

		this.nickname = ko.observableArray(['Jan', 'Feb', 'Mar', 'etc']);
	};

	var ViewModel = function() {
		this.currentCat = ko.observable(new Cat());
		this.incrementCounter = function() {
			this.currentCat().clickCount(this.currentCat().	clickCount()+1);
		};

	};
	
	ko.applyBindings(new ViewModel());
});