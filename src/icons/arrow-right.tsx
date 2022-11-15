import { IArrowIconProps } from "../types";

function ArrowRight({ handleOnClick, className }: IArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={0.5}
      stroke="rgb(222, 164, 77)"
      className={"w-2 h-2 " + className}
      onClick={handleOnClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
}

export default ArrowRight;
