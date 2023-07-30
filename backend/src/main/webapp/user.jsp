<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h3>검색 화면입니다.</h3>
<a href="user/list">모든 회원 정보 가지고 오기</a>
<hr color="red">
<h3>로그인 화면입니다. </h3>
<hr color="red">

<h3>회원가입 화면입니다. </h3>
<hr color="red">
<form action="user/insert" method="get">
	user_email : <input name="user_email"><br>
	user_penname : <input name="user_penname" value="1234"><br>
	user_jwt : <input name="user_jwt" value="01111231"><br>
	<button type="submit">서버로 전송</button>
</form>
<hr color="red">

<h3>회원수정 화면입니다. </h3>
<hr color="red">
<form action="user/update" method="get">
	user_email : <input name="user_email" value="user_email"><br>
	user_penname : <input name="user_penname" value="호호"><br>
	<button type="submit">서버로 전송</button>
</form>
<hr color="red">

<h3>회원탈퇴 화면입니다. </h3>
<hr color="red">
<form action="user/delete" method="get">
	user_penname : <input name="user_penname" value=""><br>
	<button type="submit">서버로 전송</button>
</form>
<hr color="red">

<h3>회원검색 화면입니다. </h3>
<hr color="red">
<form action="user/one" method="get">
	user_penname : <input name="user_penname" value="apple"><br>
	<button type="submit">서버로 전송</button>
</form>
<hr color="red">

<button type="button">먹통버튼(아무 기능이 없음)</button>
</body>
</html>