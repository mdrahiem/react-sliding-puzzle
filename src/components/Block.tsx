import { IBlockProps } from "../types";

function Block({ blockId, handleBlockClick, totalBlocks }: IBlockProps) {
  const isEmptyBlock = blockId === totalBlocks - 1;
  return (
    <div className="puzzle-block" onClick={(e) => handleBlockClick(e, blockId)}>
      {!isEmptyBlock ? blockId + 1 : ""}
    </div>
  );
}

export default Block;
