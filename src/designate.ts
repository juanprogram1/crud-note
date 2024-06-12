// Type interface
interface Tasks {
  id?: string;
  title: string;
  textarea: string;
  date: string;
}

interface FormRegister {
  title: string;
  textarea: string;
  date: string;
}

export type { Tasks, FormRegister };
