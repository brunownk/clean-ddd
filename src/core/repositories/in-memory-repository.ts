import { Entity } from '../entities/entity'

export abstract class InMemoryRepository<Type extends Entity> {
  public items: Type[] = []

  async create(data: Type) {
    this.items.push(data)
  }

  async save(data: Type) {
    const index = this.items.findIndex((item) => item.id === data.id)

    this.items[index] = data
  }

  async findById(id: string): Promise<Type | null> {
    return this.items.find((item) => item.id.toString() === id) ?? null
  }

  async delete(data: Type) {
    const index = this.items.findIndex((item) => item.id === data.id)

    this.items.splice(index, 1)
  }
}
