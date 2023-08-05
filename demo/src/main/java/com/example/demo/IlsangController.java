package com.example.demo;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
	
	// 삭제 구현
	//http://localhost:8080/ilsang/delete/1
	@GetMapping("/delete")
	public void delete(@RequestParam Long ilsang_no) {
	    ilsangService.delete(ilsang_no);
	    System.out.println("delete 실행");
	}
	
	@PostMapping("/update")
    public void updateForm(@RequestBody IlsangDTO ilsangDTO) {
        ilsangService.update(ilsangDTO);
        System.out.println("id실행");
    }
	
}
