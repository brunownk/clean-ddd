import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { PaginationParams } from '@/core/repositories/pagination-params'

export interface AnswerCommentsRespository
  extends InMemoryRepository<AnswerComment> {
  findManyByAnswerId(
    questionId: string,
    params: PaginationParams,
  ): Promise<AnswerComment[]>
}
