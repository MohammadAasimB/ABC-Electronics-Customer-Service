package com.ABCElectronics.ABCElectronicSmartService.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Complaint")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Complaint {
}
