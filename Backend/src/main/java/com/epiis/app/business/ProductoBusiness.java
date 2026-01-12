package com.epiis.app.business;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epiis.app.dataaccess.ProductoRepository;
import com.epiis.app.dataaccess.CategoriaRepository;
import com.epiis.app.dto.DtoProducto;
import com.epiis.app.entity.Producto;
import com.epiis.app.entity.Categoria;

@Service
public class ProductoBusiness {

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    public boolean insert(DtoProducto dtoProducto) {
        Producto producto = new Producto();

        Categoria categoria = categoriaRepository.findById(dtoProducto.getIdCategoria())
                .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
        producto.setCategoria(categoria);

        producto.setNombre(dtoProducto.getNombre());
        producto.setDisponible(dtoProducto.getDisponible());
        producto.setPrecioBase(dtoProducto.getPrecioBase());
        producto.setDescripcion(dtoProducto.getDescripcion());
        producto.setCreatedAt(new Timestamp(new Date().getTime()));
        producto.setUpdatedAt(new Timestamp(new Date().getTime()));

        productoRepository.save(producto);
        return true;
    }

    public List<DtoProducto> getAll() {
        List<Producto> productos = productoRepository.findAll();
        List<DtoProducto> dtos = new ArrayList<>();

        for (Producto p : productos) {
            DtoProducto dto = new DtoProducto();
            dto.setIdProducto(p.getIdProducto());
            dto.setIdCategoria(p.getCategoria().getIdCategoria());
            dto.setNombre(p.getNombre());
            dto.setDisponible(p.getDisponible());
            dto.setPrecioBase(p.getPrecioBase());
            dto.setDescripcion(p.getDescripcion());
            dto.setCreatedAt(p.getCreatedAt());
            dto.setUpdatedAt(p.getUpdatedAt());
            dtos.add(dto);
        }

        return dtos;
    }
}
