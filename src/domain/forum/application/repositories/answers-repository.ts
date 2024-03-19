import { InMemoryRepository } from '@/core/repositories/in-memory-repository'
import { Answer } from '../../enterprise/entities/answer'

export interface AnswersRespository extends InMemoryRepository<Answer> {}
