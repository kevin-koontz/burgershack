import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('/test', this.getTest)
      .get('', this.getAllBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.removeBurger)
  }

  async getTest(request, response, next) {
    try {
      response.send('🍔 test success!')
    } catch (error) {
      next(error)
    }
  }

  async removeBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      response.send('burger deleted')
    } catch (error) {
      next(error)
    }
  }

  async createBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgersService.createBurger(burgerData)
      response.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async getAllBurgers(request, response, next) {
    try {
      const burgers = await burgersService.getAllBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
    }
  }
}