export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface QuestionForm {
  question: string;
  answer: string;
}

export interface QuestionFormErrors {
  question?: string;
  answer?: string;
}
