import { Mode } from "./enums";

// GAME-001
export interface CategoriesResponse {
  categories: Category[];
}

export interface Category {
  question_category_seq: number;
  question_category_name: string;
}

// GAME-002
export interface GamebyCategoryRequest {
  question_category_seq: number;
}

export interface GamebyCategoryResponse {
  problems: Problem[];
}

export interface Problem {
  question_seq: number | null;
  question_picture: string | null;
  question_name: string | null;
  exam_mode: string | null;
  question_history_seq: number | null;
  question_history_is_ok: boolean | null;
  created_at: string | null;
}

// GAME-003
export interface ProblemResultRequest {
  picture: string;
  question_name: string;
}

export interface ProblemResultResponse {
  question_history_is_ok: boolean;
}

// GAME-004
export interface GameResultRequest {
  question_category_seq: number;
  mode: Mode;
  questions: SmallProblem[];
}

interface SmallProblem {
  question_seq: number;
  question_history_is_ok: boolean;
}

export interface GameResultResponse {
  question_history_is_ok: string;
}

// GAME-005
export interface WrongProblemsReqeust {
  child_seq: number;
}

export interface WrongProblemsResponse {
  problems: Problem[];
  pageable: Pageable;
}

// GAME-006
export interface ReexamineRequest {
  question_history_seq: number;
  question_history_is_ok: boolean;
}

export interface ReexamineResponse {
  question_history_seq: number;
}

export interface Pageable {}
