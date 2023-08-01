package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IlsangService {
	private final IlsangRepository ilsangRepository;
	
	public IlsangService(IlsangRepository ilsangRepository) {
        this.ilsangRepository = ilsangRepository;
    }

	public void save(IlsangDTO ilsangDTO) {
		IlsangEntity ilsangEntity = IlsangEntity.toSaveEntity(ilsangDTO);
		ilsangRepository.save(ilsangEntity);
	}
	
	public List<IlsangDTO> findAll(){
		List<IlsangEntity> ilsangEntityList = ilsangRepository.findAll();
		List<IlsangDTO> ilsangDTOList = new ArrayList<>();
		for (IlsangEntity ilsangEntity: ilsangEntityList) {
			ilsangDTOList.add(IlsangDTO.toIlsangDTO(ilsangEntity));
		}
		return ilsangDTOList;
	}

}
