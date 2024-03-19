import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionsCommentRespository
  extends InMemoryRepository<QuestionComment> {}
