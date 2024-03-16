import { QuestionFormErrors, QuestionForm } from "@/app/types/question";

export const qnaFormValidation = (values: QuestionForm) => {
    const errors: QuestionFormErrors = {};
    if (!values.question) {
        errors.question = 'Question is required';
    }
    if (!values.answer) {
        errors.answer = 'Answer is required';
    }
    return errors;
};
