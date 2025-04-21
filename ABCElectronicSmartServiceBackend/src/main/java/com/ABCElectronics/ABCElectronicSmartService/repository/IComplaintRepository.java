package com.ABCElectronics.ABCElectronicSmartService.repository;

import com.ABCElectronics.ABCElectronicSmartService.model.Complaint;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IComplaintRepository extends MongoRepository<Complaint, String> {
}
