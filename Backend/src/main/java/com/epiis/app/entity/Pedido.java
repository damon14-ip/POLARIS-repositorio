package com.epiis.app.entity;

import com.epiis.app.generic.EntityGeneric;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "pedido")
@Getter
@Setter
public class Pedido extends EntityGeneric {

    @Id
    @Column(name = "idPedido", length = 36)
    private String idPedido; // UUID

    @ManyToOne
    @JoinColumn(name = "idEmpleado", nullable = false)
    private Empleado empleado;

    @Column(name = "fechaHoraCreacion", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaHoraCreacion;

    @Column(name = "nombreCliente", nullable = false)
    private String nombreCliente;

    @Column(name = "estado", nullable = false)
    private String estado;

    @Column(name = "totalPagar", nullable = false)
    private Double totalPagar;

    @Column(name = "tipoPedido", nullable = false)
    private Boolean tipoPedido;

    @Column(name = "metodoPago", nullable = false)
    private Boolean metodoPago;
}
