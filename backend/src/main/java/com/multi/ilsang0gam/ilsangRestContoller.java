package com.multi.ilsang0gam;

import java.util.HashMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController 
public class ilsangRestContoller {

	//String return(Content-Type: text/plain)
	@GetMapping("/testApi1")
	public String testApi1() {

		return "veneas";
	}
	
	//Object Json return 1(HashMap)
	@PostMapping("/testApi2")
	public HashMap<String, Object> testApi2() {

		HashMap<String, Object> rtnMap = new HashMap<String, Object>();
		rtnMap.put("test2", "value2");

		return rtnMap;
	}

	//Object Json return 2(User VO)
	@PostMapping("/testApi3")
	public User testApi3() {

		User user = new User();
		user.setName("veneas");
		
		return user;
	}
	
	//User VO
	static class User {
		private String name;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}
	}

	//View return
	@RequestMapping(value = "/", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView home() {

		ModelAndView mav = new ModelAndView();
		mav.setViewName("home");
		mav.addObject("testData", "1");
		
		return mav;
	}
}