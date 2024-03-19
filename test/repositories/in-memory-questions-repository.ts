import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
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
}
