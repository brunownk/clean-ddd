import { Question } from '../../enterprise/entities/question'

export interface QuestionsRespository {
  findBySlug(slug: string): Promise<Question | null>
  create(question: Question): Promise<void>
}
