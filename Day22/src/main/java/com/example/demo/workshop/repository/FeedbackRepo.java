package com.example.demo.workshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.workshop.entity.Feedback;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer>
{

}
