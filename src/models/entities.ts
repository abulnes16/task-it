export interface Task {
  name: string;
  id: string;
}

export enum FetchingState {
  LOADING,
  SUCCESS,
  ERROR,
}
