package com.ABCElectronics.ABCElectronicSmartService.repository;

import com.ABCElectronics.ABCElectronicSmartService.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductRepository extends MongoRepository<Product, String> {
}
