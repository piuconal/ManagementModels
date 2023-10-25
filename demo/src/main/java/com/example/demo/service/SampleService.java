package com.example.demo.service;

import com.example.demo.model.Sample;

import java.util.List;
import java.util.Optional;

public interface SampleService {
    List<Sample> getAll();
    void saveSample(Sample sample);
    void deleteById(Integer id);
    Sample get(Integer id);
    List<Sample> findSampleByName(String name);
}
