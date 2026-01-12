package com.epiis.app.business;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epiis.app.dataaccess.CategoriaRepository;
import com.epiis.app.dto.DtoCategoria;
import com.epiis.app.entity.Categoria;

@Service
public class CategoriaBusiness {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public boolean insert(DtoCategoria dtoCategoria) {
        Categoria categoria = new Categoria();
        categoria.setNombre(dtoCategoria.getNombre());
        categoria.setCreatedAt(new Timestamp(new Date().getTime()));
        categoria.setUpdatedAt(new Timestamp(new Date().getTime()));

        categoriaRepository.save(categoria);
        return true;
    }

    public List<DtoCategoria> getAll() {
        List<Categoria> categorias = categoriaRepository.findAll();
        List<DtoCategoria> dtos = new ArrayList<>();

        for (Categoria c : categorias) {
            DtoCategoria dto = new DtoCategoria();
            dto.setIdCategoria(c.getIdCategoria());
            dto.setNombre(c.getNombre());
            dto.setCreatedAt(c.getCreatedAt());
            dto.setUpdatedAt(c.getUpdatedAt());
            dtos.add(dto);
        }

        return dtos;
    }
}
