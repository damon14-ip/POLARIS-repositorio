package com.epiis.app.entity;

import com.epiis.app.generic.EntityGeneric;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "producto")
@Getter
@Setter
public class Producto extends EntityGeneric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idProducto")
    private Integer idProducto;

    @ManyToOne
    @JoinColumn(name = "idCategoria", nullable = false)
    private Categoria categoria;

    @Column(name = "disponible", nullable = false)
    private Boolean disponible;

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "precioBase", nullable = false)
    private Double precioBase;

    @Column(name = "descripcion")
    private String descripcion;
}
