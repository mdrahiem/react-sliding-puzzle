interface IBlockProps {
  index: number;
  blockId: number;
  handleClick: (index: number) => void;
  totalBlocks: number;
}
function Block({ index, blockId, handleClick, totalBlocks }: IBlockProps) {
  return (
    <div className="puzzle-block" onClick={() => handleClick(blockId)}>
      {blockId !== totalBlocks ? blockId : ""}
    </div>
  );
}

export default Block;
