package com.multi.ilsang0gam;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.multi.user.UserVO;

@Component
public class IlsangDAO {

	@Autowired
	SqlSessionTemplate my;
	
	public void insert(IlsangVO bag) {
		System.out.println("DAO : " + bag);
		my.insert("ilsang.insert", bag);
	}
	
	public void delete(int ilsang_no) {
		System.out.println("DAO : " + ilsang_no);
		my.insert("ilsang.delete", ilsang_no);
	}
	
	public void update(IlsangVO bag) {
		System.out.println("DAO : " + bag);
		my.update("ilsang.update", bag);
	}
	
	public List<IlsangVO> onePenname(String ilsang_penname) {
		List<IlsangVO> list = my.selectList("ilsang.onePenname", ilsang_penname);
		return list;
	}
	
	public List<IlsangVO> oneTitle(String ilsang_title) {
		List<IlsangVO> list = my.selectList("ilsang.oneTitle", ilsang_title);
		return list;
	}
	
	public List<IlsangVO> oneTag(String ilsang_tag) {
		List<IlsangVO> list = my.selectList("ilsang.oneTag", ilsang_tag);
		return list;
	}
	
	public List<IlsangVO> list() {
		List<IlsangVO> list = my.selectList("ilsang.list");
		return list;
	}
	
}
