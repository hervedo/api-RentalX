import { CarsRepositoryinMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryinMemory";

import { ListAvailableCarsUseCase } from "./listAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryinMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryinMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "VW Polo Confortline - Teste 1",
      description: "VW Polo Confortline",
      daily_rate: 110,
      license_plate: "BBC-1234",
      fine_amount: 100,
      brand: "VW",
      category_id: "0f9e41ec-718e-4687-b71e-841e0a96ad17",
    });

    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "VW Polo Confortline",
      daily_rate: 110,
      license_plate: "BBC-1234",
      fine_amount: 100,
      brand: "VW",
      category_id: "0f9e41ec-718e-4687-b71e-841e0a96ad17",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "Car 2" });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "VW Polo Confortline",
      daily_rate: 110,
      license_plate: "BBC-1234",
      fine_amount: 100,
      brand: "VW",
      category_id: "0f9e41ec-718e-4687-b71e-841e0a96ad17",
    });

    const cars = await listAvailableCarsUseCase.execute({ brand: "VW" });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 4",
      description: "VW Polo Confortline",
      daily_rate: 110,
      license_plate: "BBC-1234",
      fine_amount: 100,
      brand: "VW",
      category_id: "0f9e41ec-718e-4687-b71e-841e0a96ad17",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "0f9e41ec-718e-4687-b71e-841e0a96ad17",
    });
    expect(cars).toEqual([car]);
  });
});
