package com.multi.user;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserDAO {

	@Autowired
	SqlSessionTemplate my;
	
	public void insert(UserVO bag) {
		System.out.println("insertUser : " + bag);
		my.insert("user.insert", bag);
	}

	public int update(UserVO bag) {
		int result = my.update("user.up", bag);
		return result;
	}

	public int delete(String user_penname) {
		int result = my.delete("user.del", user_penname);
		return result;
	}

	public UserVO one(String user_penname) {
		UserVO bag = my.selectOne("user.one", user_penname);
		return bag;
	}
	
	public List<UserVO> list() {
		List<UserVO> list = my.selectList("user.list");
		return list;
	}
}
