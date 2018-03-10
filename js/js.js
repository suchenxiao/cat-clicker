$(function(){

/* ======= Model ======= */

var model = {
    currentCat: null,
    cats: []
};


/* ======= Octopus ======= */

var octopus = {
	// 初始化
	init : function() {
		// 写入数据
		for( var i=0; i<5; i++) {
			model.cats.push({
				clickCount : 0,
            	name : ('cat ' + (i+1)),
            	imgSrc : ('images/cat_' + (i+1) + '.jpg')
			});	
		}

		model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
		adminView.init();
	},

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    addCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
		adminView.render();
    },
	
	setCatAttr: function(name, img, counter){
		model.currentCat.name = name;
		model.currentCat.imgSrc = img;
		model.currentCat.clickCount = counter;
		catView.render();
		catListView.render();
	}

};


/* ======= View ======= */

var catView = {
	init : function() {
		this.$catElem = $('.con');
		this.$catName = $('<p></p>').addClass('name');
		this.$catCounter = $('<p></p>').addClass('counter');
		this.$catPic = $('<img>');

        this.$catPic.on('click', function() {
            octopus.addCounter();
        });
		this.$catElem.append(this.$catName, this.$catCounter, this.$catPic);
		
		this.render();
	},
	
	render : function() {
		var currentCat = octopus.getCurrentCat();
		this.$catName.text(currentCat.name);
		this.$catCounter.text(currentCat.clickCount);
		this.$catPic.attr('src', currentCat.imgSrc);	
	}
};

var catListView = {
	
	init : function() {
		this.$catList = $('.nav');
		this.render();
	},
	
	render : function() {
		var cats = octopus.getCats();
		this.$catList.empty();
		for( var i=0; i<cats.length; i++) {
			var $catLi = $('<li></li>');
			$catLi.text(cats[i].name);
			$catLi.on('click', (function(catCopy) {
				return function(){
				    octopus.setCurrentCat(catCopy);
                    catView.render();
					adminView.render();
				}
			})(cats[i]));
			this.$catList.append($catLi);
		}
	}
};

var	adminView = {
	init: function() {
		this.$admin = $('.admin');
		this.menu = false;
		this.$name = this.$admin.find('[name="name"]:input');
		this.$img = this.$admin.find('[name="img"]:input');
		this.$counter = this.$admin.find('[name="counter"]:input');
		
		this.$admin.addClass('btn');

		this.$admin.find('h3').on('click',function(){
			if(!adminView.menu){ 
				adminView.showMenu();
			}
		});
		
		this.$admin.find('.save').on('click',function(){
			adminView.submitMenu();
			adminView.hideMenu();
		});
		
		this.$admin.find('.cancle').on('click',function(){ 
			adminView.hideMenu();	
		});
		
		this.render();
    },
	
	render: function() {
		var currentCat = octopus.getCurrentCat();
		this.$name.val(currentCat.name);
		this.$img.val(currentCat.imgSrc);
		this.$counter.val(currentCat.clickCount);
	},
	
	showMenu: function(){
		this.$admin.removeClass('btn');
		this.menu = true;
	},
	
	hideMenu : function() {
		this.$admin.addClass('btn');
		this.menu = false;
	},
	
	submitMenu : function() {
		octopus.setCatAttr(this.$name.val(), this.$img.val(), this.$counter.val());
	}
};

// make it go!
octopus.init();

});
