export interface TodoItem extends BaseTodoItem {
  id: string;
}

export interface BaseTodoItem {
  description: string;
  isCompleted: boolean;
  dateAdded: Date
}

export interface TodoItems {
  [key: string]: TodoItem;
}
