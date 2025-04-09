import React from "react";

export interface BrandTiktokProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

export const BrandTiktok = ({
  size = 24,
  strokeWidth = 2,
  ...props
}: BrandTiktokProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
};
