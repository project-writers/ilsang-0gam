package com.multi.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.AllArgsConstructor;

@Controller
@RequestMapping("/User/*")
@AllArgsConstructor
public class UserController {

	@Autowired
	private UserDAO dao;

	@RequestMapping("/listUser")
	public void User() {
		List<UserVO> list = dao.list();
		System.out.println(list);

	}

	@RequestMapping("deleteUser")
	public void delete(String user_penname) {
		dao.delete(user_penname);
	}

	@RequestMapping("update")
	public void update(UserVO bag) {
		dao.update(bag);
	}

	@RequestMapping("insert")
	public void insertUser(UserVO bag) {
		System.out.println("User»ðÀÔ : " + bag);
		dao.insert(bag);
		
	}
	

}
