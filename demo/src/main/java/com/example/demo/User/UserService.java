package com.example.demo.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.IlsangDTO;
import com.example.demo.IlsangEntity;
import com.example.demo.IlsangRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	private final UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	// 전체 조회
	public List<UserDTO> findAll() {
		List<UserEntity> userEntityList = userRepository.findAll();
		List<UserDTO> userDTOList = new ArrayList<>();
		for (UserEntity userEntity : userEntityList) {
			userDTOList.add(UserDTO.toUserDTO(userEntity));
		}
		return userDTOList;
	}

	// 삽입구현
	public void save(UserDTO userDTO) {
		UserEntity userEntity = UserEntity.toSaveEntity(userDTO);
		userRepository.save(userEntity);
	}

	// 삭제 구현
	public void delete(String user_penname) {
		userRepository.deleteById(user_penname);
	}
	
	@Transactional
	public UserDTO findById(String user_penname) {
		Optional<UserEntity> optionalUserEntity = userRepository.findById(user_penname);
		if (optionalUserEntity.isPresent()) {
			UserEntity userEntity = optionalUserEntity.get();
			UserDTO userDTO = UserDTO.toUserDTO(userEntity);
			return userDTO;
		} else {
			return null;
		}
	}

	public UserDTO update(UserDTO userDTO) {
		UserEntity userEntity = UserEntity.toUpdateEntity(userDTO);
		userRepository.save(userEntity);
		return findById(userDTO.getUser_penname());
	}
}
