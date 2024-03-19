import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRespository } from '@/domain/forum/application/repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository
  extends InMemoryRepository<Question>
  implements QuestionsRespository
{
  async findBySlug(slug: string) {
    const question = this.items.find((item) => item.slug.value === slug)

    if (!question) {
      return null
    }

    return question
  }

  async findManyRecent({ page }: PaginationParams) {
    const questions = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)

    return questions
  }
}
