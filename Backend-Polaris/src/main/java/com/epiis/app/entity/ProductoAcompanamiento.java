package com.epiis.app.entity;

import com.epiis.app.generic.EntityGeneric;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "productoAcompanamiento")
@Getter
@Setter
public class ProductoAcompanamiento extends EntityGeneric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idProdAcomp")
    private Integer idProdAcomp;

    @ManyToOne
    @JoinColumn(name = "idProducto", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "idAcompanamiento", nullable = false)
    private Acompanamiento acompanamiento;
}
