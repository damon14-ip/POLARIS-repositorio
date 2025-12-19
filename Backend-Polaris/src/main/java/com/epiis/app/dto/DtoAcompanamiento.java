package com.epiis.app.dto;

import com.epiis.app.generic.DtoGeneric;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoAcompanamiento extends DtoGeneric {
    private Integer idAcompanamiento;
    private String nombre;
}
