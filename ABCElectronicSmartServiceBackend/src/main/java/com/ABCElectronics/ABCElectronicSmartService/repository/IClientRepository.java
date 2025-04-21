package com.ABCElectronics.ABCElectronicSmartService.repository;

import com.ABCElectronics.ABCElectronicSmartService.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClientRepository extends MongoRepository<Client, String> {
}
