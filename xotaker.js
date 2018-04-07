class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    bazmanal() {

        if (this.energy >= 6) {
            var rin = Math.round(random(1));
            var norVandak = random(this.yntrelVandak(rin));
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                    var norXotaker = new Xotaker(x, y);

                    xotaker.push(norXotaker);
                    matrix[y][x] = 2;
                    matrix[y][x] = 2.5;
                    this.energy = 2;
                }
            }
        }
    }


}

