import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswersCommentRespository
  extends InMemoryRepository<AnswerComment> {}
