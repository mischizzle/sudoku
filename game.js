var grid = {

  gridConfig: {
    row: 9,
    col: 9,
    grid: []
  },

  start: function() {
    this.createGrid();
  },

  createGrid: function() {
    var cellAnswer;
    for(var i=0; i<this.gridConfig.row; i++) {
      this.gridConfig.grid[i] = [];
      for(var j=0; j<this.gridConfig.col; j++) {
        cellAnswer = this.checkNum(i, j);
        this.gridConfig.grid[i][j] = cellAnswer;
      }
    }
  },

  checkNum: function(row, column) {
    var randomNumber = this.getRand();
    if(this.checkRow(row, randomNumber) && this.checkBlock(row, column, randomNumber)) {
      return randomNumber;
    } else {
      return this.checkNum(row, column);
    }
  },

  checkRow: function(row, n) {
    for(var i=0; i<this.gridConfig.grid[row].length; i++){
      if(this.gridConfig.grid[row][i] === n) {
        return false;
      }
    }
    return true;
  },

  checkBlock: function(row, col, n){
    var blockRow = Math.floor(row/(Math.sqrt(this.gridConfig.row)));
    var blockCol = Math.floor(col/(Math.sqrt(this.gridConfig.col)));
    for(var i=blockRow*3; i<3; i++){
      for(var j=blockCol*3; j<3; j++){
        if(typeof this.gridConfig.grid[i] !== 'undefined' && this.gridConfig.grid[i][j] === n) {
          return false;
        }
      }
    }
    return true;
  },

  getGrid: function(i, j) {
    return this.gridConfig.grid[i][j];
  },

  getRand: function() {
    var random = 1 + Math.floor(Math.random() * 9);
    return random
  }
};