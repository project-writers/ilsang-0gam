package com.multi.ilsang0gam;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IlsangController {

	@Autowired
	IlsangDAO dao;
	
	@RequestMapping("/insertBbs")
	public void insert(IlsangVO bag) {
		System.out.println("controller : " + bag);
		dao.insert(bag);
	}

	@RequestMapping("/deleteBbs")
	public void delete(int ilsang_no) {
		System.out.println("controller : " + ilsang_no);
		dao.delete(ilsang_no);
	}

	@RequestMapping("/updateBbs")
	public void update(IlsangVO bag) {
		System.out.println("controller : " + bag);
		dao.update(bag);
	}

	@RequestMapping("/onePenname")
	public void onePenname(String ilsang_penname, Model model) {
		List<IlsangVO> list = dao.onePenname(ilsang_penname);
		model.addAttribute("list", list);
	}
	
	@RequestMapping("/oneTitle")
	public void oneTitle(String ilsang_title, Model model) {
		List<IlsangVO> list = dao.oneTitle(ilsang_title);
		model.addAttribute("list", list);
	}
	
	@RequestMapping("/oneTag")
	public void oneTag(String ilsang_tag, Model model) {
		List<IlsangVO> list = dao.oneTag(ilsang_tag);
		model.addAttribute("list", list);
	}
	
	
	@RequestMapping("/listBbs")
	public List<IlsangVO> one(Model model) {
		List<IlsangVO> list = dao.list();
		model.addAttribute("list", list);
		return list;
	}

}
