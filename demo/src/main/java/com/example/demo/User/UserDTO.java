package com.example.demo.User;

import java.util.Date;

import com.example.demo.ilsang.IlsangDTO;
import com.example.demo.ilsang.IlsangEntity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class UserDTO {
	private String user_email;
	private String user_penname; // pk
	private Date user_joindate;
	private String user_jwt;

	
	public String getUser_email() {
		return user_email;
	}


	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}


	public String getUser_penname() {
		return user_penname;
	}


	public void setUser_penname(String user_penname) {
		this.user_penname = user_penname;
	}


	public Date getUser_joindate() {
		return user_joindate;
	}


	public void setUser_joindate(Date user_joindate) {
		this.user_joindate = user_joindate;
	}


	public String getUser_jwt() {
		return user_jwt;
	}


	public void setUser_jwt(String user_jwt) {
		this.user_jwt = user_jwt;
	}
	
	@Override
	public String toString() {
		return "UserDTO [user_email=" + user_email + ", user_penname=" + user_penname + ", user_joindate="
				+ user_joindate + ", user_jwt=" + user_jwt + "]";
	}

	// SELECT(findAll)
	public static UserDTO toUserDTO(UserEntity userEntity) {
		UserDTO userDTO = new UserDTO();
		userDTO.setUser_email(userEntity.getUser_email());
		userDTO.setUser_penname(userEntity.getUser_penname());
		userDTO.setUser_joindate(userEntity.getUser_joindate());
		userDTO.setUser_jwt(userEntity.getUser_jwt());
		return userDTO;
	}
}
