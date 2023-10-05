package com.example.demo.workshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.workshop.entity.UserLoginEntity;

@Repository

public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Integer> {

}
