export interface SubStandard {
  key: string;
  name: string;
  maxLength: number;
  minLength: number;
  conditionMax: string;
  conditionMin: string;
  shape: string[];
}

export interface Standard {
  id: string;
  name: string;
  createDate: string;
  standardData: SubStandard[];
}
