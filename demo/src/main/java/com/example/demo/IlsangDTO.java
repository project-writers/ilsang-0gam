package com.example.demo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter // getter, setter 생략
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class IlsangDTO {
	private Long ilsang_no;
	private String ilsang_penname;
	private String ilsang_title;
	private String ilsang_tag;
	private Date ilsang_date;
	private String ilsang_content;
	
	public Long getIlsang_no() {
		return ilsang_no;
	}
	public void setIlsang_no(Long ilsang_no) {
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
	public Date getIlsang_date() {
		return ilsang_date;
	}
	public void setIlsang_date(Date ilsang_date) {
		this.ilsang_date = ilsang_date;
	}
	public String getIlsang_content() {
		return ilsang_content;
	}
	public void setIlsang_content(String ilsang_content) {
		this.ilsang_content = ilsang_content;
	}
	
	//SELECT(findAll)
	public static IlsangDTO toIlsangDTO(IlsangEntity ilsangEntity) {
		IlsangDTO ilsangDTO = new IlsangDTO();
		ilsangDTO.setIlsang_no(ilsangEntity.getIlsang_no());
		ilsangDTO.setIlsang_penname(ilsangEntity.getIlsang_penname());
		ilsangDTO.setIlsang_title(ilsangEntity.getIlsang_title());
		ilsangDTO.setIlsang_tag(ilsangEntity.getIlsang_tag());
		ilsangDTO.setIlsang_date(ilsangEntity.getIlsang_date());
		ilsangDTO.setIlsang_content(ilsangEntity.getIlsang_content());
		return ilsangDTO;
	}
}
