package com.epiis.app.dto;

import com.epiis.app.generic.DtoGeneric;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class DtoPedido extends DtoGeneric {
    private String idPedido;
    private Integer idEmpleado;
    private Date fechaHoraCreacion;
    private String nombreCliente;
    private String estado;
    private Double totalPagar;
    private Boolean tipoPedido;
    private Boolean metodoPago;
}
