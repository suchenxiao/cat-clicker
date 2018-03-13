$(function(){
	var ViewModel = function() {
		this.clickCount = ko.observable(0);
		this.name = ko.observable('Tabby');
		this.imgSrc = ko.observable('images/cat_1.jpg');
		
		this.incrementCounter = function() {
			this.clickCount(this.clickCount()+1);
		};
	}
	
	ko.applyBindings(new ViewModel());
});