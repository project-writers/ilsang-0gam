package com.multi.user;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller //스프링에서 제어하는 역활로 등록
public class UserController {
	
<<<<<<< HEAD
	@Autowired
	UserDAO dao;
	
	@RequestMapping("user/insert")
	public void insert(UserVO bag) {
		
		System.out.println("insert 요청됨.");
		System.out.println(bag);
		System.out.println(dao);
		dao.insert(bag);
		
=======
	@RequestMapping("insert")
	public int insertUser(UserVO bag) {
		dao.insert(bag);
		return 1;
>>>>>>> parent of 00795db (feat : return 1; 삭제)
	}
	
	@RequestMapping("update")
	public void update(UserVO bag) {
		System.out.println("insert 요청됨.");
		dao.update(bag);
	}
	
	@RequestMapping("delete")
	public void delte(String user_penname) {
		System.out.println("insert 요청됨.");
		dao.delete(user_penname);
	}
	
	@RequestMapping("one")
	public void one(String user_penname, Model model) {
		System.out.println("insert 요청됨.");
		UserVO bag = dao.one(user_penname);
		model.addAttribute("bag", bag);
	}
	
	@RequestMapping("list")
	public void one(Model model) {
		List<UserVO> list = dao.list();
		model.addAttribute("list", list);
	}
}
