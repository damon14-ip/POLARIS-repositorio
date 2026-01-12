package com.epiis.app.business;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epiis.app.dataaccess.EmpleadoRepository;
import com.epiis.app.dto.DtoEmpleado;
import com.epiis.app.entity.Empleado;

@Service
public class EmpleadoBusiness {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    public boolean insert(DtoEmpleado dtoEmpleado) {
        Empleado empleado = new Empleado();
        empleado.setNombre(dtoEmpleado.getNombre());
        empleado.setPasswordHash(dtoEmpleado.getPasswordHash());
        empleado.setCreatedAt(new Timestamp(new Date().getTime()));
        empleado.setUpdatedAt(new Timestamp(new Date().getTime()));

        empleadoRepository.save(empleado);
        return true;
    }

    public List<DtoEmpleado> getAll() {
        List<Empleado> empleados = empleadoRepository.findAll();
        List<DtoEmpleado> dtos = new ArrayList<>();

        for (Empleado e : empleados) {
            DtoEmpleado dto = new DtoEmpleado();
            dto.setIdEmpleado(e.getIdEmpleado());
            dto.setNombre(e.getNombre());
            dto.setPasswordHash(e.getPasswordHash());
            dto.setCreatedAt(e.getCreatedAt());
            dto.setUpdatedAt(e.getUpdatedAt());
            dtos.add(dto);
        }

        return dtos;
    }
}
