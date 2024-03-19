import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { Answer } from '../../enterprise/entities/answer'
import { PaginationParams } from '@/core/repositories/pagination-params'

export interface AnswersRespository extends InMemoryRepository<Answer> {
  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]>
}
