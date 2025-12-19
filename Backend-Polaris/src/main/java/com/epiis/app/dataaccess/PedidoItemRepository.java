package com.epiis.app.dataaccess;

import org.springframework.data.jpa.repository.JpaRepository;
import com.epiis.app.entity.PedidoItem;

public interface PedidoItemRepository extends JpaRepository<PedidoItem, Integer> {}
