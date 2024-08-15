// Type interface
interface Tasks {
  id: number;
  title?: string | undefined;
  textarea: string;
  date: string;
}

interface Tasks2 {
  id: string;
  title?: string | undefined;
  textarea: string;
  date: string;
}

export type { Tasks, Tasks2 };
