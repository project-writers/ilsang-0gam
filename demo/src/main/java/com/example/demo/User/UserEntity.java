package com.example.demo.User;

import java.util.Date;

import com.example.demo.ilsang.IlsangDTO;
import com.example.demo.ilsang.IlsangEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String user_penname;

	@Column
	private String user_email;

	@Column
	private Date user_joindate;

	@Column
	private String user_jwt;

	public String getUser_penname() {
		return user_penname;
	}

	public void setUser_penname(String user_penname) {
		this.user_penname = user_penname;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
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
		return "UserEntity [user_penname=" + user_penname + ", user_email=" + user_email + ", user_joindate="
				+ user_joindate + ", user_jwt=" + user_jwt + "]";
	}

	// 삽입 구현
	public static UserEntity toSaveEntity(UserDTO userDTO) {
		UserEntity userEntity = new UserEntity();
		userEntity.setUser_email(userDTO.getUser_email());
		userEntity.setUser_penname(userDTO.getUser_penname());
		userEntity.setUser_joindate(userDTO.getUser_joindate());
		userEntity.setUser_jwt(userDTO.getUser_jwt());
		return userEntity;
	}

	// 수정
	public static UserEntity toUpdateEntity(UserDTO userDTO) {
		UserEntity userEntity = new UserEntity();
		userEntity.setUser_email(userDTO.getUser_email());
		userEntity.setUser_penname(userDTO.getUser_penname());
		userEntity.setUser_joindate(userDTO.getUser_joindate());
		userEntity.setUser_jwt(userDTO.getUser_jwt());
		return userEntity;
	}
}
