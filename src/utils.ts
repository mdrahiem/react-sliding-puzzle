function getShuffledBlocks(blocks: number) {
  const blocksArray = [...Array(blocks).keys()];
  const shuffledBlocks = blocksArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledBlocks;
}

function swapBlocks(currentBlock: number, blocksArray: number[]): number[] {
  const currentBlockPosition = blocksArray.indexOf(currentBlock);
  const emptyBlockPosition = blocksArray.indexOf(blocksArray.length - 1);
  blocksArray[currentBlockPosition] = blocksArray.splice(
    emptyBlockPosition,
    1,
    blocksArray[currentBlockPosition]
  )[0];
  return blocksArray;
}

export function getBlockCoordinates(index: number) {
  return {
    row: Math.floor(index / 3),
    col: index % 3,
  };
}

function checkSwappable(currentBlock: number, blocksArray: number[]): boolean {
  const currentBlockPosition = blocksArray.indexOf(currentBlock);
  const emptyBlockPosition = blocksArray.indexOf(blocksArray.length - 1);
  const { row: currentBlockRow, col: currentBlockCol } =
    getBlockCoordinates(currentBlockPosition);
  const { row: emptyBlockRow, col: emptyBlockCol } =
    getBlockCoordinates(emptyBlockPosition);
  return (
    Math.abs(currentBlockRow - emptyBlockRow) +
      Math.abs(currentBlockCol - emptyBlockCol) ===
    1
  );
}

export { getShuffledBlocks, swapBlocks, checkSwappable };
