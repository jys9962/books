const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum RawTile {
  AIR,
  FLUX,
  UNBREAKABLE,
  PLAYER,
  STONE,
  FALLING_STONE,
  BOX,
  FALLING_BOX,
  KEY1,
  LOCK1,
  KEY2,
  LOCK2
}

interface Tile {
  isAir(): boolean;

  isStone(): boolean;

  isFallingStone(): boolean;

  isBox(): boolean;

  isFallingBox(): boolean;

  isKey1(): boolean;

  isKey2(): boolean;

  isLock1(): boolean;

  isLock2(): boolean;

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void;

  moveHorizontal(dx: number): void;

  moveVertical(dy: number): void;
}

class Air implements Tile {
  moveVertical(dy: number) {
    moveToTile(playerx, playery + dy);
  }

  moveHorizontal(dx: number): void {
    moveToTile(playerx + dx, playery);
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }


  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
  }
}

class Flux implements Tile {
  moveVertical(dy: number) {
    moveToTile(playerx, playery + dy);
  }

  moveHorizontal(dx: number): void {
    moveToTile(playerx + dx, playery);
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#ccffcc';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class Unbreakable implements Tile {
  moveVertical(dy: number) {
  }

  moveHorizontal(dx: number): void {
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#999999';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }


  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class Player implements Tile {
  moveVertical(dy: number) {
  }

  moveHorizontal(dx: number): void {
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class Stone implements Tile {
  moveVertical(dy: number) {
  }

  moveHorizontal(dx: number): void {
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#0000cc';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }


  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class FallingStone implements Tile {
  moveVertical(dy: number) {
  }

  moveHorizontal(dx: number): void {
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#0000cc';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }


  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class Box implements Tile {
  moveVertical(dy: number) {
  }

  moveHorizontal(dx: number): void {
    if (map[playery][playerx + dx + dx].isAir()
        && map[playery + 1][playerx + dx].isAir()) {
      map[playery][playerx + dx + dx] = this;
      moveToTile(playerx + dx, playery);
    }
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#8b4513';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class FallingBox implements Tile {
  moveVertical(dy: number) {
  }

  moveHorizontal(dx: number): void {
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#0000cc';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }


  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class Key1 implements Tile {
  moveVertical(dy: number) {
    removeLock1();
    moveToTile(playerx, playery + dy);
  }

  moveHorizontal(dx: number): void {
    removeLock1();
    moveToTile(playerx + dx, playery);
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#ffcc00';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }


  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class Lock1 implements Tile {
  moveVertical(dy: number) {
  }

  moveHorizontal(dx: number): void {
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#ffcc00';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }


  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class Key2 implements Tile {
  moveVertical(dy: number) {
    removeLock2();
    moveToTile(playerx, playery + dy);
  }

  moveHorizontal(dx: number): void {
    removeLock2();
    moveToTile(playerx + dx, playery);
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#00ccff';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }


  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

class Lock2 implements Tile {
  moveVertical(dy: number) {
  }

  moveHorizontal(dx: number): void {
  }

  draw(
    g: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    g.fillStyle = '#00ccff';
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

}

let playerx = 1;
let playery = 1;
let rawMap: RawTile[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 0, 2],
  [2, 4, 2, 6, 1, 2, 0, 2],
  [2, 8, 4, 1, 1, 2, 0, 2],
  [2, 4, 1, 1, 1, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];
let map: Tile[][];

let inputs: Input[] = [];

function transformTile(tile: RawTile) {
  switch (tile) {
    case RawTile.AIR:
      return new Air();
    case RawTile.FLUX:
      return new Flux();
    case RawTile.UNBREAKABLE:
      return new Unbreakable();
    case RawTile.PLAYER:
      return new Player();
    case RawTile.STONE:
      return new Stone();
    case RawTile.FALLING_STONE:
      return new FallingStone();
    case RawTile.BOX:
      return new Box();
    case RawTile.FALLING_BOX:
      return new FallingBox();
    case RawTile.KEY1:
      return new Key1();
    case RawTile.LOCK1:
      return new Lock1();
    case RawTile.KEY2:
      return new Key2();
    case RawTile.LOCK2:
      return new Lock2();
  }
}

function transformMap() {
  map = rawMap.map(
    (line) => line.map(
      (tile) => transformTile(tile),
    ),
  );
}

function removeLock1() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock1()) {
        map[y][x] = new Air();
      }
    }
  }
}

function removeLock2() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock2()) {
        map[y][x] = new Air();
      }
    }
  }
}

function moveToTile(
  newx: number,
  newy: number,
) {
  map[playery][playerx] = new Air();
  map[newy][newx] = new Player();
  playerx = newx;
  playery = newy;
}

interface Input {
  handle(): void;
}

class Right implements Input {
  handle() {
    map[playery][playerx + 1].moveHorizontal(1);
  }
}

class Left implements Input {
  handle(): void {
    map[playery][playerx + -1].moveHorizontal(-1);
  }
}

class Up implements Input {
  handle(): void {
    map[playery + 1][playerx].moveVertical(1);
  }
}

class Down implements Input {
  handle(): void {
    map[playery + -1][playerx].moveVertical(-1);
  }
}

function handleInputs() {
  while (inputs.length > 0) {
    let current = inputs.pop();
    current.handle();
  }
}

function updateTile(
  x: number,
  y: number,
) {
  if ((map[y][x].isStone() || map[y][x].isFallingStone())
      && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingStone();
    map[y][x] = new Air();
  } else if ((map[y][x].isBox() || map[y][x].isFallingBox())
             && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingStone();
    map[y][x] = new Air();
  } else if (map[y][x].isFallingStone()) {
    map[y][x] = new Stone();
  } else if (map[y][x].isFallingBox()) {
    map[y][x] = new Box();
  }
}

function updateMap() {
  for (let y = map.length - 1; y >= 0; y--) {
    for (let x = 0; x < map[y].length; x++) {
      updateTile(x, y);
    }
  }
}

function update() {
  handleInputs();
  updateMap();
}

function drawMap(g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      let tile = map[y][x];
      tile.draw(g, x, y);
    }
  }
}

function drawPlayer(g: CanvasRenderingContext2D) {
  g.fillStyle = '#ff0000';
  g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function createGraphics() {
  let canvas = document.getElementById('GameCanvas') as HTMLCanvasElement;
  let g = canvas.getContext('2d');
  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function draw() {
  let g = createGraphics();
  drawMap(g);
  drawPlayer(g);
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  transformMap();
  gameLoop();
};

const LEFT_KEY = 'ArrowLeft';
const UP_KEY = 'ArrowUp';
const RIGHT_KEY = 'ArrowRight';
const DOWN_KEY = 'ArrowDown';
window.addEventListener('keydown', e => {
  if (e.key === LEFT_KEY || e.key === 'a') {
    inputs.push(new Left());
  } else if (e.key === UP_KEY || e.key === 'w') {
    inputs.push(new Up());
  } else if (e.key === RIGHT_KEY || e.key === 'd') {
    inputs.push(new Right());
  } else if (e.key === DOWN_KEY || e.key === 's') {
    inputs.push(new Down());
  }
});

