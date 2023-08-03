package com.example.demo;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

//DB 역할을 하는 클래스
@Entity
@Getter
@Setter
@Table(name="ilsang")
public class IlsangEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ilsang_no;
	
	//ilsang_penname, ilsang_title, ilsang_tag, ilsang_date, ilsang_content
	
	@Column(length = 20, nullable=false) //nullable = null값 x, 크기 20
	private String ilsang_penname;
	
	@Column //크기 255, null 가능
	private String ilsang_title;
	
	@Column
	private String ilsang_tag;
	
	@Column
	private Date ilsang_date;
	
	@Column
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
	
	// 삽입 구현
	public static IlsangEntity toSaveEntity(IlsangDTO ilsangDTO) {
		IlsangEntity ilsangEntity = new IlsangEntity();
		ilsangEntity.setIlsang_penname(ilsangDTO.getIlsang_penname());
		ilsangEntity.setIlsang_tag(ilsangDTO.getIlsang_tag());
		ilsangEntity.setIlsang_title(ilsangDTO.getIlsang_title());
		ilsangEntity.setIlsang_date(ilsangDTO.getIlsang_date());
		ilsangEntity.setIlsang_content(ilsangDTO.getIlsang_content());
		return ilsangEntity;
	}
	
	// 수정
	public static IlsangEntity toUpdateEntity(IlsangDTO ilsangDTO) {
		IlsangEntity ilsangEntity = new IlsangEntity();
		ilsangEntity.setIlsang_no(ilsangDTO.getIlsang_no());
		ilsangEntity.setIlsang_title(ilsangDTO.getIlsang_title());
		ilsangEntity.setIlsang_tag(ilsangDTO.getIlsang_tag());
		ilsangEntity.setIlsang_date(ilsangDTO.getIlsang_date());
		ilsangEntity.setIlsang_content(ilsangDTO.getIlsang_content());
		ilsangEntity.setIlsang_penname(ilsangDTO.getIlsang_penname());
		return ilsangEntity;
	}

}
