package com.example.demo.controller;

import com.example.demo.model.Sample;
import com.example.demo.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
public class HomeController {

    @GetMapping("/")
    public String ViewHome() {
        return "gdTrangChu";
    }

    @Autowired
    SampleService sampleService;

    @GetMapping("/QuanLyMau")
    public String QuanLyMau(Model model, @Param("keyword") String keyword) {
        List<Sample> listSamples = this.sampleService.getAll();

        if (keyword != null) {
            listSamples = this.sampleService.findSampleByName(keyword);
            model.addAttribute("keyword",keyword);
        }
        model.addAttribute("listSamples",listSamples);
        return "gdQuanLyMau";
    }

    @GetMapping("/ThemMau")
    public String ThemMau(Model model) {
        Sample sample = new Sample();
        model.addAttribute("sample", sample);
        model.addAttribute("pageTitle", "Thêm Mẫu");
        return "gdSample_form";

    }

    @PostMapping("/Luu")
    public String luuMau(RedirectAttributes ra, @ModelAttribute("sample")Sample sample) {
        sampleService.saveSample(sample);
        ra.addFlashAttribute("message","Lưu thành công");
        return "redirect:/QuanLyMau";
    }

    @GetMapping("/XemChiTiet/{id}")
    public String XemChiTiet(@PathVariable("id") Integer id, Model model) {
        Sample sample = sampleService.get(id);
        model.addAttribute("sample",sample);
        model.addAttribute("pageTitle","Xem chi tiết mẫu (ID: " + id + ")" );
        return "gdXemChiTiet";
    }

    @GetMapping("/XacNhan/{id}")
    public String XacNhan(Model model, @PathVariable(value = "id")Integer id) {
        model.addAttribute("id",id);
        return "gdXacNhanXoa";
    }

    @GetMapping("/XoaMau/{id}")
    public String XoaMau(@PathVariable(value = "id")Integer id) {
        sampleService.deleteById(id);
        return "redirect:/QuanLyMau";
    }

    @PostMapping("/XemChiTiet/Sua")
    public String SuaMau(RedirectAttributes ra, @ModelAttribute("sample")Sample sample) {
        sampleService.saveSample(sample);
        ra.addFlashAttribute("message","Lưu thành công");
        return "redirect:/QuanLyMau";
    }
}
