var MenuDetail = {
    Height: 50,
    Width: 100,
    Padding: 25,
    Style: {
        Font: "Segio UI",
        Size: 13
    },
    Title: "Yahoo"
};

var menu = {
    width: 300,
    height: 200,
    title: "Menu"
};

var multiplyNumeric = function(MenuObj) {
    for (key in MenuObj) {
        if (isNumeric(MenuObj[key]))
        {
            MenuObj[key] = MenuObj[key] * 2;
        }
    }
}

var isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}


//var ladder = {
//    step: 0,
//    up: function () {
//        this.step++
//        //return this
//    },
//    down: function () {
//        this.step--
//        return this
//    },
//    showStep: function () {
//        alert(this.step)
//        return this
//    }
//};

//ladder.up().up().up().up().up().up().up().up().down().up().down().showStep();

function Info(val) {
    this.name = val;
    this.setName = function (val) {
        this.name = val;
    }
    this.getName = function () {
        alert(this.name);
    }
    return {
        Name: this.name,
        GetName: this.getName,
        SetName: this.setName
    }
};


var i = new Info("uzair");
alert(i.Name);
i.SetName("ali");
i.GetName();

//alert(Info.Name);
//Info.getName();
//Info.displayName();

//multiplyNumeric (menu);

//for (key in menu) {
//    var c = menu[key];
//    //alert(c);
//}

//alert("end");
//menu.width = 500;
//alert(menu.width);​​​​​​​​​​​​

var a = 'Uzair';

var func = function () {
}
