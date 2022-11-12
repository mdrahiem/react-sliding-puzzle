function getShuffledBlocks(blocks: number) {
  const blocksArray = [...Array(blocks).keys()];
  const shuffledBlocks = blocksArray
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledBlocks;
}

export { getShuffledBlocks };
