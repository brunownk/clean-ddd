import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionCommentsRespository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  extends InMemoryRepository<QuestionComment>
  implements QuestionCommentsRespository
{
  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const questionComments = this.items
      .filter((item) => item.questionId.toString() === questionId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)

    return questionComments
  }
}
