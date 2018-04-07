

var matrix = [
    [0, 0, 1, 0, 3, 1, 7, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0],
    [0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0],
    [1, 5, 0, 6, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3],


];

var side = 120;
var exanak = "Winter"
var grassArr = [];
var xotaker = [];
var b = 1;
var q = 1;
var gish = [];
var mah = []
var sah = []
var ver = []
myVar = setInterval(function () {
    if (exanak == "Winter") {
        exanak = "Spring"
    }
    else if (exanak == "Spring") {
        exanak = "Summer"
    }
    else if (exanak == "Summer") {
        exanak = "Autumn"
    }
    else if (exanak == "Autumn") {
        exanak = "Winter"
    }

}, 4000);


function setup() {

    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#ggsghdgs")


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));
            }
            if (matrix[y][x] == 2) {
                if (Math.random() < 0.5) {
                    xotaker.push(new Xotaker(x, y, 2));
                }
                else {
                    xotaker.push(new Xotaker(x, y, 2.5));
                }
            }
            else if (matrix[y][x] == 3) {
                if (Math.random() < 0.5) {
                    gish.push(new Gishatich(x, y, 3));
                }
                else {
                    gish.push(new Gishatich(x, y, 3.5));
                }
            }
            
            else if (matrix[y][x] == 4) {
                if (Math.random() < 0.5) {
                    mah.push(new Mah(x, y, 4));
                }
                else {
                    mah.push(new Mah(x, y, 4.5));
                }
            }
            else if (matrix[y][x] == 5) {
                sah.push(new Sarsap(x, y, 5));
            }
            else if (matrix[y][x] == 6) {
                ver.push(new Verg(x, y, 6));
            }


        }
    }

}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (exanak == "Winter")
                    fill("white")
                if (exanak == "Summer")
                    fill("green")
                if (exanak == "Spring")
                    fill("green")
                if (exanak == "Autumn")
                    fill('orange')
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 2.5) {
                fill("pink");
            }
            else if (matrix[y][x] == 3.5) {
                fill(44,56,79);
            }
            else if (matrix[y][x] == 3) {
                fill("black");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 4.5) {
                fill(14, 98, 81);
            }
            else if (matrix[y][x] == 5) {
                fill("red");
            }
            else if (matrix[y][x] == 6) {
                fill("purple");
            }

            rect(x * side, y * side, side, side);
        }
    }
    myVar = setInterval(function () {
        b++
        if (b > 4) {
            b == 0;
        }
    }, 16000)
    if (b >= 4) {
        createCanvas(matrix[0].length * side, matrix.length * side);
        background("Green");
        textSize(120);
        text("4 Season End", 300, 350);
        fill("yellow")
    }
        textSize(32);
        text("Press A", 1200, 50);
        fill("black")
    
    
    for (var i in grassArr) {
        grassArr[i].bazmanal();


    }
    for (var i in xotaker) {
        xotaker[i].bazmanal();
    }

    //     if (xotaker[i].utel()) {
    //     }
    //     else {
    //         xotaker[i].sharjvel();

    //     }
    //     xotaker[i].mahanal();
    // }

    for (var i in gish) {
        gish[i].bazmanal()

        if (gish[i].utel()) {
        }
        else {
            gish[i].sharjvel();

        }
        gish[i].mahanal()
    }

    for (var i in mah) {
        mah[i].bazmanal()

        if (mah[i].utel()) {
        }
        else {
            mah[i].sharjvel();

        }
        mah[i].mahanal()
    }
    for (var i in sah) {


        if (sah[i].utel()) {
        }
        else {
            sah[i].sharjvel();

        }
        sah[i].mahanal()
    }
    for (var i in ver) {


        if (ver[i].utel()) {
        }
        else {
            ver[i].sharjvel();

        }
        ver[i].mahanal()
    }

    fill('black');
    textSize(32);
    if (exanak == "Summer") {
        text(exanak, 20, 50)
    }
    if (exanak == "Winter") {
        text(exanak, 20, 50)
    }
    if (exanak == "Spring") {
        text(exanak, 20, 50)
    }
    if (exanak == "Autumn") {
        text(exanak, 20, 50)
    }
    


}
function keyTyped() {
    if (key === 'a') {
        grassArr = []
    }
}


