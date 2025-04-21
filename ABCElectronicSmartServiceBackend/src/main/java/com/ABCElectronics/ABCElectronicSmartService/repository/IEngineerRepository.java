package com.ABCElectronics.ABCElectronicSmartService.repository;

import com.ABCElectronics.ABCElectronicSmartService.model.Engineer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEngineerRepository extends MongoRepository<Engineer, String> {
}
