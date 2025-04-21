package com.ABCElectronics.ABCElectronicSmartService.repository;

import com.ABCElectronics.ABCElectronicSmartService.model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAdminRepository extends MongoRepository<Admin, String> {
}
