package com.ibm.application.employee.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
public class Employee {
	@GeneratedValue(strategy=GenerationType.IDENTITY)

	@Id
private long id;
	@Column(name="firstname")
private String firstname;
	@Column(name="lastname")
private String lastname;
	@Column(name="email")
private String email;
}