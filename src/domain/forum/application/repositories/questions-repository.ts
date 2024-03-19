import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { Question } from '../../enterprise/entities/question'

export interface QuestionsRespository extends InMemoryRepository<Question> {
  findBySlug(slug: string): Promise<Question | null>
}
