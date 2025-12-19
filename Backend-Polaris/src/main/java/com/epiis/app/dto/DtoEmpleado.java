package com.epiis.app.dto;

import com.epiis.app.generic.DtoGeneric;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoEmpleado extends DtoGeneric {
    private Integer idEmpleado;
    private String nombre;
    private String passwordHash;
}
