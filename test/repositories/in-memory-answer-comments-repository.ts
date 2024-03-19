import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { AnswersCommentRespository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository
  extends InMemoryRepository<AnswerComment>
  implements AnswersCommentRespository {}
