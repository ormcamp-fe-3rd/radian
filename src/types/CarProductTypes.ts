export interface CarProductTypes {
  id: string;
  pathId: string;
  titleImg: string;
  productImg: string;
  name: string;
  price: number;
  detailimgs: string[];
  dataildescription: string;
  onClickCarDetail: (event: React.MouseEvent) => void;
}
