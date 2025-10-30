export type Task = {
  id: string; 
  title: string;
  description?: string;
  dueDate?: string;
};

export type Columns = Record<string, Task[]>;
