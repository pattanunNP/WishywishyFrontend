export interface Wish {
  id: string;
  sender: string;
  content: string;
  createdAt: string;
  
}

export interface Wishs {
  Wishs: Wish[];
  error: boolean;
  error_msg: string;
}
