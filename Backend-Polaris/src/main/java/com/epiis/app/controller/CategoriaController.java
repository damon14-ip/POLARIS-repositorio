package com.epiis.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.app.business.CategoriaBusiness;
import com.epiis.app.controller.reqresp.RequestCategoriaInsert;
import com.epiis.app.controller.reqresp.ResponseCategoriaInsert;
import com.epiis.app.dto.DtoCategoria;

@RestController
@RequestMapping(path = "categoria")
public class CategoriaController {

    @Autowired
    private CategoriaBusiness categoriaBusiness;

    @PostMapping(path = "insert", consumes = "application/json")
    public ResponseEntity<ResponseCategoriaInsert> insert(@RequestBody RequestCategoriaInsert request) {
        ResponseCategoriaInsert response = new ResponseCategoriaInsert();
        categoriaBusiness.insert(request.getDto().getCategoria());
        response.success();
        response.getListMessage().add("Categoría registrada correctamente");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "getall")
    public ResponseEntity<List<DtoCategoria>> getAll() {
        return new ResponseEntity<>(categoriaBusiness.getAll(), HttpStatus.OK);
    }
}
