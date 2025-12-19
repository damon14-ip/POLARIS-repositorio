package com.epiis.app.dataaccess;

import org.springframework.data.jpa.repository.JpaRepository;
import com.epiis.app.entity.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {}
