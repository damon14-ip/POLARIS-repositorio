package com.epiis.app.dto;

import com.epiis.app.generic.DtoGeneric;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoPedidoItem extends DtoGeneric {
    private Integer idItem;
    private Integer idProducto; 
    private String idPedido;    
    private Integer cantidad;
    private Double precioUnitarioFinal;
}
