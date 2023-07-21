package com.multi.ilsang0gam;

import java.sql.Timestamp;

public class IlsangVO {
	private int ilsang_no;
	private String ilsang_penname;
	private String ilsang_title;
	private String ilsang_tag;
	private Timestamp ilsang_date;
	private String ilsang_content;
	
	public int getIlsang_no() {
		return ilsang_no;
	}
	public void setIlsang_no(int ilsang_no) {
		this.ilsang_no = ilsang_no;
	}
	public String getIlsang_penname() {
		return ilsang_penname;
	}
	public void setIlsang_penname(String ilsang_penname) {
		this.ilsang_penname = ilsang_penname;
	}
	public String getIlsang_title() {
		return ilsang_title;
	}
	public void setIlsang_title(String ilsang_title) {
		this.ilsang_title = ilsang_title;
	}
	public String getIlsang_tag() {
		return ilsang_tag;
	}
	public void setIlsang_tag(String ilsang_tag) {
		this.ilsang_tag = ilsang_tag;
	}
	public Timestamp getIlsang_date() {
		return ilsang_date;
	}
	public void setIlsang_date(Timestamp ilsang_date) {
		this.ilsang_date = ilsang_date;
	}
	public String getIlsang_content() {
		return ilsang_content;
	}
	public void setIlsang_content(String ilsang_content) {
		this.ilsang_content = ilsang_content;
	}
	
	@Override
	public String toString() {
		return "IlsangVO [ilsang_no=" + ilsang_no + ", ilsang_penname=" + ilsang_penname + ", ilsang_title="
				+ ilsang_title + ", ilsang_tag=" + ilsang_tag + ", ilsang_date=" + ilsang_date + ", ilsang_content="
				+ ilsang_content + "]";
	}
}
