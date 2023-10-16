package com.example.demo.workshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.workshop.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer>{

}
