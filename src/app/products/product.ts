export interface Product {
  /*
  CREATE TABLE `sys`.`in3` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Company` VARCHAR(45) NULL,
  `Product` VARCHAR(45) NULL,
  `Type` VARCHAR(45) NULL,
  `Inches` VARCHAR(45) NULL,
  `Resolution` VARCHAR(45) NULL,
  `CPU` VARCHAR(45) NULL,
  `RAM` VARCHAR(45) NULL,
  `Memory` VARCHAR(45) NULL,
  `Graphics` VARCHAR(45) NULL,
  `OpSys` VARCHAR(45) NULL,
  `Weight` VARCHAR(45) NULL,
  `Price` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

  */
    id: number;
    Company: string;
    Product: string;
    Type: string;
    Inches: string;
    Resolution: string;
    CPU: string;
    RAM: string;
    Memory: string;
    Graphics: string;
    OpSys: string;
    Weight: string;
    Price: string;
  }