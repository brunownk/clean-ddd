import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { AnswersRespository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository
  extends InMemoryRepository<Answer>
  implements AnswersRespository
{
  public items: Answer[] = []

  async create(answer: Answer): Promise<void> {
    this.items.push(answer)
  }
}
