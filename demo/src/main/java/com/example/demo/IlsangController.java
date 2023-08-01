package com.example.demo;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.RequiredArgsConstructor;


@Controller
@RequestMapping("/ilsang")
@RequiredArgsConstructor
public class IlsangController {
	private final IlsangService ilsangService;
	
	 public IlsangController(IlsangService ilsangService) {
	        this.ilsangService = ilsangService;
	    }
	
	//삽입구현
	@PostMapping("/insert")
	public void save(@RequestBody IlsangDTO ilsangDTO) {
		System.out.println("ilsangDTO");
		ilsangService.save(ilsangDTO);
	}
	
	//전체 조회
	@GetMapping("/select")
	public void findAll() {
		List<IlsangDTO> ilsangDTOList = ilsangService.findAll();
		System.out.println("ilsangDTOList="+ ilsangDTOList);
	}
}
