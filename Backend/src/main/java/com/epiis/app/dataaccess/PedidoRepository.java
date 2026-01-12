package com.epiis.app.dataaccess;

import org.springframework.data.jpa.repository.JpaRepository;
import com.epiis.app.entity.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, String> {}
