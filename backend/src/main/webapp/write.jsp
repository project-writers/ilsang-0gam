<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>글작성</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>
<body>

글작성
<form action="insertBbs" id="form" method="post" >
  필명: <input  id="ilsang_penname" name="ilsang_penname" value="penname"><br>
  제목 : <input type="text" id="ilsang_title" name="ilsang_title" value="제목"><br>
  태그 : <input type="text" id="ilsang_tag" name="ilsang_tag" value="태그"><br>
  내용 : <input type="text" id="ilsang_content" name="ilsang_content" value="내용"><br>
  <button type="submit">전송</button>
</form>

글삭제
<form action="deleteBbs" id="form" method="post" >
  글번호 : <input  id="ilsang_no" name="ilsang_no" value=""><br>
  <button type="submit">전송</button>
</form>

글수정
<form action="updateBbs" id="form" method="post" >
  글번호 : <input  id="ilsang_no" name="ilsang_no" value=""><br>
  제목 : <input type="text" id="ilsang_title" name="ilsang_title" value="제목"><br>
  태그 : <input type="text" id="ilsang_tag" name="ilsang_tag" value="태그"><br>
  내용 : <input type="text" id="ilsang_content" name="ilsang_content" value="내용"><br>
  <button type="submit">전송</button>
</form>

필명으로 글 검색
<form action="onePenname" id="form" method="post" >
  필명: <input  id="ilsang_penname" name="ilsang_penname" value="penname"><br>
  <button type="submit">전송</button>
</form>

제목으로 글 검색(포함 가능)
<form action="oneTitle" id="form" method="get" >
  제목(포함단어) : <input type="text" id="ilsang_title" name="ilsang_title" value="제목"><br>
  <button type="submit">전송</button>
</form>

태그로 글 검색
<form action="oneTag" id="form" method="get" >
  태그 : <input type="text" id="ilsang_tag" name="ilsang_tag" value="태그"><br>
  <button type="submit">전송</button>
</form>




글 리스트업
  <a href="listBbs">글 전체 리스트업</a>

</body>
</html>