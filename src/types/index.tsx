type Languages = {
  name: string;
};
//let foo:{ [index:string] : {message: string} } = {};
export type Country  = {
  flag: string;
  name: string;
  languages: Languages[];
  population: number;
  region: string;
  nativeName: string;
};
