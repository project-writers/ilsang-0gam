package com.multi.user;

import java.sql.Timestamp;

public class UserVO {

	private String user_email;
	private String user_penname;
	private Timestamp user_joindate;
	private String user_jwt;
	private int user_no;

	
	
	
	public int getUser_no() {
		return user_no;
	}
	public void setUser_no(int user_no) {
		this.user_no = user_no;
	}
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
	
	
	
	public Timestamp getUser_joindate() {
		return user_joindate;
	}
	public void setUser_joindate(Timestamp user_joindate) {
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
		return "UserVO [user_email=" + user_email + ", user_penname=" + user_penname + ", user_joindate="
				+ user_joindate + ", user_jwt=" + user_jwt + ", user_no=" + user_no + "]";
	}
	
	
	
}
