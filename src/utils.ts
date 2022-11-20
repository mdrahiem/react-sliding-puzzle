function getShuffledBlocks(blocks: number) {
  const blocksArray = [...Array(blocks * blocks).keys()];
  const shuffledBlocks = blocksArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledBlocks;
}

function getSwappedBlocks(
  currentBlock: number,
  blocksArray: number[]
): number[] {
  const currentBlockPosition = blocksArray.indexOf(currentBlock);
  const emptyBlockPosition = blocksArray.indexOf(blocksArray.length - 1);
  blocksArray[currentBlockPosition] = blocksArray.splice(
    emptyBlockPosition,
    1,
    blocksArray[currentBlockPosition]
  )[0];
  return blocksArray;
}

function getBlockCoordinates(index: number, numberOfBlocks: number) {
  return {
    row: Math.floor(index / numberOfBlocks),
    col: index % numberOfBlocks,
  };
}

function checkSwappable(
  currentBlock: number,
  blocksArray: number[],
  numberOfBlocks: number
): boolean {
  const currentBlockPosition = blocksArray.indexOf(currentBlock);
  const emptyBlockPosition = blocksArray.indexOf(blocksArray.length - 1);
  const { row: currentBlockRow, col: currentBlockCol } = getBlockCoordinates(
    currentBlockPosition,
    numberOfBlocks
  );
  const { row: emptyBlockRow, col: emptyBlockCol } = getBlockCoordinates(
    emptyBlockPosition,
    numberOfBlocks
  );
  return (
    Math.abs(currentBlockRow - emptyBlockRow) +
      Math.abs(currentBlockCol - emptyBlockCol) ===
    1
  );
}

function checkIsWon(blocksArray: number[]): boolean {
  const winningBlocksArray = [...blocksArray].sort((a, b) => a - b);
  return blocksArray.every(
    (block, index) => block === winningBlocksArray[index]
  );
}

function getRandomImage(images: string[]): string {
  return images[Math.floor(Math.random() * 4)];
}

export {
  getShuffledBlocks,
  getSwappedBlocks,
  checkSwappable,
  checkIsWon,
  getRandomImage,
};
