import { Answer } from '../../enterprise/entities/answer'
import { AnswersRespository } from '../repositories/answers-repository'

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionAnswersUseCaseResponse {
  answers: Answer[]
}

export class FetchQuestionAnswersUseCase {
  constructor(private answersRespository: AnswersRespository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRespository.findManyByQuestionId(
      questionId,
      { page },
    )

    return {
      answers,
    }
  }
}
