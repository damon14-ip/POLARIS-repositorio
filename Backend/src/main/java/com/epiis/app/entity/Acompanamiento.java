package com.epiis.app.entity;

import com.epiis.app.generic.EntityGeneric;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "acompanamiento")
@Getter
@Setter
public class Acompanamiento extends EntityGeneric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAcompanamiento")
    private Integer idAcompanamiento;

    @Column(name = "nombre", nullable = false)
    private String nombre;
}