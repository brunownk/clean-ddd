import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswersCommentRespository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository
  extends InMemoryRepository<AnswerComment>
  implements AnswersCommentRespository
{
  async findManyByAnswerId(answerId: string, { page }: PaginationParams) {
    const answerComments = this.items
      .filter((item) => item.answerId.toString() === answerId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)

    return answerComments
  }
}
