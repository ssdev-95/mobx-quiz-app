export interface Quest {
    category: string;
    correct_answer: number;
    answers: string[];
    difficult: string;
    question: string;
    type: string;
}

export interface QuizResults {
    status: string;
    answer: string;
}

export interface QuestionProps {
    quiz: Quest[]
}

export interface ModalProps {
    isOpen: boolean;
    toggleModal: ()=>void;
}