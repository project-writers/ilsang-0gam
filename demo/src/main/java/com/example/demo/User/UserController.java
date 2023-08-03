package com.example.demo.User;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.IlsangDTO;
import com.example.demo.IlsangService;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/User")
@RequiredArgsConstructor
public class UserController {
	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	// 전체 조회
	@GetMapping("/select")
	public void findAll() {
		List<UserDTO> userDTOList = userService.findAll();
		System.out.println("userDTOList=" + userDTOList);
	}

	// 삽입구현
	@PostMapping("/insert")
	public void save(@RequestBody UserDTO userDTO) {
		System.out.println("userDTO");
		userService.save(userDTO);
	}
	
	// 삭제 구현
	@GetMapping("/delete")
	public void delete(@RequestParam String user_penname) {
	    userService.delete(user_penname);
	    System.out.println("delete 실행");
	}
	
	@PostMapping("/update")
    public void updateForm(@RequestBody UserDTO userDTO) {
        userService.update(userDTO);
        System.out.println("id실행");
    }
}
