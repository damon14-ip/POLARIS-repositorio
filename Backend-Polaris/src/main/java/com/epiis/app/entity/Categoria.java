package com.epiis.app.entity;

import com.epiis.app.generic.EntityGeneric;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "categoria")
@Getter
@Setter
public class Categoria extends EntityGeneric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCategoria")
    private Integer idCategoria;

    @Column(name = "nombre", nullable = false)
    private String nombre;
}
