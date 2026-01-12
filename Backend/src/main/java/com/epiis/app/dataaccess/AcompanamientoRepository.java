package com.epiis.app.dataaccess;

import org.springframework.data.jpa.repository.JpaRepository;
import com.epiis.app.entity.Acompanamiento;

public interface AcompanamientoRepository extends JpaRepository<Acompanamiento, Integer> {}
