import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { QuestionsCommentRespository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  extends InMemoryRepository<QuestionComment>
  implements QuestionsCommentRespository {}
