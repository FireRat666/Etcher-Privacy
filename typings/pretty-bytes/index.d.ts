declare module 'pretty-bytes' {
	type Options = {
		readonly signed?: boolean;
		readonly locale?: boolean | string | readonly string[];
		readonly bits?: boolean;
		readonly binary?: boolean;
		readonly minimumFractionDigits?: number;
		readonly maximumFractionDigits?: number;
		readonly space?: boolean;
	};

	function prettyBytes(number: number, options?: Options): string;

	export = prettyBytes;
}
