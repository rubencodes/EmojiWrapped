export type $FIXME = any;

export type JSONObject = { [key: string]: JSONRepresentable };

export type JSONRepresentable =
	| JSONObject
	| JSONRepresentable[]
	| string
	| number
	| boolean
	| null
	| undefined;
