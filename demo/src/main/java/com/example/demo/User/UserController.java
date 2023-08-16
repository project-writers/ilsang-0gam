package com.example.demo.User;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.ilsang.IlsangDTO;
import com.example.demo.ilsang.IlsangService;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/User")
public class UserController {
	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	// 전체 조회
	@GetMapping("/select")
	public String findAll() {
		List<UserDTO> userDTOList = userService.findAll();
		System.out.println("userDTOList=" + userDTOList);
		return "User_select실행";
	}

	// 삽입구현
	@PostMapping("/insert")
	public String save(@RequestBody UserDTO userDTO) {
		System.out.println("userDTO");
		userService.save(userDTO);
		return "User_insert실행";
	}
	
	// 삭제 구현
	@GetMapping("/delete")
	public String delete(@RequestParam String user_penname) {
	    userService.delete(user_penname);
	    System.out.println("delete 실행");
	    return "User_delete구현";
	}
	
	@PostMapping("/update")
    public void updateForm(@RequestBody UserDTO userDTO) {
        userService.update(userDTO);
        System.out.println("id실행");
    }
}
