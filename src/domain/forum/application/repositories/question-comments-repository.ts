import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'

import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRespository
  extends InMemoryRepository<QuestionComment> {
  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<QuestionComment[]>
}
