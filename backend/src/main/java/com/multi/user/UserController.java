package com.multi.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("user")
public class UserController {

	@Autowired
	private UserDAO dao;
	
	@RequestMapping("insert")
	public void insertUser(UserVO bag) {
		dao.insert(bag);
	}

	@RequestMapping("list")
	public void User() {
		List<UserVO> list = dao.list();
		System.out.println(list);
	}

	@RequestMapping("delete")
	public void delete(String user_penname) {
		dao.delete(user_penname);
	}

	@RequestMapping("update")
	public void update(UserVO bag) {
		dao.update(bag);
	}
	
	@RequestMapping("one")
	public void one(String user_penname, Model model) {
		UserVO bag = dao.one(user_penname);
		model.addAttribute("bag", bag);
		System.out.println(bag);
	}

	
	

}
