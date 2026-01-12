package com.epiis.app.business;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epiis.app.dataaccess.AcompanamientoRepository;
import com.epiis.app.dto.DtoAcompanamiento;
import com.epiis.app.entity.Acompanamiento;

@Service
public class AcompanamientoBusiness {

    @Autowired
    private AcompanamientoRepository acompanamientoRepository;

    public boolean insert(DtoAcompanamiento dto) {
        Acompanamiento acomp = new Acompanamiento();
        acomp.setNombre(dto.getNombre());
        acomp.setCreatedAt(new Timestamp(new Date().getTime()));
        acomp.setUpdatedAt(new Timestamp(new Date().getTime()));

        acompanamientoRepository.save(acomp);
        return true;
    }

    public List<DtoAcompanamiento> getAll() {
        List<Acompanamiento> list = acompanamientoRepository.findAll();
        List<DtoAcompanamiento> dtos = new ArrayList<>();

        for (Acompanamiento a : list) {
            DtoAcompanamiento dto = new DtoAcompanamiento();
            dto.setIdAcompanamiento(a.getIdAcompanamiento());
            dto.setNombre(a.getNombre());
            dto.setCreatedAt(a.getCreatedAt());
            dto.setUpdatedAt(a.getUpdatedAt());
            dtos.add(dto);
        }

        return dtos;
    }
}
