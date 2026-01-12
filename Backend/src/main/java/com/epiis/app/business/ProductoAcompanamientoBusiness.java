package com.epiis.app.business;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epiis.app.dataaccess.ProductoAcompanamientoRepository;
import com.epiis.app.dataaccess.ProductoRepository;
import com.epiis.app.dataaccess.AcompanamientoRepository;
import com.epiis.app.dto.DtoProductoAcompanamiento;
import com.epiis.app.entity.ProductoAcompanamiento;
import com.epiis.app.entity.Producto;
import com.epiis.app.entity.Acompanamiento;

@Service
public class ProductoAcompanamientoBusiness {

    @Autowired
    private ProductoAcompanamientoRepository productoAcompanamientoRepository;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private AcompanamientoRepository acompanamientoRepository;

    public boolean insert(DtoProductoAcompanamiento dto) {
        Producto producto = productoRepository.findById(dto.getIdProducto())
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        Acompanamiento acompanamiento = acompanamientoRepository.findById(dto.getIdAcompanamiento())
                .orElseThrow(() -> new RuntimeException("Acompañamiento no encontrado"));

        ProductoAcompanamiento pa = new ProductoAcompanamiento();
        pa.setProducto(producto);
        pa.setAcompanamiento(acompanamiento);
        pa.setCreatedAt(new Timestamp(new Date().getTime()));
        pa.setUpdatedAt(new Timestamp(new Date().getTime()));

        productoAcompanamientoRepository.save(pa);
        return true;
    }

    public List<DtoProductoAcompanamiento> getAll() {
        List<ProductoAcompanamiento> list = productoAcompanamientoRepository.findAll();
        List<DtoProductoAcompanamiento> dtos = new ArrayList<>();

        for (ProductoAcompanamiento pa : list) {
            DtoProductoAcompanamiento dto = new DtoProductoAcompanamiento();
            dto.setIdProdAcomp(pa.getIdProdAcomp());
            dto.setIdProducto(pa.getProducto().getIdProducto());
            dto.setIdAcompanamiento(pa.getAcompanamiento().getIdAcompanamiento());
            dto.setCreatedAt(pa.getCreatedAt());
            dto.setUpdatedAt(pa.getUpdatedAt());
            dtos.add(dto);
        }

        return dtos;
    }
}
