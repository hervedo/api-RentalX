import { CarsRepositoryinMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryinMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase.";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryinMemory: CarsRepositoryinMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryinMemory = new CarsRepositoryinMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryinMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Teste",
      description: "Carro Teste",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a new car with same license plate", async () => {
    await createCarUseCase.execute({
      name: "Teste",
      description: "Carro Teste",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    await expect(
      createCarUseCase.execute({
        name: "Car2",
        description: "Carro Teste",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      })
    ).rejects.toEqual(new AppError("Car already exists!"));
  });

  it("should be able to create a new car with avaliable true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Carro Teste",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
    expect(car.available).toBe(true);
  });
});
