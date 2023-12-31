package com.multi.user;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserDAO {

	@Autowired
	SqlSessionTemplate my;
	
	public int insert(UserVO bag) {
		
		int result = my.insert("member.create", bag);
		return result;
	}

	public int update(UserVO bag) {
		int result = my.update("member.up", bag);
		return result;
	}

	public int delete(String user_penname) {
		int result = my.delete("member.del", user_penname);
		return result;
	}

	public UserVO one(String user_penname) {
		UserVO bag = my.selectOne("member.one", user_penname);
		return bag;
	}
	
	public List<UserVO> list() {
		List<UserVO> list = my.selectList("member.list");
		return list;
	}
}
