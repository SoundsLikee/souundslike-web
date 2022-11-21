import { colors } from "@/constants";

import { IconProps } from "./icons";

export function SendIcon({ fill = colors.gray4, style, ...props }: IconProps) {
  return (
    <svg
      fill={fill}
      style={{ width: "2.8rem", height: "2.8rem", ...style }}
      viewBox="0 0 28 28"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M27.6815 0H0.31854C0.141573 0 0 0.141573 0 0.314607V2.67416C0 2.84719 0.141573 2.98876 0.31854 2.98876H27.6815C27.8584 2.98876 28 2.84719 28 2.67416V0.314607C28 0.141573 27.8584 0 27.6815 0ZM14.2478 7.35393C14.2183 7.31633 14.1807 7.28592 14.1378 7.26501C14.0949 7.24409 14.0477 7.23322 14 7.23322C13.9523 7.23322 13.9051 7.24409 13.8622 7.26501C13.8193 7.28592 13.7817 7.31633 13.7522 7.35393L9.34775 12.9264C9.31144 12.9728 9.28891 13.0284 9.28274 13.087C9.27657 13.1456 9.287 13.2047 9.31284 13.2576C9.33869 13.3105 9.3789 13.3551 9.42889 13.3862C9.47887 13.4174 9.53661 13.4338 9.59551 13.4337H12.5017V26.7416C12.5017 26.9146 12.6433 27.0562 12.8163 27.0562H15.1758C15.3489 27.0562 15.4905 26.9146 15.4905 26.7416V13.4376H18.4045C18.668 13.4376 18.8135 13.1348 18.6522 12.9303L14.2478 7.35393Z" />
    </svg>
  );
}
