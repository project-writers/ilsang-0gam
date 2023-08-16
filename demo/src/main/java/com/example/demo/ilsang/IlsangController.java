package com.example.demo.ilsang;

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
public class IlsangController {
	private final IlsangService ilsangService;
	
	 public IlsangController(IlsangService ilsangService) {
	        this.ilsangService = ilsangService;
	    }
	
	//삽입구현
	@PostMapping("/insert")
	public String save(@RequestBody IlsangDTO ilsangDTO) {
		System.out.println("ilsangDTO");
		ilsangService.save(ilsangDTO);
		return "ilsang_insert구현";
	}
	
	//전체 조회
	@GetMapping("/select")
	public String findAll() {
		List<IlsangDTO> ilsangDTOList = ilsangService.findAll();
		System.out.println("ilsangDTOList="+ ilsangDTOList);
		return "ilsang_select구현";
	}
	
	// 삭제 구현
	//http://localhost:8080/ilsang/delete/1
	@GetMapping("/delete")
	public String delete(@RequestParam Long ilsang_no) {
	    ilsangService.delete(ilsang_no);
	    System.out.println("delete 실행");
	    return "ilsang_delete구현";
	}
	
	@PostMapping("/update")
    public String updateForm(@RequestBody IlsangDTO ilsangDTO) {
        ilsangService.update(ilsangDTO);
        System.out.println("id실행");
        return "ilsang_update";
	}
	
}
