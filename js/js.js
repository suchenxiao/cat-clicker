$(function(){
	var ViewModel = function() {
		this.clickCount = ko.observable(0);
		this.name = ko.observable('Tabby');
		this.imgSrc = ko.observable('images/cat_1.jpg');
		
		this.incrementCounter = function() {
			this.clickCount(this.clickCount()+1);
		};

		this.level = ko.computed(function(){
			if(this.clickCount()<=5) return 'LEVEL-1';
			else if(this.clickCount()<=10) return 'LEVEL-2';
			else if(this.clickCount()<=15) return 'LEVEL-3';
			else if(this.clickCount()<=20) return 'LEVEL-4';
			else return 'LEVEL-5';
		}, this);
	}
	
	ko.applyBindings(new ViewModel());
});