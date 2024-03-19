import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { Question } from '../../enterprise/entities/question'
import { PaginationParams } from '@/core/repositories/pagination-params'

export interface QuestionsRespository extends InMemoryRepository<Question> {
  findBySlug(slug: string): Promise<Question | null>
  findManyRecent(params: PaginationParams): Promise<Question[]>
}
