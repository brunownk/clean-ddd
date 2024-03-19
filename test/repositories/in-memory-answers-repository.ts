import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswersRespository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository
  extends InMemoryRepository<Answer>
  implements AnswersRespository
{
  async findManyByQuestionId(questionId: string, { page }: PaginationParams) {
    const answers = this.items
      .filter((item) => item.questionId.toString() === questionId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)

    return answers
  }
}
