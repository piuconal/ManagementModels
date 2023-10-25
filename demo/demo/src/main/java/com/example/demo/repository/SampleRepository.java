package com.example.demo.repository;


import com.example.demo.model.Sample;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SampleRepository extends JpaRepository<Sample, Integer> {
    List<Sample> findByName(String keyword);
}

