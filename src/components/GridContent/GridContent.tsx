import type { ReactNode } from "react";

export default function GridContent({ children }: { children: ReactNode }) {
  return <div className="grid-content">{children}</div>;
}
