import React from "react";

interface IBlockProps {
  index: number;
  blockId: number;
  handleBlockClick: (
    event: React.MouseEvent<HTMLDivElement>,
    blockId: number
  ) => void;
  totalBlocks: number;
}
function Block({ index, blockId, handleBlockClick, totalBlocks }: IBlockProps) {
  const isEmptyBlock = blockId === totalBlocks - 1;
  return (
    <div className="puzzle-block" onClick={(e) => handleBlockClick(e, blockId)}>
      {!isEmptyBlock ? blockId + 1 : ""}
    </div>
  );
}

export default Block;
