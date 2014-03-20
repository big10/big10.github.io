var LABELS = new Array();
LABELS[2] = "A"
LABELS[4] = "B"
LABELS[8] = "C"
LABELS[16] = "D"
LABELS[32] = "E"
LABELS[64] = "F"
LABELS[128] = "G"
LABELS[256] = "H"
LABELS[512] = "I"
LABELS[1024] = "J"
LABELS[2048] = "K"

function Tile(position, value, label) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.label            = label || "A"

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};