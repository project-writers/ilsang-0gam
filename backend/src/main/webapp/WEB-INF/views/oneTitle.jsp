<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>제목 검색 전체 리스트 페이지입니다.</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<style>
body {
	background: #636163;
}
</style>
</head>
<body>
<div class="container mt-3">
  <h2>제목 검색 전체 리스트 페이지입니다.</h2>
  <table class="table table-dark">
    <thead>
      <tr>
        <th>글 고유번호</th>
        <th>필명</th>
        <th>제목</th>
        <th>태그</th>
        <th>날짜</th>
        <th>내용</th>
      </tr>
    </thead>
	<c:forEach items="${list}" var="list">
		<hr color="red">
	<tbody>
      <tr>
        <td>${list.ilsang_no}</td>
        <td>${list.ilsang_penname}</td>
        <td>${list.ilsang_title}</td>
        <td>${list.ilsang_tag}</td>
        <td>${list.ilsang_date}</td>
        <td>${list.ilsang_content}</td>
      </tr>
    </tbody>
	</c:forEach>
	</table>
</div>

</body>
</html>