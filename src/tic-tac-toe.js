class TicTacToe {
    constructor() {
    	this._field = new Array(3);
    	for(var i = 0; i<3; i++){
    		this._field[i] = new Array(3);
    	}
    	this.k = 0;
    	for(var i = 0; i<3;i++){
    		for(var j = 0; j<3; j++){
    			this._field[i][j] = this.k;
    			this.k++;
    		}
    	}
    	this.currentPlayer = 0;
    	this._countTurns = 0;
    	this._winner = '1';
    }

    getCurrentPlayerSymbol() {
    if(!this.currentPlayer) return 'x';
    else return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
	if(this._field[rowIndex][columnIndex] !== 'x' && this._field[rowIndex][columnIndex] !== 'o' && !this.currentPlayer){this._field[rowIndex][columnIndex] = 'x'; this.currentPlayer = 1; this._countTurns++};
	if(this._field[rowIndex][columnIndex] !== 'x' && this._field[rowIndex][columnIndex] !== 'o' && this.currentPlayer){this._field[rowIndex][columnIndex] = 'o'; this.currentPlayer = 0; this._countTurns++};
	if (this._field[0][0] === this._field[0][1] && this._field[0][1] === this._field[0][2]){ this._winner = this._field[0][0];}
	if (this._field[1][0] === this._field[1][1] && this._field[1][1] === this._field[1][2]){ this._winner = this._field[1][0];}
	if (this._field[2][0] === this._field[2][1] && this._field[2][1] === this._field[2][2]){ this._winner = this._field[2][0]; }
	if (this._field[0][0] === this._field[1][0] && this._field[1][0] === this._field[2][0]){ this._winner = this._field[0][0]; }
	if (this._field[0][1] === this._field[1][1] && this._field[1][1] === this._field[2][1]){ this._winner = this._field[0][1]; }
	if (this._field[0][2] === this._field[1][2] && this._field[1][2] === this._field[2][2]){ this._winner = this._field[0][2]; }
	if (this._field[0][0] === this._field[1][1] && this._field[1][1] === this._field[2][2]){ this._winner = this._field[0][0]; }
	if (this._field[0][2] === this._field[1][1] && this._field[1][1] === this._field[2][0]){ this._winner = this._field[0][2]; } 
    }

    isFinished() {
   	if(this._winner !== '1') return true;
	if(this._countTurns === 9 && this._winner === '1')return true;
	return false;
    }

    getWinner() {
	return this._winner === '1' ? null : this._winner;
    }

    noMoreTurns() {
	return this._countTurns === 9 ? true : false;
    }

    isDraw() {
    if (this._countTurns === 9 && this._winner === '1'){ 
     return true;
    }
    return false;
    }

    getFieldValue(rowIndex, colIndex) {
     return (this._field[rowIndex][colIndex] === 'x' || this._field[rowIndex][colIndex] === 'o') ? this._field[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
