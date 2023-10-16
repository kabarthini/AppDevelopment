package com.example.demo.workshop.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.workshop.entity.StoringData;
import com.example.demo.workshop.entity.UserRegister;



public interface StoringDataRepo  extends JpaRepository<StoringData,Long>{
	List<StoringData> findByUser(UserRegister user);
	
}
