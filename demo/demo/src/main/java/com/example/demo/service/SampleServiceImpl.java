package com.example.demo.service;

import com.example.demo.model.Sample;
import com.example.demo.repository.SampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SampleServiceImpl implements SampleService{
    @Autowired
    SampleRepository sampleRepository;
    @Override
    public List<Sample> getAll() {

        return sampleRepository.findAll();
    }
    @Override
    public void saveSample(Sample sample) {
        this.sampleRepository.save(sample);
    }
    @Override
    public void deleteById(Integer id) {
        this.sampleRepository.deleteById(id);
    }
    @Override
    public Sample get(Integer id) {
        Optional<Sample> result = sampleRepository.findById(id);
        return result.get();
    }
    @Override
    public List<Sample> findSampleByName(String name) {
        return sampleRepository.findByName(name);
    }
}
