package com.epiis.app.dto;

import com.epiis.app.generic.DtoGeneric;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoProductoAcompanamiento extends DtoGeneric {
    private Integer idProdAcomp;
    private Integer idProducto;      
    private Integer idAcompanamiento; 
}
