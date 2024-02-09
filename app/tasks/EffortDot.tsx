import { ReactNode } from "react";
import { colors } from "@/lib/mockdata";

export function EffortDot({ value, children }: Readonly<{ value: number, children: ReactNode }>) {
	console.log('EffortDot', { value, color: colors[value] })
	const color = colors[value];
	return <div className={`${color}-dot w-6 h-6 rounded-full text-center`}>
	  {children}
	</div>
  }