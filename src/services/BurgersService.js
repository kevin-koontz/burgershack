import { dbContext } from "../db/DbContext.js"


class BurgersService {

  async removeBurger(burgerId) {
    const burgerToDelete = await dbContext.Burgers.findById(burgerId)
    return burgerToDelete
  }
  async createBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }

  async getAllBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }

}

export const burgersService = new BurgersService()